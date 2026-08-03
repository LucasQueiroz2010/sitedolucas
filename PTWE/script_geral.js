const PERFIL_PADRAO = {
    nome: 'Player',
    foto: '../imagens/usuario_padrao.png'
};

function normalizarAvatarPath(caminho) {
    if (!caminho || typeof caminho !== 'string' || caminho.trim() === '') {
        return PERFIL_PADRAO.foto;
    }

    const path = caminho.trim();
    if (path === 'usuario_padrao.png') return PERFIL_PADRAO.foto;
    if (path.startsWith('imagens/')) return '../' + path;
    if (path.startsWith('./')) return '../' + path.slice(2);
    if (!path.includes('/')) return '../' + path;
    return path;
}

const AVATARES_PADRAO = [
    '../imagens/usuario_padrao.png',
    '../imagens/Foto.jpeg',
    '../imagens/Isaac.gif'
];

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioAtual'));
if (!usuarioLogado) {
    usuarioLogado = {
        nome: PERFIL_PADRAO.nome,
        foto: PERFIL_PADRAO.foto,
        progressoPTWE: {
            modosDesbloqueados: { noise: true, doise: false, faker: false },
            ranks: {
                noise: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 },
                doise: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 },
                faker: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 }
            },
            partidasJogadas: { noise: 0, doise: 0, faker: 0 }
        }
    };
    atualizarBancoDeDados(usuarioLogado);
} else {
    usuarioLogado.foto = normalizarAvatarPath(usuarioLogado.foto || PERFIL_PADRAO.foto);
    if (!usuarioLogado.progressoPTWE) {
        usuarioLogado.progressoPTWE = {
            modosDesbloqueados: { noise: true, doise: false, faker: false },
            ranks: {
                noise: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 },
                doise: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 },
                faker: { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 }
            },
            partidasJogadas: { noise: 0, doise: 0, faker: 0 }
        };
        atualizarBancoDeDados(usuarioLogado);
    } else if (!usuarioLogado.progressoPTWE.partidasJogadas) {
        usuarioLogado.progressoPTWE.partidasJogadas = { noise: 0, doise: 0, faker: 0 };
        atualizarBancoDeDados(usuarioLogado);
    }
}

function atualizarBancoDeDados(usuarioModificado) {
    localStorage.setItem('usuarioAtual', JSON.stringify(usuarioModificado));
    let usuariosDB = JSON.parse(localStorage.getItem('usuariosDB')) || [];
    let index = usuariosDB.findIndex(u => u.nome === usuarioModificado.nome);
    if(index !== -1) {
        usuariosDB[index] = usuarioModificado;
        localStorage.setItem('usuariosDB', JSON.stringify(usuariosDB));
    }
}



const assetsParaCarregar = [
    'imagens_jogo/P_sprites/Parry1.gif', 'imagens_jogo/P_sprites/Parry2.gif', 'imagens_jogo/P_sprites/Parry3.gif',
    'imagens_jogo/P_sprites/Pepper_Pizza_Peppino.gif', 'imagens_jogo/P_sprites/Peppino_fireass.gif',
    'imagens_jogo/P_sprites/Peppino_grab.gif', 'imagens_jogo/P_sprites/Peppino_hurt.gif',
    'imagens_jogo/P_sprites/Peppino_idle.gif', 'imagens_jogo/P_sprites/Peppino_jump.gif',
    'imagens_jogo/P_sprites/Peppino_lose.gif', 'imagens_jogo/P_sprites/Peppino_milk.gif',
    'imagens_jogo/P_sprites/Peppino_run.gif', 'imagens_jogo/P_sprites/Peppino_stomp.gif',
    'imagens_jogo/P_sprites/Peppino_stun.gif', 'imagens_jogo/P_sprites/Peppino_walk.gif',
    'imagens_jogo/P_sprites/Peppino_wall.gif', 'imagens_jogo/P_sprites/Peppino_wallfall.gif',
    'imagens_jogo/P_sprites/Peppino_win.gif',
    'imagens_jogo/P_sprites/taunt1.png', 'imagens_jogo/P_sprites/taunt2.png', 'imagens_jogo/P_sprites/taunt3.png',
    'imagens_jogo/P_sprites/taunt4.png', 'imagens_jogo/P_sprites/taunt5.png', 'imagens_jogo/P_sprites/taunt6.png',
    'imagens_jogo/P_sprites/taunt7.png', 'imagens_jogo/P_sprites/taunt8.png', 'imagens_jogo/P_sprites/taunt9.png',
    'imagens_jogo/P_sprites/taunt10.png',
    'imagens_jogo/N_sprites/Noise_charge.gif', 'imagens_jogo/N_sprites/Noise_D_hit.gif',
    'imagens_jogo/N_sprites/Noise_D_win.png', 'imagens_jogo/N_sprites/Noise_doublejump.gif',
    'imagens_jogo/N_sprites/Noise_drop.gif', 'imagens_jogo/N_sprites/Noise_fireass.gif',
    'imagens_jogo/N_sprites/Noise_happy.gif', 'imagens_jogo/N_sprites/Noise_hurt.gif',
    'imagens_jogo/N_sprites/Noise_idle_D.gif', 'imagens_jogo/N_sprites/Noise_joke.png',
    'imagens_jogo/N_sprites/Noise_jump.png', 'imagens_jogo/N_sprites/Noise_lose.gif',
    'imagens_jogo/N_sprites/Noise_mach1.gif', 'imagens_jogo/N_sprites/Noise_mach2.gif',
    'imagens_jogo/N_sprites/Noise_milk.gif', 'imagens_jogo/N_sprites/Noise_P_hit.gif',
    'imagens_jogo/N_sprites/Noise_P_win.gif', 'imagens_jogo/N_sprites/Noise_parry.gif',
    'imagens_jogo/N_sprites/Noise_PD.gif', 'imagens_jogo/N_sprites/Noise_PP.gif',
    'imagens_jogo/N_sprites/Noise_scaried.gif', 'imagens_jogo/N_sprites/Noise_walk.gif',
    'imagens_jogo/N_sprites/Noise_wallhit.gif', 'imagens_jogo/N_sprites/Noise_warn.gif',
    'imagens_jogo/N_sprites/Noise_win.gif',
    'imagens_jogo/N_sprites/Pepper_Pizza_Noise.gif',
    'imagens_jogo/G_sprites/Gustavo_drop.gif', 'imagens_jogo/G_sprites/Gustavo_idle.gif',
    'imagens_jogo/G_sprites/Gustavo_N_hit.gif', 'imagens_jogo/G_sprites/Gustavo_N_win.gif',
    'imagens_jogo/G_sprites/Gustavo_P_hit.gif', 'imagens_jogo/G_sprites/Gustavo_P_win.gif',
    'imagens_jogo/G_sprites/Gustavo_PN.gif', 'imagens_jogo/G_sprites/Gustavo_PP.gif',
    'imagens_jogo/Stuff/Peppino_hat.gif', 'imagens_jogo/Stuff/Peppino_hat_damaged.png',
    'imagens_jogo/Toppings/Cheese.gif', 'imagens_jogo/Toppings/Mushroom.gif',
    'imagens_jogo/Toppings/Pineapple.gif', 'imagens_jogo/Toppings/Tomato.gif',
    'imagens_jogo/Toppings/Weiner.gif', 'imagens_jogo/Toppings/Gerome.gif',
    'imagens_jogo/Toppings/Life_hat.gif', 'imagens_jogo/Toppings/Pepper_Pizza.gif',
    'imagens_jogo/Stuff/Platform.gif',
    'imagens_jogo/Stuff/backwoag.png', 'imagens_jogo/Stuff/backwong.png',
    'imagens_jogo/Stuff/dnuorgkcab.png', 'imagens_jogo/Stuff/loading_screen.png',
    'imagens_jogo/Stuff/Mode_Screen.png', 'imagens_jogo/Stuff/Title_Screen.png',
    'imagens_jogo/Stuff/Tutorial_background.png',
    'imagens_jogo/Stuff/Pizza_Granny_Idle.gif', 'imagens_jogo/Stuff/Pizza_Granny_Talk.gif',
    'imagens_jogo/Ranks/P-Rank.png', 'imagens_jogo/Ranks/S-Rank.png',
    'imagens_jogo/Ranks/A-Rank.png', 'imagens_jogo/Ranks/B-Rank.png',
    'imagens_jogo/Ranks/C-Rank.png', 'imagens_jogo/Ranks/D-Rank.png',
    'imagens_jogo/Ranks/DEAD-Rank.png',
    'soundtrack_jogo/Peppino/Peppino_grab.wav', 'soundtrack_jogo/Peppino/Peppino_hurt.wav',
    'soundtrack_jogo/Peppino/Peppino_jump.wav', 'soundtrack_jogo/Peppino/Peppino_run.wav',
    'soundtrack_jogo/Peppino/Peppino_step.wav', 'soundtrack_jogo/Stuff/Noise_Music.mp3',
    'soundtrack_jogo/Stuff/Doise_Music.mp3', 'soundtrack_jogo/Stuff/Faker_Music.mp3',
    'soundtrack_jogo/Stuff/Parry.wav', 'soundtrack_jogo/Stuff/Start_Music.mp3',
    'soundtrack_jogo/Stuff/Taunt.wav', 'soundtrack_jogo/Stuff/Pause_music.mp3',
    'soundtrack_jogo/Gustavo/Gustavo_drop.mp3', 'soundtrack_jogo/Noise/Noise_jump.wav',
    'soundtrack_jogo/Noise/Noise_double_jump.wav', 'soundtrack_jogo/Noise/Noise_hurt.wav',
    'soundtrack_jogo/Noise/Noise_mach1.wav', 'soundtrack_jogo/Noise/Noise_mach2.wav',
    'soundtrack_jogo/Noise/Noise_wallhit.wav', 'soundtrack_jogo/Noise/woag.wav',
    'soundtrack_jogo/Peppino/Peppino_scream.wav',
    'soundtrack_jogo/Stuff/Topping_collect.wav', 'soundtrack_jogo/Stuff/Gerome_spawn.wav',
    'soundtrack_jogo/Stuff/Gerome_collect.wav', 'soundtrack_jogo/Stuff/Pepper_spawn.wav',
    'soundtrack_jogo/Stuff/Pepper_collect.wav', 'soundtrack_jogo/Stuff/Hat_collect.wav',
    'soundtrack_jogo/Stuff/Gerome_collect.wav',
    'soundtrack_jogo/Stuff/Pizza_Granny1.wav', 'soundtrack_jogo/Stuff/Pizza_Granny2.wav', 'soundtrack_jogo/Stuff/Pizza_Granny3.wav',
    'soundtrack_jogo/Stuff/round_over.wav',
    'soundtrack_jogo/Stuff/Tutorial_music.mp3',
    'soundtrack_jogo/Peppino/Pepper_Pizza_Peppino.mp3',
    'soundtrack_jogo/Noise/Pepper_Pizza_Noise.mp3',
    'imagens_jogo/Stuff/taunt_effect.png'
];

