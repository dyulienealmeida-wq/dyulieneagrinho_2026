// Banco de Itens Disponíveis para o Crafting
const itens = [
    { icone: '🟫', nome: 'Terra' },
    { icone: '💧', nome: 'Água' },
    { icone: '🍎', nome: 'Restos Orgânicos' },
    { icone: '🍼', nome: 'Garrafa Pet' }
];

let index1 = 0;
let index2 = 1;
let totalXP = 0;
let biomeScore = 50;

// CONTROLES DO MINIGAME
let gameActive = false;
let gameScore = 0;
let gameHealth = 5;
let gameInterval;
let bugTimeout;

function toggleSlot(slotId) {
    if (slotId === 'slot1') {
        index1 = (index1 + 1) % itens.length;
        document.getElementById(slotId).innerText = itens[index1].icone;
    } else {
        index2 = (index2 + 1) % itens.length;
        document.getElementById(slotId).innerText = itens[index2].icone;
    }
    document.getElementById('resultSlot').innerHTML = '❓<div class="result-label" id="resultLabel">Modificado</div>';
}

function craftItem() {
    const item1 = itens[index1].icone;
    const item2 = itens[index2].icone;
    
    let resultadoIcone = '❌';
    let resultadoNome = 'Combinação\nInválida';

    if ((item1 === '🟫' && item2 === '🍎') || (item1 === '🍎' && item2 === '🟫')) {
        resultadoIcone = '🪱';
        resultadoNome = 'Adubo Orgânico\n(Compostagem)';
        addXP(30);
    } else if ((item1 === '💧' && item2 === '🍼') || (item1 === '🍼' && item2 === '💧')) {
        resultadoIcone = '🌱';
        resultadoNome = 'Irrigação por\nGotejamento';
        addXP(30);
    } else if ((item1 === '🟫' && item2 === '💧') || (item1 === '💧' && item2 === '🟫')) {
        resultadoIcone = '🌾';
        resultadoNome = 'Solo Preparado\nAltamente Nutritivo';
        addXP(15);
    }

    document.getElementById('resultSlot').innerHTML = `
        ${resultadoIcone}
        <div class="result-label" style="color: #d4af37; white-space: pre-line;">${resultadoNome}</div>
    `;
}

function addXP(amount) {
    totalXP += amount;
    document.getElementById('xp-counter').innerText = totalXP;
}

function updateBiome(points) {
    biomeScore += points;
    if (biomeScore > 100) biomeScore = 100;
    if (biomeScore < 0) biomeScore = 0;

    const statusElement = document.getElementById('bioma-status');
    if (biomeScore >= 70) {
        statusElement.innerText = "FLORESTA VIVA";
        statusElement.style.color = "#55ff55";
    } else if (biomeScore >= 40 && biomeScore < 70) {
        statusElement.innerText = "SAVANA SECA";
        statusElement.style.color = "#ffaa00";
    } else {
        statusElement.innerText = "NETHER DEGRADADO";
        statusElement.style.color = "#ff5555";
    }
    addXP(10);
}

// LOGICA INTEGRADA DO MINIGAME
function startMinigame() {
    if (gameActive) return;
    gameActive = true;
    gameScore = 0;
    gameHealth = 5;
    document.getElementById('game-score').innerText = gameScore;
    document.getElementById('game-health').innerText = "5/5";
    document.getElementById('btn-start-game').innerText = "DEFENDENDO...";
    
    // Resetar blocos
    const plots = document.querySelectorAll('.farm-plot');
    plots.forEach(plot => {
        plot.innerText = "🌾";
        plot.className = "farm-plot";
        plot.onclick = () => hitPlot(plot);
    });

    // Iniciar loop de aparecimento de lagartas
    gameInterval = setInterval(spawnCaterpillar, 1200);
}

function spawnCaterpillar() {
    const plots = Array.from(document.querySelectorAll('.farm-plot:not(.infested):not(.dead)'));
    if (plots.length === 0 || gameHealth <= 0) {
        endMinigame();
        return;
    }

    const randomPlot = plots[Math.floor(Math.random() * plots.length)];
    randomPlot.innerText = "🐛";
    randomPlot.classList.add('infested');

    // Se o jogador não clicar em 1.5 segundos, a praga consome o bloco
    randomPlot.bugTimeout = setTimeout(() => {
        if (randomPlot.classList.contains('infested')) {
            randomPlot.innerText = "🪹";
            randomPlot.className = "farm-plot dead";
            gameHealth--;
            document.getElementById('game-health').innerText = `${gameHealth}/5`;
            if (gameHealth <= 0) endMinigame();
        }
    }, 1500);
}

function hitPlot(plot) {
    if (!gameActive) return;

    if (plot.classList.contains('infested')) {
        clearTimeout(plot.bugTimeout);
        plot.innerText = "🐞🌾"; // Joaninha salvando a plantação!
        plot.className = "farm-plot";
        gameScore += 10;
        document.getElementById('game-score').innerText = gameScore;
        addXP(5); // Dá XP real para o perfil do site

        setTimeout(() => {
            if (!plot.classList.contains('infested') && !plot.classList.contains('dead')) {
                plot.innerText = "🌾";
            }
        }, 500);
    }
}

function endMinigame() {
    gameActive = false;
    clearInterval(gameInterval);
    document.getElementById('btn-start-game').innerText = "INICIAR DEFESA";
    alert(`Fim de Jogo! Você defendeu a lavoura com manejo biológico e acumulou ${gameScore} pontos extras!`);
}
