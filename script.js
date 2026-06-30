@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Ubuntu:wght@400;500;700&display=swap');

:root {
    --bg-dark: #0a0a0a;
    --bg-surface: #141414;
    --bg-card: #1f1f1f;
    --gold-clean: #d4af37;
    --text-color: #e0e0e0;
    --pixel-border: 4px solid var(--gold-clean);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-color);
    font-family: 'Ubuntu', sans-serif;
    padding-top: 50px;
}

/* TOP PLAYER HUD BAR */
.player-hud {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #000;
    border-bottom: 3px solid #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.65rem;
    z-index: 1000;
}

.gold-text { color: var(--gold-clean); }

header {
    border-bottom: var(--pixel-border);
    background-color: var(--bg-surface);
    padding: 40px 20px;
    text-align: center;
}

header h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.8rem;
    color: var(--gold-clean);
    text-shadow: 3px 3px #000;
}

.subtitle {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
    margin-top: 15px;
    color: #888;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
}

/* CARDS DE INFORMAÇÃO */
.agro-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

@media (max-width: 768px) {
    .agro-info { grid-template-columns: 1fr; }
}

.card {
    background-color: var(--bg-card);
    border: 4px solid #2d2d2d;
    padding: 25px;
    box-shadow: 6px 6px 0px #000;
}

.card:hover { border-color: var(--gold-clean); }

.card h2 { font-family: 'Press Start 2P', cursive; font-size: 0.9rem; margin-bottom: 15px; }

.pixel-art-placeholder {
    width: 100%;
    height: 140px;
    background-color: #111;
    background-image: linear-gradient(45deg, #182218 25%, transparent 25%), 
                      linear-gradient(-45deg, #182218 25%, transparent 25%);
    background-size: 30px 30px;
    margin-bottom: 25px;
    border: 2px solid #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gold-glyph { font-size: 2.5rem; }
p { line-height: 1.7; color: #b5b5b5; }

/* SEÇÕES GERAIS DE JOGO */
.game-section {
    background-color: var(--bg-surface);
    border: 4px solid #2d2d2d;
    padding: 30px;
    margin-top: 40px;
    box-shadow: 6px 6px 0px #000;
}

.game-section h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.1rem;
    color: var(--gold-clean);
    margin-bottom: 15px;
}

/* INTERAÇÃO DO MINIGAME (NOVO) */
.minigame-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.game-stats {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    display: flex;
    gap: 20px;
}

.farm-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
}

.farm-plot {
    aspect-ratio: 1;
    background-color: #2e1d0b;
    border: 4px solid #4a3319;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s;
}

.farm-plot.infested {
    background-color: #5c6e3b;
    border-color: #a2b85c;
    animation: shake 0.3s infinite;
}

.farm-plot.dead {
    background-color: #1a1108;
    border-color: #2b1f13;
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    100% { transform: translate(-1px, -1px) rotate(1deg); }
}

/* BOTÕES GERAIS */
.btn-game, .btn-choice {
    background-color: #050505;
    border: 3px solid #444;
    color: #fff;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
    cursor: pointer;
}

.btn-game {
    padding: 12px 24px;
    border-color: var(--gold-clean);
    color: var(--gold-clean);
    box-shadow: 3px 3px 0px #332400;
}

.btn-game:hover { background-color: var(--gold-clean); color: #000; }

.btn-choice {
    display: block;
    width: 100%;
    text-align: left;
    padding: 15px;
    margin-top: 10px;
}

.btn-choice:hover { border-color: var(--gold-clean); background-color: #1a1a1a; }

/* CRAFTING CONTAINER */
.crafting-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 30px 0;
}

.grid-slots { display: flex; gap: 15px; }

.slot {
    width: 90px;
    height: 90px;
    background-color: #252525;
    border: 4px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
}

.arrow { font-family: 'Press Start 2P'; font-size: 2rem; color: var(--gold-clean); }

.result-slot {
    width: 130px;
    height: 130px;
    background-color: #2a2a2a;
    border: 4px dashed var(--gold-clean);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.result-label { font-size: 0.5rem; font-family: 'Press Start 2P'; margin-top: 8px; color: #aaa; text-align: center; }

footer {
    text-align: center;
    padding: 40px;
    margin-top: 60px;
    font-family: 'Press Start 2P';
    font-size: 0.6rem;
    color: #444;
    border-top: 4px solid #1a1a1a;
}