let arquivosCarregados = 0;
let carregamentoConcluido = false;
let preloadTimeoutId = null;
let jogoRodando = false;
let jogoPausado = false;
let gameLoopId;

const musicaPrincipal = new Audio('soundtrack_jogo/Stuff/Start_Music.mp3'); 
musicaPrincipal.loop = true;
const musicaBatalha = new Audio(); 
musicaBatalha.loop = true;
const musicaPause = new Audio('soundtrack_jogo/Stuff/Pause_music.mp3');
musicaPause.loop = true;

const MUSICAS_MODO = {
    noise: 'soundtrack_jogo/Stuff/Noise_Music.mp3',
    doise: 'soundtrack_jogo/Stuff/Doise_Music.mp3',
    faker: 'soundtrack_jogo/Stuff/Faker_Music.mp3',
    tutorial: 'soundtrack_jogo/Stuff/Tutorial_music.mp3'
};

const MUSICA_PEPPER_PEPPINO = 'soundtrack_jogo/Peppino/Pepper_Pizza_Peppino.mp3';
const MUSICA_PEPPER_NOISE = 'soundtrack_jogo/Noise/Pepper_Pizza_Noise.mp3';

const WORLD_WIDTH_TUTORIAL = 2400;
const CHAO_Y = 500;
let cameraX = 0;
let tutorialMode = false;
let tutorialDialogTimer = 0;

const tutorialPlataformas = [
    { x: 120, y: 420, largura: 300, altura: 40 },
    { x: 520, y: 380, largura: 300, altura: 40 },
    { x: 980, y: 420, largura: 250, altura: 40 },
    { x: 1400, y: 380, largura: 280, altura: 40 },
    { x: 1880, y: 420, largura: 280, altura: 40 }
];

const tutorialPizzaGrannies = [
    {
        x: 240,
        y: CHAO_Y - 160,
        largura: 120,
        altura: 160,
        mensagem: 'Hey, I\'m the Pizza Granny! Use [← and →] to walk and hold [SHIFT] to run faster.',
        falaAtiva: false,
        falada: false
    },
    {
        x: 660,
        y: CHAO_Y - 160,
        largura: 120,
        altura: 160,
        mensagem: 'Press [Z] to jump. If you are in mid-air and walk in the direction of the wall, you will start to climb it. Keep walking inthe direction of the wall to keep climbing, but you can only climb a wall for a few seconds before you start falling.',
        falaAtiva: false,
        falada: false
    },
    {
        x: 1120,
        y: CHAO_Y - 160,
        largura: 120,
        altura: 160,
        mensagem: 'Use [X] to use your grab attack and [C] to do a sick taunt! And you can also parry your enemies, but it only works if you can taunt right before they hit you.',
        falaAtiva: false,
        falada: false
    },
    {
        x: 1600,
        y: CHAO_Y - 160,
        largura: 120,
        altura: 160,
        mensagem: 'Toppings gives you +100 Pizza Points (PP). Gerome gives +500 PP when collected, but he can only spawn once on the screen. If you hit your enemy, Gustavo may give you some HP, but if you already have full HP, the HP topping will give you +50 PP.',
        falaAtiva: false,
        falada: false
    },
    {
        x: 2060,
        y: CHAO_Y - 160,
        largura: 120,
        altura: 160,
        mensagem: 'The Pepper Pizza is a supreme power-up! It gives you temporary imunity to damage and makes The Noise crap himself. But watch out if The Noise gets the Pepper Pizza...',
        falaAtiva: false,
        falada: false
    }
];

function getWorldWidth() {
    return tutorialMode ? WORLD_WIDTH_TUTORIAL : LARGURA_TELA;
}

function trocarMusicaBatalha(caminho) {
    const srcAtual = decodeURIComponent(musicaBatalha.src || '');
    if (!srcAtual.endsWith(caminho)) {
        musicaBatalha.pause();
        musicaBatalha.currentTime = 0;
        musicaBatalha.src = caminho;
        musicaBatalha.loop = true;
    }
    if (jogoRodando && !jogoPausado) musicaBatalha.play().catch(e => {});
}

function atualizarMusicaPepper() {
    if (pepperMusicaDono === 'peppino' && peppino.pepperTimer > 0) trocarMusicaBatalha(MUSICA_PEPPER_PEPPINO);
    else if (pepperMusicaDono === 'noise' && inimigo.pepperTimer > 0) trocarMusicaBatalha(MUSICA_PEPPER_NOISE);
    else if (peppino.pepperTimer > 0) trocarMusicaBatalha(MUSICA_PEPPER_PEPPINO);
    else if (inimigo.pepperTimer > 0) trocarMusicaBatalha(MUSICA_PEPPER_NOISE);
    else trocarMusicaBatalha(MUSICAS_MODO[modoAtualDaPartida]);
}

const audiosAtivos = {};
function tocarSom(caminho, loop = false, idCanais = null) {
    let audio = new Audio(caminho);
    audio.loop = loop;
    audio.play().catch(e=>{});
    if (idCanais) {
        if (audiosAtivos[idCanais]) audiosAtivos[idCanais].pause();
        audiosAtivos[idCanais] = audio;
    }
    return audio;
}

function pararSom(idCanais) {
    if (!audiosAtivos[idCanais]) return;
    audiosAtivos[idCanais].pause();
    audiosAtivos[idCanais].currentTime = 0;
    delete audiosAtivos[idCanais];
}

let modoSelecionadoNoMenu = 'noise';
let modoAtualDaPartida = 'noise';
let avatarSelecionadoTemporario = null;

const GRAVIDADE = 0.6;
const LARGURA_TELA = 900;
const FPS = 60;
const TEMPO_ROUND_PADRAO = 60;
const TEMPO_ROUND_POR_MODO = { noise: 60, doise: 90, faker: 60, tutorial: 999 };
const VIDA_MAXIMA_PEPPINO = 6;
const PEPPER_DURACAO = Math.round(7.5 * FPS);
const PEPPER_AVISO_FIM = Math.round(2 * FPS);
const PEPPER_AUTO_PARRY_DURACAO = 24;
const PEPPER_AUTO_PARRY_INTERVALO = 55;
const STUN_NOISE_PADRAO = 3 * FPS;
const STUN_NOISE_POS_PEPPER = 10 * FPS;
const JOKE_NOISE_POS_HIT = Math.round(1.5 * FPS);
const SKATE_COOLDOWN = 15 * FPS;
const DELAY_TELA_RANK = 10 * FPS;
const OFFSET_TOPO_VISUAL_PLATAFORMA =   16;
const CHANCE_SPAWN_PEPPER = 0.025;

const arenaPlataformas = [
    { x: 200, y: 380, largura: 500, altura: 60 },
    { x: 350, y: 240, largura: 200, altura: 40 }
];

const controles = { esquerda: false, direita: false, baixo: false, shift: false, z: false, x: false, c: false, z_press: false, x_press: false, c_press: false };

document.addEventListener('keydown', (e) => {
    if (rankPronto && e.key.toLowerCase() === 'z') {
        voltarParaTitulo();
        return;
    }
    if (e.key.toLowerCase() === 'p') {
        if (jogoRodando) alternarPause();
        return;
    }
    if (jogoPausado) return;

    if (e.key === 'ArrowLeft') controles.esquerda = true;
    if (e.key === 'ArrowRight') controles.direita = true;
    if (e.key === 'ArrowDown') controles.baixo = true;
    if (e.key === 'Shift') controles.shift = true;
    if (e.key.toLowerCase() === 'z') { if(!controles.z) controles.z_press = true; controles.z = true; }
    if (e.key.toLowerCase() === 'x') { if(!controles.x) controles.x_press = true; controles.x = true; }
    if (e.key.toLowerCase() === 'c') { if(!controles.c) controles.c_press = true; controles.c = true; }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') controles.esquerda = false;
    if (e.key === 'ArrowRight') controles.direita = false;
    if (e.key === 'ArrowDown') controles.baixo = false;
    if (e.key === 'Shift') controles.shift = false;
    if (e.key.toLowerCase() === 'z') controles.z = false;
    if (e.key.toLowerCase() === 'x') controles.x = false;
    if (e.key.toLowerCase() === 'c') controles.c = false;
});

const peppino = { 
    x: 0, y: 0, vx: 0, vy: 0, largura: 100, altura: 100, noChao: false,
    estado: 'idle', direcao: 1, 
    wallTimer: 0, tauntTimer: 0, tauntCooldown: 0, grabTimer: 0, hurtTimer: 0, dropTimer: 0,
    tauntId: 1, parryId: 1, vida: VIDA_MAXIMA_PEPPINO, invencivelTimer: 0, pepperTimer: 0,
    autoParryCooldown: 0,
    hurtType: 'hurt'
};

const inimigo = {
    x: 750, y: 0, vx: -4, vy: 0, largura: 100, altura: 100, noChao: false,
    estado: 'walk', stunTimer: 0, direcao: -1, jumpTimer: 0, doubleJumpDisponivel: true,
    contatoCooldown: 0, pepperTimer: 0, skateCooldown: SKATE_COOLDOWN,
    skateTimer: 0, skateDirecao: -1, somSkateTocou: false, dropTimer: 0,
    parryTimer: 0, autoParryCooldown: 0
};
const gustavo = { x: 400, y: CHAO_Y - 100, estado: 'idle', timer: 0 };
let toppings = [];
let toppingIdSeq = 0;
let toppingSpawnTimer = 120;
let geromeSpawnado = false;
let geromeSpawnTimer = 0;
let roundFramesRestantes = TEMPO_ROUND_PADRAO * FPS;
let score = 0;
let roundFinalizado = false;
let rankPronto = false;
let rankDelayTimer = 0;
let vencedorRound = null;
let roundRankRegistrado = false;
let somMovimentoAtual = 'none';
let pepperMusicaDono = 'none';

function iniciarPreloader() {
    document.getElementById('loading-screen').style.display = 'flex';
    if (assetsParaCarregar.length === 0) { finalizarCarregamento(); return; }
    if (preloadTimeoutId) clearTimeout(preloadTimeoutId);
    preloadTimeoutId = setTimeout(() => {
        if (!carregamentoConcluido) {
            carregamentoConcluido = true;
            finalizarCarregamento();
        }
    }, 10000);

    assetsParaCarregar.forEach(src => {
        if (src.endsWith('.mp3') || src.endsWith('.wav')) {
            const audio = new Audio();
            audio.addEventListener('canplaythrough', registrarProgresso, { once: true });
            audio.addEventListener('loadeddata', registrarProgresso, { once: true });
            audio.addEventListener('error', registrarProgresso, { once: true });
            audio.src = src;
            audio.load();
        } else {
            const img = new Image();
            img.addEventListener('load', registrarProgresso, { once: true });
            img.addEventListener('error', registrarProgresso, { once: true });
            img.src = src;
            if (img.complete) registrarProgresso();
        }
    });
}

function registrarProgresso() {
    if (carregamentoConcluido) return;
    arquivosCarregados++;
    const barra = document.getElementById('barra-loading');
    if (barra) barra.style.width = Math.floor((arquivosCarregados / assetsParaCarregar.length) * 100) + '%';
    if (arquivosCarregados >= assetsParaCarregar.length) {
        carregamentoConcluido = true;
        if (preloadTimeoutId) clearTimeout(preloadTimeoutId);
        setTimeout(finalizarCarregamento, 300);
    }
}

function finalizarCarregamento() {
    let telaLoading = document.getElementById('loading-screen');
    let telaStart = document.getElementById('start-screen');
    let telaModo = document.getElementById('mode-screen');
    let telaPause = document.getElementById('pause-screen');
    let telaTrocaModo = document.getElementById('change-mode-pause-screen');

    if (telaLoading) telaLoading.style.display = 'none';
    if (telaStart) telaStart.style.display = 'flex';
    if (telaModo) telaModo.style.display = 'none';
    if (telaPause) telaPause.style.display = 'none';
    if (telaTrocaModo) telaTrocaModo.style.display = 'none';
    atualizarBotoesDoMenu();
}

function irParaModos() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('mode-screen').style.display = 'flex';
}

function atualizarBotoesDoMenu() {
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    const progresso = usuarioLogado.progressoPTWE.modosDesbloqueados;
    const btnDoise = document.getElementById('btn-doise');
    const btnFaker = document.getElementById('btn-faker');
    if (btnDoise) btnDoise.disabled = !progresso.doise;
    if (btnFaker) btnFaker.disabled = !progresso.faker;
}

function selecionarModo(modo) {
    const btn = document.getElementById('btn-' + modo);
    if (btn.disabled) return;
    modoSelecionadoNoMenu = modo;
    document.querySelectorAll('.btn-modo').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function clicarStartBattle() {
    document.getElementById('mode-screen').style.display = 'none';
    modoAtualDaPartida = modoSelecionadoNoMenu;
    if (usuarioLogado && usuarioLogado.progressoPTWE && modoAtualDaPartida !== 'tutorial') {
        usuarioLogado.progressoPTWE.partidasJogadas[modoAtualDaPartida] += 1;
        atualizarBancoDeDados(usuarioLogado);
    }
    musicaPrincipal.pause();
    musicaPrincipal.currentTime = 0;
    prepararArena(modoAtualDaPartida);
}

function prepararArena(modo) {
    const gameArea = document.getElementById('game-area');
    const playerDiv = document.getElementById('player');
    const noiseDiv = document.getElementById('noise');
    const gustavoDiv = document.getElementById('gustavo');
    const tutorialPlatformContainer = document.getElementById('tutorial-platform-container');
    const tutorialDialog = document.getElementById('tutorial-dialog');

    playerDiv.style.display = 'block';
    noiseDiv.style.display = 'block';
    gustavoDiv.style.display = 'block';
    if (tutorialPlatformContainer) tutorialPlatformContainer.innerHTML = '';
    if (tutorialDialog) tutorialDialog.style.display = 'none';

    tutorialMode = modo === 'tutorial';
    cameraX = 0;

    if (modo === 'noise') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/backwoag.png')";
    } else if (modo === 'doise') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/backwong.png')";
    } else if (modo === 'faker') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/dnuorgkcab.png')";
    } else if (modo === 'tutorial') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/Tutorial_background.png')";
        gameArea.style.backgroundPosition = 'left bottom';
        gameArea.style.backgroundSize = 'cover';
        noiseDiv.style.display = 'none';
        gustavoDiv.style.display = 'none';
        document.getElementById('plataforma1').style.display = 'none';
        document.getElementById('plataforma2').style.display = 'none';
        criarPlataformasTutorial();
        criarPizzaGrannies();
    }

    peppino.x = 50; peppino.y = CHAO_Y - peppino.altura; peppino.vx = 0; peppino.vy = 0; peppino.estado = 'idle';
    peppino.vida = VIDA_MAXIMA_PEPPINO; peppino.invencivelTimer = 0; peppino.pepperTimer = 0;
    peppino.autoParryCooldown = 0;
    inimigo.x = 750; inimigo.y = CHAO_Y - inimigo.altura; inimigo.vx = -4; inimigo.vy = 0; inimigo.estado = 'walk';
    inimigo.direcao = -1; inimigo.stunTimer = 0; inimigo.pepperTimer = 0; inimigo.contatoCooldown = 0;
    inimigo.skateCooldown = SKATE_COOLDOWN; inimigo.skateTimer = 0; inimigo.somSkateTocou = false;
    inimigo.parryTimer = 0; inimigo.autoParryCooldown = 0;
    pararSonsSkate();
    gustavo.x = 400; gustavo.y = CHAO_Y - 100; gustavo.estado = 'idle'; gustavo.timer = 0;
    roundFramesRestantes = (TEMPO_ROUND_POR_MODO[modo] || TEMPO_ROUND_PADRAO) * FPS;
    score = 0;
    roundFinalizado = false;
    rankPronto = false;
    rankDelayTimer = 0;
    vencedorRound = null;
    roundRankRegistrado = false;
    geromeSpawnado = false;
    toppingSpawnTimer = 45;
    geromeSpawnTimer = 8 * FPS;
    pepperMusicaDono = 'none';
    limparToppings();
    document.getElementById('hud').style.display = 'flex';
    document.getElementById('gustavo').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    atualizarHUD();

    if (!tutorialMode) {
        arenaPlataformas.forEach((plat, index) => {
            let div = document.getElementById('plataforma' + (index + 1));
            if (div) {
                div.style.display = 'block';
                div.style.left = plat.x + 'px';
                div.style.top = plat.y + 'px';
                div.style.width = plat.largura + 'px';
                div.style.height = plat.altura + 'px';
                div.style.backgroundImage = "url('imagens_jogo/Stuff/Platform.gif')";
                div.style.backgroundSize = "100% 100%";
                div.style.backgroundPosition = "0 0";
                div.style.backgroundRepeat = "no-repeat";
                div.style.position = "absolute";
                div.style.zIndex = "50";
            }
        });
    }

    jogoRodando = true;
    jogoPausado = false;
    atualizarMusicaPepper();
    renderizarObjetos();
    cancelAnimationFrame(gameLoopId);
    gameLoopId = requestAnimationFrame(loopDoJogo);
}

function criarPlataformasTutorial() {
    const container = document.getElementById('tutorial-platform-container');
    if (!container) return;
    container.innerHTML = '';
    tutorialPlataformas.forEach((plat) => {
        const div = document.createElement('div');
        div.className = 'plataforma-fisica';
        div.style.left = plat.x + 'px';
        div.style.top = plat.y + 'px';
        div.style.width = plat.largura + 'px';
        div.style.height = plat.altura + 'px';
        div.style.backgroundImage = "url('imagens_jogo/Stuff/Platform.gif')";
        div.style.position = 'absolute';
        div.style.zIndex = '50';
        container.appendChild(div);
    });
}

function criarPizzaGrannies() {
    const container = document.getElementById('pizza-granny-container');
    if (!container) return;
    container.innerHTML = '';
    tutorialPizzaGrannies.forEach((granny, index) => {
        const div = document.createElement('div');
        div.className = 'pizza-granny';
        div.dataset.index = index;
        div.style.left = granny.x + 'px';
        div.style.top = granny.y + 'px';
        div.style.width = granny.largura + 'px';
        div.style.height = granny.altura + 'px';
        div.style.backgroundImage = "url('imagens_jogo/Stuff/Pizza_Granny_Idle.gif')";
        div.style.position = 'absolute';
        div.style.zIndex = '55';
        container.appendChild(div);
    });
}

function getRenderX(x) {
    return tutorialMode ? x - cameraX : x;
}

function atualizarTutorial() {
    if (!tutorialMode) return;
    const gameArea = document.getElementById('game-area');
    const dialog = document.getElementById('tutorial-dialog');

    cameraX = Math.min(Math.max(peppino.x + peppino.largura / 2 - LARGURA_TELA / 2, 0), WORLD_WIDTH_TUTORIAL - LARGURA_TELA);
    gameArea.style.backgroundPosition = `${-cameraX}px bottom`;

    let dialogText = '';
    tutorialPizzaGrannies.forEach((granny, index) => {
        const isNear = retangulosColidem(peppino, granny);
        if (isNear && !granny.falada) {
            granny.falada = true;
            granny.falaAtiva = true;
            granny.talkingTimer = 4 * FPS;
            playPizzaGrannySound();
        }
        if (granny.falaAtiva) {
            granny.talkingTimer = Math.max(0, (granny.talkingTimer || 0) - 1);
            if (granny.talkingTimer === 0) granny.falaAtiva = false;
            if (!dialogText) dialogText = granny.mensagem;
        }
    });

    if (dialogText) {
        dialog.innerText = dialogText;
        dialog.style.display = 'block';
        tutorialDialogTimer = 120;
    } else if (tutorialDialogTimer > 0) {
        tutorialDialogTimer -= 1;
        if (tutorialDialogTimer === 0) dialog.style.display = 'none';
    }
}

function playPizzaGrannySound() {
    const options = [
        'soundtrack_jogo/Stuff/Pizza_Granny1.wav',
        'soundtrack_jogo/Stuff/Pizza_Granny2.wav',
        'soundtrack_jogo/Stuff/Pizza_Granny3.wav'
    ];
    const choice = options[Math.floor(Math.random() * options.length)];
    tocarSom(choice);
}

function alternarPause() {
    jogoPausado = !jogoPausado;
    if (jogoPausado) {
        document.getElementById('pause-screen').style.display = 'flex';
        musicaBatalha.pause();
        if (audiosAtivos['passos']) audiosAtivos['passos'].pause();
        musicaPause.play().catch(e => {});
    } else {
        document.getElementById('pause-screen').style.display = 'none';
        fecharTrocaModoPause();
        musicaPause.pause();
        musicaPause.currentTime = 0;
        musicaBatalha.play().catch(e => {});
        gameLoopId = requestAnimationFrame(loopDoJogo);
    }
}

function reiniciarPartida() {
    jogoPausado = false;
    document.getElementById('pause-screen').style.display = 'none';
    musicaPause.pause();
    musicaPause.currentTime = 0;
    cancelAnimationFrame(gameLoopId);
    prepararArena(modoAtualDaPartida);
}

function voltarParaTitulo() {
    jogoRodando = false;
    jogoPausado = false;
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('player').style.display = 'none';
    document.getElementById('noise').style.display = 'none';
    document.getElementById('gustavo').style.display = 'none';
    document.getElementById('plataforma1').style.display = 'none';
    document.getElementById('plataforma2').style.display = 'none';
    document.getElementById('hud').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    limparToppings();
    pararSonsSkate();
    rankPronto = false;
    rankDelayTimer = 0;
    musicaBatalha.pause();
    musicaPause.pause();
    musicaPause.currentTime = 0;
    cancelAnimationFrame(gameLoopId);
    document.getElementById('start-screen').style.display = 'flex';
    musicaPrincipal.play().catch(e => {});
}

function abrirTrocaModoPause() {
    document.getElementById('pause-screen').style.display = 'none';
    const telaModos = document.getElementById('change-mode-pause-screen');
    const lista = document.getElementById('lista-modos-pause');
    lista.innerHTML = '';
    telaModos.style.display = 'flex';

    const modos = [
        {id: 'noise', nome: 'NOISE MODE'},
        {id: 'doise', nome: 'DOISE OVERLAY'},
        {id: 'faker', nome: 'FAKER ATTACK'},
        {id: 'tutorial', nome: 'TUTORIAL'}
    ];

    modos.forEach(m => {
        if (m.id !== modoAtualDaPartida) {
            let btn = document.createElement('button');
            btn.className = 'btn-modo';
            btn.id = 'btn-' + m.id; 
            btn.innerText = m.nome;
            const desbloqueado = usuarioLogado.progressoPTWE.modosDesbloqueados[m.id];
            btn.disabled = !desbloqueado;
            btn.onclick = () => {
                modoAtualDaPartida = m.id;
                fecharTrocaModoPause();
                jogoPausado = false;
                document.getElementById('pause-screen').style.display = 'none';
                musicaPause.pause();
                musicaPause.currentTime = 0;
                cancelAnimationFrame(gameLoopId);
                prepararArena(m.id);
            };
            lista.appendChild(btn);
        }
    });
}

function fecharTrocaModoPause() {
    document.getElementById('change-mode-pause-screen').style.display = 'none';
    if (jogoPausado) document.getElementById('pause-screen').style.display = 'flex';
}

function loopDoJogo() {
    if (!jogoRodando || jogoPausado) return;

    if (roundFinalizado) {
        atualizarDelayRank();
        renderizarObjetos();
        gameLoopId = requestAnimationFrame(loopDoJogo);
        return;
    }

    atualizarRound();
    atualizarPeppino();
    if (tutorialMode) {
        atualizarTutorial();
    } else {
        atualizarInimigoNoise();
        atualizarParryPepperAutomatico();
        atualizarGustavo();
        atualizarToppings();
        checarColetas();
        checarContatoNoisePeppino();
    }
    atualizarHUD();
    
    controles.z_press = false; controles.x_press = false; controles.c_press = false;

    renderizarObjetos();
    gameLoopId = requestAnimationFrame(loopDoJogo);
}

function atualizarPeppino() {
    if (peppino.tauntCooldown > 0) peppino.tauntCooldown--;
    if (peppino.dropTimer > 0) peppino.dropTimer--;

    let animacaoTravada = false;

    if (peppino.tauntTimer > 0) {
        peppino.tauntTimer--;
        peppino.vx = 0;
        peppino.vy = 0;
        animacaoTravada = true;
        if (peppino.tauntTimer === 0) peppino.estado = 'idle';
    } else if (peppino.grabTimer > 0) {
        peppino.grabTimer--;
        peppino.vx = 15 * peppino.direcao;
        peppino.vy = 0;
        
        let hitX = Math.abs(peppino.x - inimigo.x) < 80;
        let hitY = Math.abs(peppino.y - inimigo.y) < 80;
        if (hitX && hitY && inimigo.estado !== 'stunned') {
            acertarNoise('grab');
        }

        animacaoTravada = true;
        if (peppino.grabTimer === 0) {
            peppino.estado = 'idle';
            peppino.vx = 0;
        }
    } else if (peppino.hurtTimer > 0) {
        peppino.hurtTimer--;
        peppino.vy += GRAVIDADE;
        animacaoTravada = true;
        if (peppino.noChao && peppino.vy >= 0) {
            peppino.hurtTimer = 0;
            peppino.vx = 0;
            peppino.estado = 'idle';
        }
    }

    if (!animacaoTravada) {
        if (controles.esquerda) {
            peppino.vx = controles.shift ? -9 : -5;
            peppino.direcao = -1;
        } else if (controles.direita) {
            peppino.vx = controles.shift ? 9 : 5;
            peppino.direcao = 1;
        } else {
            peppino.vx = 0;
        }

        if (controles.z_press) {
            if (controles.baixo && peppino.noChao && peppino.y + peppino.altura < CHAO_Y) {
                peppino.dropTimer = 8;
                peppino.noChao = false;
            } else if (peppino.noChao) {
                peppino.vy = -14;
                peppino.noChao = false;
                tocarSom('soundtrack_jogo/Peppino/Peppino_jump.wav');
                peppino.estado = 'jump';
            }
        }

        if (controles.x_press) {
            peppino.estado = 'grab';
            peppino.grabTimer = 20;
            tocarSom('soundtrack_jogo/Peppino/Peppino_grab.wav');
            animacaoTravada = true;
        }

        if (controles.c_press && peppino.tauntCooldown === 0 && !animacaoTravada) {
            peppino.tauntCooldown = 60;
            let distX = Math.abs(peppino.x - inimigo.x);
            let distY = Math.abs(peppino.y - inimigo.y);
            
            if (distX < 80 && distY < 80) { 
                peppino.estado = 'parry';
                peppino.parryId = Math.floor(Math.random() * 3) + 1;
                peppino.tauntTimer = 30;
                tocarSom('soundtrack_jogo/Stuff/Parry.wav');
                acertarNoise('parry');
            } else { 
                peppino.estado = 'taunt';
                peppino.tauntId = Math.floor(Math.random() * 10) + 1;
                peppino.tauntTimer = 20;
                tocarSom('soundtrack_jogo/Stuff/Taunt.wav');
            }
            peppino.vx = 0;
            peppino.vy = 0;
            animacaoTravada = true;
        }

        if (!animacaoTravada) {
            peppino.vy += GRAVIDADE;
        }
    }

    peppino.x += peppino.vx;
    peppino.y += peppino.vy;
    atualizarDirecaoPorVelocidade(peppino);

    let bateuNaParede = false;
    const peppinoMaxX = getWorldWidth() - peppino.largura;
    if (peppino.x <= 0) { peppino.x = 0; bateuNaParede = true; }
    else if (peppino.x + peppino.largura >= peppinoMaxX) { peppino.x = peppinoMaxX; bateuNaParede = true; }

    if (!animacaoTravada) {
        if (bateuNaParede && !peppino.noChao && (controles.esquerda || controles.direita)) {
            peppino.estado = 'wall';
            peppino.wallTimer++;
            if (peppino.wallTimer > 300) {
                peppino.estado = 'wallfall';
                peppino.vy = 3;
            } else {
                peppino.vy = -3;
            }
        } else {
            peppino.wallTimer = 0;
            if (peppino.noChao) {
                if (peppino.vx !== 0) peppino.estado = controles.shift ? 'run' : 'walk';
                else peppino.estado = 'idle';
            } else {
                let hitboxInimigoX = Math.abs(peppino.x - inimigo.x) < 80;
                let hitboxInimigoTop = (peppino.y + peppino.altura) >= inimigo.y && (peppino.y + peppino.altura) <= inimigo.y + 30;
                
                if (peppino.vy > 0 && hitboxInimigoX && hitboxInimigoTop && inimigo.estado !== 'stunned') {
                    peppino.estado = 'stomp';
                    peppino.vy = -10;
                    acertarNoise('stomp');
                } else if (peppino.estado !== 'stomp') {
                    peppino.estado = 'jump';
                }
            }
        }
    }

    checarColisoesBasicas(peppino);
    if (peppino.invencivelTimer > 0) peppino.invencivelTimer--;
    if (peppino.pepperTimer > 0) {
        peppino.pepperTimer--;
        atualizarAuraPepper('player', peppino.pepperTimer);
        if (peppino.pepperTimer === 0) {
            atualizarMusicaPepper();
        }
    }
    gerenciarAudioMovimento();
}

function gerenciarAudioMovimento() {
    let somDesejado = 'none';
    if (peppino.noChao && peppino.estado === 'walk') somDesejado = 'walk';
    else if (peppino.noChao && peppino.estado === 'run') somDesejado = 'run';

    if (somMovimentoAtual !== somDesejado) {
        if (audiosAtivos['passos']) audiosAtivos['passos'].pause();
        
        if (somDesejado === 'walk') tocarSom('soundtrack_jogo/Peppino/Peppino_step.wav', true, 'passos');
        else if (somDesejado === 'run') tocarSom('soundtrack_jogo/Peppino/Peppino_run.wav', true, 'passos');
        
        somMovimentoAtual = somDesejado;
    }
}

function checarColisoesBasicas(obj) {
    if (obj.y <= 0) {
        obj.y = 0;
        if (obj.vy < 0) obj.vy = 0;
    }

    const chaoAnterior = obj.y - obj.vy + obj.altura;

    obj.noChao = false;
    if (obj.y + obj.altura >= CHAO_Y) {
        obj.y = CHAO_Y - obj.altura;
        obj.vy = 0;
        obj.noChao = true;
    }

    if (obj.vy > 0 && obj.dropTimer <= 0) {
        arenaPlataformas.forEach(plat => {
            const peAtual = obj.y + obj.altura;
            const centroX = obj.x + (obj.largura / 2);
            const topoColisao = topoColisaoPlataforma(plat);
            
            if (centroX >= plat.x && centroX <= plat.x + plat.largura) {
                if (chaoAnterior <= topoColisao && peAtual >= topoColisao) {
                    obj.y = topoColisao - obj.altura; 
                    obj.vy = 0;
                    obj.noChao = true;
                }
            }
        });
    }
}

function topoColisaoPlataforma(plat) {
    return plat.y + OFFSET_TOPO_VISUAL_PLATAFORMA;
}

function atualizarRound() {
    if (roundFinalizado) return;
    roundFramesRestantes--;
    if (roundFramesRestantes <= 0) encerrarRound('peppino');
}

function atualizarHUD() {
    document.getElementById('scoreDisplay').innerText = 'SCORE: ' + score;
    document.getElementById('timerDisplay').innerText = 'TIME: ' + Math.max(0, Math.ceil(roundFramesRestantes / FPS));
    const healthDisplay = document.getElementById('healthDisplay');
    healthDisplay.innerHTML = '';
    for (let i = 0; i < VIDA_MAXIMA_PEPPINO; i++) {
        const img = document.createElement('img');
        img.className = 'hat-icon';
        img.src = i < peppino.vida ? 'imagens_jogo/Stuff/Peppino_hat.gif' : 'imagens_jogo/Stuff/Peppino_hat_damaged.png';
        img.alt = i < peppino.vida ? 'Vida cheia' : 'Vida vazia';
        healthDisplay.appendChild(img);
    }
}

function retangulosColidem(a, b) {
    return a.x < b.x + b.largura && a.x + a.largura > b.x && a.y < b.y + b.altura && a.y + a.altura > b.y;
}

function setGustavo(estado, timer = 50) {
    gustavo.estado = estado;
    gustavo.timer = timer;
}

function atualizarGustavo() {
    if (gustavo.timer > 0) {
        gustavo.timer--;
        if (gustavo.timer === 0) gustavo.estado = 'idle';
    }
}

function atualizarAuraPepper(elementoId, timer) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;
    elemento.classList.toggle('pepper-ativo', timer > 0);
    elemento.classList.toggle('pepper-aviso', timer > 0 && timer <= PEPPER_AVISO_FIM);
}

function atualizarParryPepperAutomatico() {
    if (peppino.autoParryCooldown > 0) peppino.autoParryCooldown--;
    if (inimigo.autoParryCooldown > 0) inimigo.autoParryCooldown--;

    if (peppino.pepperTimer <= 0 || inimigo.pepperTimer <= 0 || roundFinalizado) return;
    if (peppino.autoParryCooldown > 0 || inimigo.autoParryCooldown > 0) return;

    peppino.estado = 'parry';
    peppino.parryId = Math.floor(Math.random() * 3) + 1;
    peppino.tauntTimer = PEPPER_AUTO_PARRY_DURACAO;
    peppino.vx = 0;
    peppino.vy = 0;

    if (inimigo.estado.startsWith('skate')) pararSonsSkate();
    inimigo.estado = 'parry';
    inimigo.parryTimer = PEPPER_AUTO_PARRY_DURACAO;
    inimigo.vx = 0;
    inimigo.vy = 0;

    peppino.autoParryCooldown = PEPPER_AUTO_PARRY_INTERVALO;
    inimigo.autoParryCooldown = PEPPER_AUTO_PARRY_INTERVALO;
    tocarSom('soundtrack_jogo/Stuff/Parry.wav');
}

function acertarNoise(tipo) {
    if (inimigo.estado === 'stunned' || inimigo.estado === 'fireass') return;
    if (inimigo.estado.startsWith('skate')) pararSonsSkate();
    if (peppino.pepperTimer > 0) {
        inimigo.estado = 'fireass';
        inimigo.stunTimer = STUN_NOISE_POS_PEPPER;
    } else {
        inimigo.estado = 'stunned';
        inimigo.stunTimer = tipo === 'stomp' ? STUN_NOISE_PADRAO : STUN_NOISE_PADRAO;
    }
    inimigo.vx = 0;
    inimigo.vy = 0;
    tocarSom('soundtrack_jogo/Noise/Noise_hurt.wav');
    setGustavo('noise-hit');
    if (Math.random() < 0.5) {
        spawnTopping('vida', gustavo.x + 30, CHAO_Y - 70);
        setGustavo('drop', 55);
        tocarSom('soundtrack_jogo/Gustavo/Gustavo_drop.mp3');
    }
}

function pararSonsSkate() {
    pararSom('noise-skate-mach1');
    pararSom('noise-skate-mach2');
    pararSom('noise-skate-wallhit');
}

function aplicarDanoPeppino(qtd = 1) {
    if (peppino.invencivelTimer > 0 || peppino.grabTimer > 0 || peppino.pepperTimer > 0 || roundFinalizado) return false;
    peppino.vida = Math.max(0, peppino.vida - qtd);
    peppino.invencivelTimer = 80;
    peppino.hurtTimer = 35;
    peppino.estado = 'hurt';
    peppino.hurtType = inimigo.pepperTimer > 0 ? 'fireass' : 'hurt';
    peppino.vx = inimigo.x < peppino.x ? 7 : -7;
    peppino.direcao = peppino.vx < 0 ? -1 : 1;
    peppino.vy = -7;
    if (inimigo.pepperTimer > 0) {
        tocarSom('soundtrack_jogo/Peppino/Peppino_scream.wav');
    } else {
        tocarSom('soundtrack_jogo/Peppino/Peppino_hurt.wav');
    }
    setGustavo('peppino-hit');
    if (peppino.vida <= 0) encerrarRound('noise');
    return true;
}

function ativarPepper(usuario) {
    if (usuario === peppino) {
        pepperMusicaDono = 'peppino';
        peppino.pepperTimer = PEPPER_DURACAO;
        atualizarAuraPepper('player', peppino.pepperTimer);
        setGustavo('pepper-peppino', 90);
    } else {
        if (inimigo.estado.startsWith('skate')) pararSonsSkate();
        pepperMusicaDono = 'noise';
        inimigo.pepperTimer = PEPPER_DURACAO;
        inimigo.estado = 'pepper';
        atualizarAuraPepper('noise', inimigo.pepperTimer);
        setGustavo('pepper-noise', 90);
    }
    atualizarMusicaPepper();
}

function atualizarInimigoNoise() {
    if (inimigo.contatoCooldown > 0) inimigo.contatoCooldown--;
    if (inimigo.skateCooldown > 0) inimigo.skateCooldown--;
    if (inimigo.pepperTimer > 0) {
        inimigo.pepperTimer--;
        atualizarAuraPepper('noise', inimigo.pepperTimer);
        if (inimigo.pepperTimer === 0) {
            inimigo.estado = 'stunned';
            inimigo.stunTimer = STUN_NOISE_POS_PEPPER;
            inimigo.vx = 0;
            inimigo.vy = 0;
            atualizarMusicaPepper();
            return;
        }
    }

    if (inimigo.parryTimer > 0) {
        inimigo.parryTimer--;
        inimigo.vx = 0;
        inimigo.vy = 0;
        if (inimigo.parryTimer <= 0) inimigo.estado = inimigo.pepperTimer > 0 ? 'pepper' : 'walk';
        return;
    }

    if (inimigo.estado === 'joke') {
        inimigo.stunTimer--;
        inimigo.vx = 0;
        inimigo.vy = 0;
        if (inimigo.stunTimer <= 0) inimigo.estado = inimigo.pepperTimer > 0 ? 'pepper' : 'walk';
        return;
    }

    if (inimigo.estado === 'fireass') {
        inimigo.stunTimer--;
        inimigo.vx = 0;
        inimigo.vy = 0;
        if (inimigo.stunTimer <= 0) inimigo.estado = 'walk';
        return;
    }

    if (inimigo.estado === 'stunned') {
        inimigo.stunTimer--;
        inimigo.vx = 0;
        inimigo.vy = 0;
        if (inimigo.stunTimer <= 0) inimigo.estado = 'walk';
        return;
    }

    if (atualizarSkateboard()) return;

    const pepper = toppings.find(t => t.tipo === 'pepper');
    if (inimigo.pepperTimer > 0) {
        perseguirAlvo(peppino.x, peppino.y, 6.5);
        inimigo.estado = 'pepper';
    } else if (pepper) {
        perseguirAlvo(pepper.x, pepper.y, 6);
        inimigo.estado = 'happy';
    } else if (peppino.pepperTimer > 0) {
        fugirDoPeppino();
        inimigo.estado = 'scared';
    } else {
        andarLinear();
        if (inimigo.skateCooldown <= 0 && inimigo.noChao && Math.random() < 0.2 / FPS) iniciarSkateboard();
    }
    tentarPuloAleatorio();

    inimigo.vy += GRAVIDADE;
    inimigo.x += inimigo.vx;
    inimigo.y += inimigo.vy;
    limitarInimigoNaArena();
    checarColisoesBasicas(inimigo);
}

function andarLinear() {
    inimigo.estado = 'walk';
    if (inimigo.vx === 0) inimigo.vx = 4 * inimigo.direcao;
    inimigo.vx = 4 * inimigo.direcao;
    atualizarDirecaoPorVelocidade(inimigo);
}

function perseguirAlvo(x, y, velocidade) {
    inimigo.direcao = x < inimigo.x ? -1 : 1;
    inimigo.vx = velocidade * inimigo.direcao;
    if ((y + 30 < inimigo.y || Math.abs(x - inimigo.x) < 80) && inimigo.noChao) pularNoise(false);
}

function fugirDoPeppino() {
    inimigo.direcao = peppino.x < inimigo.x ? 1 : -1;
    inimigo.vx = 5.5 * inimigo.direcao;
    if ((inimigo.x <= 5 || inimigo.x + inimigo.largura >= LARGURA_TELA - 5) && inimigo.noChao) pularNoise(false);
}

function tentarPuloAleatorio() {
    const chance = inimigo.noChao ? 0.9 / FPS : 0.75 / FPS;
    if (Math.random() < chance) pularNoise(!inimigo.noChao);
}

function pularNoise(duplo) {
    if (inimigo.noChao) {
        inimigo.vy = -13;
        inimigo.noChao = false;
        inimigo.doubleJumpDisponivel = true;
        if (inimigo.estado !== 'happy' && inimigo.estado !== 'scared') inimigo.estado = 'jump';
        tocarSom('soundtrack_jogo/Noise/Noise_jump.wav');
    } else if (duplo && inimigo.doubleJumpDisponivel) {
        inimigo.vy = -11;
        inimigo.doubleJumpDisponivel = false;
        if (inimigo.estado !== 'happy' && inimigo.estado !== 'scared') inimigo.estado = 'doublejump';
        tocarSom('soundtrack_jogo/Noise/Noise_double_jump.wav');
    }
}

function iniciarSkateboard() {
    if (!inimigo.noChao || inimigo.skateCooldown > 0 || inimigo.estado.startsWith('skate')) return;
    inimigo.estado = 'skate-warn';
    inimigo.skateTimer = Math.round(1.5 * FPS);
    inimigo.skateDirecao = Math.random() < 0.5 ? 1 : -1;
    inimigo.direcao = inimigo.skateDirecao;
    inimigo.somSkateTocou = false;
    tocarSom('soundtrack_jogo/Noise/woag.wav');
}

function atualizarSkateboard() {
    if (!inimigo.estado.startsWith('skate') && inimigo.estado !== 'skate-warn') return false;
    if (inimigo.estado === 'skate-warn') {
        inimigo.vx = 0;
        inimigo.vy = 0;
        inimigo.skateTimer--;
        if (inimigo.skateTimer <= 0) {
            inimigo.estado = 'skate-corner';
            inimigo.skateTimer = 0;
            inimigo.direcao = inimigo.skateDirecao;
            inimigo.somSkateTocou = false;
        }
        return true;
    }
    if (inimigo.estado === 'skate-corner') {
        if (!inimigo.somSkateTocou) {
            tocarSom('soundtrack_jogo/Noise/Noise_mach1.wav', false, 'noise-skate-mach1');
            inimigo.somSkateTocou = true;
        }
        const alvoX = inimigo.skateDirecao === 1 ? 0 : LARGURA_TELA - inimigo.largura;
        inimigo.vx = alvoX > inimigo.x ? 8 : -8;
        atualizarDirecaoPorVelocidade(inimigo);
        inimigo.x += inimigo.vx;
        if (Math.abs(inimigo.x - alvoX) < 10) {
            inimigo.x = alvoX;
            inimigo.estado = 'skate-charge';
            inimigo.skateTimer = 48;
            inimigo.somSkateTocou = false;
            inimigo.direcao = inimigo.x < LARGURA_TELA / 2 ? 1 : -1;
            pararSom('noise-skate-mach1');
        }
    } else if (inimigo.estado === 'skate-charge') {
        inimigo.vx = 0;
        inimigo.skateTimer--;
        if (inimigo.skateTimer <= 0) {
            inimigo.estado = 'skate-attack';
            inimigo.somSkateTocou = false;
            inimigo.skateDirecao = inimigo.x < LARGURA_TELA / 2 ? 1 : -1;
            inimigo.direcao = inimigo.skateDirecao;
        }
    } else if (inimigo.estado === 'skate-attack') {
        if (!inimigo.somSkateTocou) {
            tocarSom('soundtrack_jogo/Noise/Noise_mach2.wav', false, 'noise-skate-mach2');
            inimigo.somSkateTocou = true;
        }
        inimigo.vx = 24 * inimigo.skateDirecao;
        atualizarDirecaoPorVelocidade(inimigo);
        inimigo.x += inimigo.vx;
        if (inimigo.x <= 0 || inimigo.x + inimigo.largura >= LARGURA_TELA) {
            inimigo.x = Math.max(0, Math.min(LARGURA_TELA - inimigo.largura, inimigo.x));
            inimigo.estado = 'skate-wallhit';
            inimigo.skateTimer = 48;
            pararSom('noise-skate-mach2');
            tocarSom('soundtrack_jogo/Noise/Noise_wallhit.wav', false, 'noise-skate-wallhit');
        }
    } else if (inimigo.estado === 'skate-wallhit') {
        inimigo.vx = 0;
        inimigo.skateTimer--;
        if (inimigo.skateTimer <= 0) {
            inimigo.estado = 'walk';
            inimigo.skateCooldown = SKATE_COOLDOWN;
            pararSom('noise-skate-wallhit');
        }
    }
    checarColisoesBasicas(inimigo);
    return true;
}

function limitarInimigoNaArena() {
    const maxX = getWorldWidth() - inimigo.largura;
    if (inimigo.x <= 0) {
        inimigo.x = 0;
        inimigo.direcao = 1;
        inimigo.vx = Math.abs(inimigo.vx);
    } else if (inimigo.x + inimigo.largura >= maxX) {
        inimigo.x = maxX;
        inimigo.direcao = -1;
        inimigo.vx = -Math.abs(inimigo.vx);
    }
}

function checarContatoNoisePeppino() {
    if (inimigo.estado === 'stunned' || inimigo.estado === 'fireass' || inimigo.contatoCooldown > 0 || !retangulosColidem(peppino, inimigo)) return;
    if (peppino.pepperTimer > 0) {
        acertarNoise('pepper-contact');
        inimigo.contatoCooldown = 70;
        return;
    }
    const acertouPeppino = aplicarDanoPeppino(inimigo.pepperTimer > 0 ? 2 : 1);
    if (acertouPeppino && inimigo.pepperTimer > 0) {
        inimigo.estado = 'joke';
        inimigo.stunTimer = JOKE_NOISE_POS_HIT;
        inimigo.vx = 0;
        inimigo.vy = 0;
    }
    inimigo.contatoCooldown = 70;
}

function atualizarDirecaoPorVelocidade(obj) {
    if (obj.vx < -0.1) obj.direcao = -1;
    else if (obj.vx > 0.1) obj.direcao = 1;
}

function limparToppings() {
    toppings = [];
    const container = document.getElementById('topping-container');
    if (container) container.innerHTML = '';
}

function atualizarToppings() {
    if (!geromeSpawnado) {
        geromeSpawnTimer--;
        if (geromeSpawnTimer <= 0) spawnTopping('gerome');
    }

    toppingSpawnTimer--;
    if (toppingSpawnTimer <= 0) {
        spawnTopping(sortearTipoTopping());
        if (Math.random() < CHANCE_SPAWN_PEPPER && !toppings.some(t => t.tipo === 'pepper')) spawnTopping('pepper');
        if (Math.random() < 0.55) spawnTopping(sortearTipoTopping());
        toppingSpawnTimer = 35 + Math.floor(Math.random() * 40);
    }
}

function sortearTipoTopping() {
    const normais = ['cheese', 'mushroom', 'pineapple', 'tomato', 'weiner'];
    return normais[Math.floor(Math.random() * normais.length)];
}

function escolherPosicaoTopping() {
    const pontos = [
        { x: 180 + Math.random() * 500, y: CHAO_Y - 45 },
        { x: arenaPlataformas[0].x + 30 + Math.random() * (arenaPlataformas[0].largura - 80), y: topoColisaoPlataforma(arenaPlataformas[0]) - 45 },
        { x: arenaPlataformas[1].x + 30 + Math.random() * (arenaPlataformas[1].largura - 80), y: topoColisaoPlataforma(arenaPlataformas[1]) - 45 }
    ];
    let ponto = pontos[Math.floor(Math.random() * pontos.length)];
    if (ponto.y === CHAO_Y - 45) {
        while (ponto.x < 140 || ponto.x > 660) ponto.x = 180 + Math.random() * 500;
    }
    return ponto;
}

function spawnTopping(tipo, x = null, y = null) {
    if (tipo === 'gerome' && geromeSpawnado) return;
    if (tipo === 'gerome') geromeSpawnado = true;
    const pos = x === null ? escolherPosicaoTopping() : { x, y };
    const topping = { id: toppingIdSeq++, tipo, x: pos.x, y: pos.y, largura: 40, altura: 40 };
    toppings.push(topping);
    const el = document.createElement('div');
    el.className = 'topping topping-' + tipo;
    el.id = 'topping-' + topping.id;
    el.style.left = topping.x + 'px';
    el.style.top = topping.y + 'px';
    el.style.backgroundImage = `url('${spriteTopping(tipo)}')`;
    document.getElementById('topping-container').appendChild(el);
    if (tipo === 'gerome') tocarSom('soundtrack_jogo/Stuff/Gerome_spawn.wav');
    else if (tipo === 'pepper') tocarSom('soundtrack_jogo/Stuff/Pepper_spawn.wav');
}

function spriteTopping(tipo) {
    const sprites = {
        cheese: 'imagens_jogo/Toppings/Cheese.gif',
        mushroom: 'imagens_jogo/Toppings/Mushroom.gif',
        pineapple: 'imagens_jogo/Toppings/Pineapple.gif',
        tomato: 'imagens_jogo/Toppings/Tomato.gif',
        weiner: 'imagens_jogo/Toppings/Weiner.gif',
        gerome: 'imagens_jogo/Toppings/Gerome.gif',
        pepper: 'imagens_jogo/Toppings/Pepper_Pizza.gif',
        vida: 'imagens_jogo/Stuff/Peppino_hat.gif'
    };
    return sprites[tipo] || sprites.cheese;
}

function checarColetas() {
    toppings.slice().forEach(topping => {
        if (retangulosColidem(peppino, topping)) coletarTopping(topping, peppino);
        else if (retangulosColidem(inimigo, topping)) coletarTopping(topping, inimigo);
    });
}

function coletarTopping(topping, coletor) {
    toppings = toppings.filter(t => t.id !== topping.id);
    const el = document.getElementById('topping-' + topping.id);
    if (el) el.remove();

    if (topping.tipo === 'pepper') {
        tocarSom('soundtrack_jogo/Stuff/Pepper_collect.wav');
        ativarPepper(coletor);
    } else if (topping.tipo === 'vida') {
        tocarSom('soundtrack_jogo/Stuff/Hat_collect.wav');
        if (coletor === peppino) {
            if (peppino.vida >= VIDA_MAXIMA_PEPPINO) score += 50;
            else peppino.vida = Math.min(VIDA_MAXIMA_PEPPINO, peppino.vida + 1);
        }
    } else if (topping.tipo === 'gerome') {
        tocarSom('soundtrack_jogo/Stuff/Gerome_collect.wav');
        if (coletor === peppino) score += 500;
    } else {
        tocarSom('soundtrack_jogo/Stuff/Topping_collect.wav');
        if (coletor === peppino) score += 100;
    }
}

function encerrarRound(vencedor) {
    if (roundFinalizado) return;
    roundFinalizado = true;
    rankPronto = false;
    rankDelayTimer = DELAY_TELA_RANK;
    vencedorRound = vencedor;
    musicaBatalha.pause();
    musicaPause.pause();
    musicaPause.currentTime = 0;
    if (audiosAtivos['passos']) audiosAtivos['passos'].pause();
    pararSonsSkate();
    document.getElementById('result-prompt').style.display = 'none';
    limparToppings();

    if (vencedor === 'peppino') {
        peppino.estado = 'win';
        inimigo.estado = 'loser';
        tocarSom(MUSICA_PEPPER_PEPPINO, true, 'victory-music');
    } else {
        peppino.estado = 'lose';
        inimigo.estado = 'win';
        tocarSom(MUSICA_PEPPER_NOISE, true, 'victory-music');
    }

    setGustavo(vencedor === 'peppino' ? 'peppino-win' : 'noise-win', 9999);
    renderizarObjetos();
}

function atualizarDelayRank() {
    if (rankPronto) return;
    rankDelayTimer--;
    if (rankDelayTimer <= 0) mostrarTelaRank(vencedorRound);
}

function mostrarTelaRank(vencedor) {
    rankPronto = true;
    jogoRodando = false;
    tocarSom('soundtrack_jogo/Stuff/round_over.wav');
    const resultScreen = document.getElementById('result-screen');
    const rank = vencedor === 'peppino' ? calcularRank() : 'DEAD';
    registrarRankDaPartida(rank);
    document.getElementById('result-rank').innerHTML = `<img src="imagens_jogo/Ranks/${rank}-Rank.png" alt="${rank}-Rank">`;
    document.getElementById('result-prompt').style.display = 'block';
    resultScreen.style.display = 'flex';
}

function calcularRank() {
    if (score >= 5500 && peppino.vida === VIDA_MAXIMA_PEPPINO) return 'P';
    if (score >= 4500) return 'S';
    if (score >= 3500) return 'A';
    if (score >= 2500) return 'B';
    if (score >= 1500) return 'C';
    return 'D';
}

function renderizarObjetos() {
    const pDiv = document.getElementById('player');
    const pSprite = document.getElementById('peppino-sprite');
    const tauntEffect = document.getElementById('taunt-effect');
    const nDiv = document.getElementById('noise');
    const gDiv = document.getElementById('gustavo');


    let img = 'imagens_jogo/P_sprites/Peppino_idle.gif';
    if (peppino.estado === 'parry' && peppino.tauntTimer > 0) img = `imagens_jogo/P_sprites/Parry${peppino.parryId}.gif`;
    else if (peppino.pepperTimer > 0) img = 'imagens_jogo/P_sprites/Pepper_Pizza_Peppino.gif';
    else if (peppino.estado === 'win') img = 'imagens_jogo/P_sprites/Peppino_win.gif';
    else if (peppino.estado === 'lose') img = 'imagens_jogo/P_sprites/Peppino_lose.gif';
    else if (peppino.estado === 'hurt') img = peppino.hurtType === 'fireass' ? 'imagens_jogo/P_sprites/Peppino_fireass.gif' : 'imagens_jogo/P_sprites/Peppino_hurt.gif';
    else if (peppino.estado === 'walk') img = 'imagens_jogo/P_sprites/Peppino_walk.gif';
    else if (peppino.estado === 'run') img = 'imagens_jogo/P_sprites/Peppino_run.gif';
    else if (peppino.estado === 'jump') img = 'imagens_jogo/P_sprites/Peppino_jump.gif';
    else if (peppino.estado === 'wall') img = 'imagens_jogo/P_sprites/Peppino_wall.gif';
    else if (peppino.estado === 'wallfall') img = 'imagens_jogo/P_sprites/Peppino_wallfall.gif';
    else if (peppino.estado === 'grab') img = 'imagens_jogo/P_sprites/Peppino_grab.gif';
    else if (peppino.estado === 'stomp') img = 'imagens_jogo/P_sprites/Peppino_stomp.gif';
    else if (peppino.estado === 'taunt') img = `imagens_jogo/P_sprites/taunt${peppino.tauntId}.png`;

    pDiv.style.backgroundImage = 'none';
    pSprite.style.backgroundImage = `url('${img}')`;
    pDiv.style.transform = `scaleX(${peppino.direcao})`;
    pDiv.style.left = getRenderX(peppino.x) + 'px';
    pDiv.style.top = peppino.y + 'px';
    pDiv.classList.toggle('blinking', peppino.invencivelTimer > 0 && peppino.pepperTimer <= 0);
    pDiv.classList.toggle('pepper-aviso', peppino.pepperTimer > 0 && peppino.pepperTimer <= PEPPER_AVISO_FIM);
    tauntEffect.style.display = (peppino.estado === 'taunt' || peppino.estado === 'parry') && peppino.tauntTimer > 0 ? 'block' : 'none';

    let nImg = 'imagens_jogo/N_sprites/Noise_idle_D.gif';
    if (inimigo.estado === 'win') nImg = 'imagens_jogo/N_sprites/Noise_P_win.gif';
    else if (inimigo.estado === 'loser') nImg = 'imagens_jogo/N_sprites/Noise_lose.gif';
    else if (inimigo.estado === 'parry' && inimigo.parryTimer > 0) nImg = 'imagens_jogo/N_sprites/Noise_parry.gif';
    else if (inimigo.estado === 'fireass') nImg = 'imagens_jogo/N_sprites/Noise_fireass.gif';
    else if (inimigo.pepperTimer > 0 && inimigo.estado !== 'joke') nImg = 'imagens_jogo/N_sprites/Pepper_Pizza_Noise.gif';
    else if (inimigo.estado === 'joke') nImg = 'imagens_jogo/N_sprites/Noise_joke.png';
    else if (inimigo.estado === 'happy') nImg = 'imagens_jogo/N_sprites/Noise_happy.gif';
    else if (inimigo.estado === 'scared') nImg = 'imagens_jogo/N_sprites/Noise_scaried.gif';
    else if (inimigo.estado === 'skate-warn') nImg = 'imagens_jogo/N_sprites/Noise_warn.gif';
    else if (!inimigo.noChao && inimigo.estado === 'doublejump') nImg = 'imagens_jogo/N_sprites/Noise_doublejump.gif';
    else if (!inimigo.noChao) nImg = 'imagens_jogo/N_sprites/Noise_jump.png';
    else if (inimigo.estado === 'walk') nImg = 'imagens_jogo/N_sprites/Noise_walk.gif';
    else if (inimigo.estado === 'jump') nImg = 'imagens_jogo/N_sprites/Noise_jump.png';
    else if (inimigo.estado === 'doublejump') nImg = 'imagens_jogo/N_sprites/Noise_doublejump.gif';
    else if (inimigo.estado === 'stunned') nImg = 'imagens_jogo/N_sprites/Noise_hurt.gif';
    else if (inimigo.estado === 'pepper') nImg = 'imagens_jogo/N_sprites/Pepper_Pizza_Noise.gif';
    else if (inimigo.estado === 'skate-corner') nImg = 'imagens_jogo/N_sprites/Noise_mach1.gif';
    else if (inimigo.estado === 'skate-charge') nImg = 'imagens_jogo/N_sprites/Noise_charge.gif';
    else if (inimigo.estado === 'skate-attack') nImg = 'imagens_jogo/N_sprites/Noise_mach2.gif';
    else if (inimigo.estado === 'skate-wallhit') nImg = 'imagens_jogo/N_sprites/Noise_wallhit.gif';
    nDiv.style.backgroundImage = `url('${nImg}')`;
    nDiv.style.left = getRenderX(inimigo.x) + 'px';
    nDiv.style.top = inimigo.y + 'px';
    nDiv.style.transform = `scaleX(${inimigo.direcao})`;
    nDiv.style.display = tutorialMode ? 'none' : 'block';
    nDiv.classList.toggle('blinking', inimigo.estado === 'stunned');
    nDiv.classList.toggle('pepper-aviso', inimigo.pepperTimer > 0 && inimigo.pepperTimer <= PEPPER_AVISO_FIM);

    let gImg = 'imagens_jogo/G_sprites/Gustavo_idle.gif';
    if (gustavo.estado === 'peppino-hit') gImg = 'imagens_jogo/G_sprites/Gustavo_P_hit.gif';
    else if (gustavo.estado === 'noise-hit') gImg = 'imagens_jogo/G_sprites/Gustavo_N_hit.gif';
    else if (gustavo.estado === 'drop') gImg = 'imagens_jogo/G_sprites/Gustavo_drop.gif';
    else if (gustavo.estado === 'noise-win') gImg = 'imagens_jogo/G_sprites/Gustavo_N_win.gif';
    else if (gustavo.estado === 'peppino-win') gImg = 'imagens_jogo/G_sprites/Gustavo_P_win.gif';
    else if (gustavo.estado === 'pepper-noise') gImg = 'imagens_jogo/G_sprites/Gustavo_PN.gif';
    else if (gustavo.estado === 'pepper-peppino') gImg = 'imagens_jogo/G_sprites/Gustavo_PP.gif';
    gDiv.style.backgroundImage = `url('${gImg}')`;
    gDiv.style.left = getRenderX(gustavo.x) + 'px';
    gDiv.style.top = gustavo.y + 'px';
    gDiv.style.display = tutorialMode ? 'none' : 'block';

    if (tutorialMode) {
        document.querySelectorAll('.pizza-granny').forEach((div, index) => {
            const granny = tutorialPizzaGrannies[index];
            div.style.left = getRenderX(granny.x) + 'px';
            div.style.top = granny.y + 'px';
            div.style.backgroundImage = granny.falaAtiva ? "url('imagens_jogo/Stuff/Pizza_Granny_Talk.gif')" : "url('imagens_jogo/Stuff/Pizza_Granny_Idle.gif')";
        });
    }
}

function garantirEstruturaRanks() {
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    const p = usuarioLogado.progressoPTWE;
    const modos = ['noise', 'doise', 'faker'];
    const ranks = ['P', 'S', 'A', 'B', 'C', 'D'];

    if (!p.ranks) p.ranks = {};
    modos.forEach(modo => {
        if (!p.ranks[modo]) p.ranks[modo] = {};
        ranks.forEach(rank => {
            if (typeof p.ranks[modo][rank] !== 'number') p.ranks[modo][rank] = 0;
        });
    });

    if (!p.partidasJogadas) p.partidasJogadas = { noise: 0, doise: 0, faker: 0 };
    modos.forEach(modo => {
        if (typeof p.partidasJogadas[modo] !== 'number') p.partidasJogadas[modo] = 0;
    });
}

function registrarRankDaPartida(rank) {
    if (roundRankRegistrado || rank === 'DEAD' || !usuarioLogado || !usuarioLogado.progressoPTWE) return;
    garantirEstruturaRanks();
    usuarioLogado.progressoPTWE.ranks[modoAtualDaPartida][rank]++;
    roundRankRegistrado = true;
    atualizarBancoDeDados(usuarioLogado);
}

function somarRanksGerais() {
    garantirEstruturaRanks();
    const totais = { P: 0, S: 0, A: 0, B: 0, C: 0, D: 0 };
    Object.values(usuarioLogado.progressoPTWE.ranks).forEach(ranksDoModo => {
        Object.keys(totais).forEach(rank => {
            totais[rank] += ranksDoModo[rank] || 0;
        });
    });
    return totais;
}

function abrirEstatisticas() {
    const statsScreen = document.getElementById('stats-screen'), statsContent = document.getElementById('stats-content');
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    garantirEstruturaRanks();
    const p = usuarioLogado.progressoPTWE;
    const ranksTotais = somarRanksGerais();
    const totalPartidas = p.partidasJogadas.noise + p.partidasJogadas.doise + p.partidasJogadas.faker;
    const totalRanks = Object.values(ranksTotais).reduce((total, qtd) => total + qtd, 0);
    const rankCards = ['P', 'S', 'A', 'B', 'C', 'D'].map(rank => `
        <div class="rank-stat">
            <img src="imagens_jogo/Ranks/${rank}-Rank.png" alt="${rank}-Rank">
            <span>${ranksTotais[rank]}</span>
        </div>
    `).join('');

    statsContent.innerHTML = `
        <div class="stats-summary">
            <div class="stats-panel">
                <div class="stats-label">PARTIDAS</div>
                <span class="stats-number">${totalPartidas}</span>
            </div>
            <div class="stats-panel">
                <div class="stats-label">RANKS</div>
                <span class="stats-number">${totalRanks}</span>
            </div>
            <div class="stats-panel">
                <div class="stats-label">MELHOR</div>
                <span class="stats-number">${ranksTotais.P > 0 ? 'P' : ranksTotais.S > 0 ? 'S' : ranksTotais.A > 0 ? 'A' : ranksTotais.B > 0 ? 'B' : ranksTotais.C > 0 ? 'C' : ranksTotais.D > 0 ? 'D' : '-'}</span>
            </div>
        </div>

        <div class="stats-section-title">MODOS</div>
        <div class="stats-mode-list">
            <div class="stats-mode">
                <h3>NOISE MODE</h3>
                <p>Vezes jogadas: ${p.partidasJogadas.noise}</p>
            </div>
            <div class="stats-mode">
                <h3>DOISE OVERLAY</h3>
                <p>Vezes jogadas: ${p.partidasJogadas.doise}</p>
            </div>
            <div class="stats-mode">
                <h3>FAKER ATTACK</h3>
                <p>Vezes jogadas: ${p.partidasJogadas.faker}</p>
            </div>
        </div>

        <div class="stats-section-title">RANKS CONQUISTADOS</div>
        <div class="rank-grid">${rankCards}</div>
    `;
    atualizarBancoDeDados(usuarioLogado);
    statsScreen.style.display = 'flex';
}

function fecharEstatisticas() { document.getElementById('stats-screen').style.display = 'none'; }

function apagarDados() {
    if (confirm("CUIDADO! Isso vai apagar TODAS as suas estatÃ­sticas. Deseja continuar?")) {
        usuarioLogado.progressoPTWE = {
            modosDesbloqueados: { noise: true, doise: false, faker: false },
            ranks: { noise: { P:0,S:0,A:0,B:0,C:0,D:0 }, doise: { P:0,S:0,A:0,B:0,C:0,D:0 }, faker: { P:0,S:0,A:0,B:0,C:0,D:0 } },
            partidasJogadas: { noise: 0, doise: 0, faker: 0 }
        };
        atualizarBancoDeDados(usuarioLogado);
        abrirEstatisticas();
        atualizarBotoesDoMenu();
    }
}

function abrirEdicaoPerfil() {
    document.getElementById('stats-screen').style.display = 'none';
    document.getElementById('edit-profile-screen').style.display = 'flex';
    document.getElementById('input-novo-nome').value = usuarioLogado.nome;
    
    avatarSelecionadoTemporario = usuarioLogado.foto || PERFIL_PADRAO.foto;
    const grid = document.getElementById('grid-avatares');
    grid.innerHTML = '';

    const usuariosDB = JSON.parse(localStorage.getItem('usuariosDB')) || [];
    const fotosExistentes = usuariosDB
        .map(u => u.foto)
        .filter(foto => typeof foto === 'string' && foto.trim() !== '');

    const avatarSources = Array.from(new Set([
        ...AVATARES_PADRAO,
        usuarioLogado.foto || PERFIL_PADRAO.foto,
        ...fotosExistentes
    ].map(normalizarAvatarPath)));

    avatarSources.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.alt = 'Avatar';
        img.className = 'avatar-option';
        if (src === avatarSelecionadoTemporario) img.classList.add('selected');
        img.onclick = function() {
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
            img.classList.add('selected');
            avatarSelecionadoTemporario = src;
        };
        grid.appendChild(img);
    });
}

function fecharEdicaoPerfil() { document.getElementById('edit-profile-screen').style.display = 'none'; document.getElementById('stats-screen').style.display = 'flex'; }

function salvarEdicaoPerfil() {
    const novoNome = document.getElementById('input-novo-nome').value.trim();
    if (novoNome === '') return;
    usuarioLogado.nome = novoNome;
    usuarioLogado.foto = avatarSelecionadoTemporario || PERFIL_PADRAO.foto;
    document.getElementById('nome-perfil-ptwe').innerText = novoNome;
    document.getElementById('foto-perfil-ptwe').src = usuarioLogado.foto;
    atualizarBancoDeDados(usuarioLogado);
    fecharEdicaoPerfil();
}

function arrancarJogo() {
    if (usuarioLogado) {
        document.getElementById('nome-perfil-ptwe').innerText = usuarioLogado.nome;
        document.getElementById('foto-perfil-ptwe').src = usuarioLogado.foto || PERFIL_PADRAO.foto;
    }
    try {
        musicaPrincipal.play().catch(() => { 
            document.body.addEventListener('click', function tocarSomMudo() { 
                musicaPrincipal.play(); 
                document.body.removeEventListener('click', tocarSomMudo); 
            }, { once: true }); 
        });
    } catch (err) {}
    
    iniciarPreloader();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancarJogo);
else arrancarJogo();
