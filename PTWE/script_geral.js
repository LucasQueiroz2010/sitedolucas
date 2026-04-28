let usuarioLogado = JSON.parse(localStorage.getItem('usuarioAtual'));
if (!usuarioLogado) {
    window.location.href = "../login.html";
} else {
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
    'imagens_jogo/P_sprites/Peppino_Peppino_stun.gif', 'imagens_jogo/P_sprites/Peppino_walk.gif',
    'imagens_jogo/P_sprites/Peppino_wall.gif', 'imagens_jogo/P_sprites/Peppino_wallfall.gif',
    'imagens_jogo/P_sprites/Peppino_win.gif',
    'imagens_jogo/P_sprites/taunt1.png', 'imagens_jogo/P_sprites/taunt2.png', 'imagens_jogo/P_sprites/taunt3.png',
    'imagens_jogo/P_sprites/taunt4.png', 'imagens_jogo/P_sprites/taunt5.png', 'imagens_jogo/P_sprites/taunt6.png',
    'imagens_jogo/P_sprites/taunt7.png', 'imagens_jogo/P_sprites/taunt8.png', 'imagens_jogo/P_sprites/taunt9.png',
    'imagens_jogo/P_sprites/taunt10.png',
    'imagens_jogo/N_sprites/Noise_charge.gif', 'imagens_jogo/N_sprites/Noise_D_hit.gif',
    'imagens_jogo/N_sprites/Noise_D_win.gif', 'imagens_jogo/N_sprites/Noise_doublejump.gif',
    'imagens_jogo/N_sprites/Noise_drop.gif', 'imagens_jogo/N_sprites/Noise_fireass.gif',
    'imagens_jogo/N_sprites/Noise_happy.gif', 'imagens_jogo/N_sprites/Noise_hurt.gif',
    'imagens_jogo/N_sprites/Noise_idle_D.gif', 'imagens_jogo/N_sprites/Noise_joke.png',
    'imagens_jogo/N_sprites/Noise_jump.png', 'imagens_jogo/N_sprites/Noise_lose.gif',
    'imagens_jogo/N_sprites/Noise_mach1.gif', 'imagens_jogo/N_sprites/Noise_mach2.gif',
    'imagens_jogo/N_sprites/Noise_milk.gif', 'imagens_jogo/N_sprites/Noise_P_hit.gif',
    'imagens_jogo/N_sprites/Noise_P_win.gif', 'imagens_jogo/N_sprites/Noise_parry.gif',
    'imagens_jogo/N_sprites/Noise_PD.gif', 'imagens_jogo/N_sprites/Noise_PP.gif',
    'imagens_jogo/N_sprites/Noise_scared.gif', 'imagens_jogo/N_sprites/Noise_walk.gif',
    'imagens_jogo/N_sprites/Noise_wallhit.gif', 'imagens_jogo/N_sprites/Noise_win.gif',
    'imagens_jogo/N_sprites/Pepper_Pizza_Noise.gif',
    'imagens_jogo/G_sprites/Gustavo_drop.gif', 'imagens_jogo/G_sprites/Gustavo_idle.gif',
    'imagens_jogo/G_sprites/Gustavo_N_hit.gif', 'imagens_jogo/G_sprites/Gustavo_N_win.gif',
    'imagens_jogo/G_sprites/Gustavo_P_hit.gif', 'imagens_jogo/G_sprites/Gustavo_P_win.gif',
    'imagens_jogo/G_sprites/Gustavo_PN.gif', 'imagens_jogo/G_sprites/Gustavo_PP.gif',
    'imagens_jogo/Stuff/platform.png',
    'imagens_jogo/Stuff/backwoag.png', 'imagens_jogo/Stuff/loading_screen.png',
    'imagens_jogo/Stuff/Mode_Screen.png', 'imagens_jogo/Stuff/Title_Screen.png',
    'soundtrack_jogo/Peppino/Peppino_grab.wav', 'soundtrack_jogo/Peppino/Peppino_hurt.wav',
    'soundtrack_jogo/Peppino/Peppino_jump.wav', 'soundtrack_jogo/Peppino/Peppino_run.wav',
    'soundtrack_jogo/Peppino/Peppino_step.wav', 'soundtrack_jogo/Stuff/Noise_music.mp3',
    'soundtrack_jogo/Stuff/Parry.wav', 'soundtrack_jogo/Stuff/Start_music.mp3',
    'soundtrack_jogo/Stuff/Taunt.wav', 'soundtrack_jogo/Stuff/Pause_music.mp3',
    'imagens_jogo/Stuff/taunt_effect.png'
];

let arquivosCarregados = 0;
let carregamentoConcluido = false;
let jogoRodando = false;
let jogoPausado = false;
let gameLoopId;

const musicaPrincipal = new Audio('soundtrack_jogo/Stuff/Start_music.mp3'); 
musicaPrincipal.loop = true;
const musicaBatalha = new Audio(); 
musicaBatalha.loop = true;
const musicaPause = new Audio('soundtrack_jogo/Stuff/Pause_music.mp3');
musicaPause.loop = true;

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

let modoSelecionadoNoMenu = 'noise';
let modoAtualDaPartida = 'noise';

const GRAVIDADE = 0.6;
const CHAO_Y = 440; 
const LARGURA_TELA = 900;

const arenaPlataformas = [
    { x: 200, y: 320, largura: 500, altura: 60 },
    { x: 350, y: 180, largura: 200, altura: 40 }
];

const controles = { esquerda: false, direita: false, baixo: false, shift: false, z: false, x: false, c: false, z_press: false, x_press: false, c_press: false };

document.addEventListener('keydown', (e) => {
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
    tauntId: 1, parryId: 1
};

const inimigo = { x: 750, y: 0, vx: 0, vy: 0, largura: 100, altura: 100, noChao: false, estado: 'idle', stunTimer: 0 };
let somMovimentoAtual = 'none';

function iniciarPreloader() {
    if (assetsParaCarregar.length === 0) { finalizarCarregamento(); return; }
    assetsParaCarregar.forEach(src => {
        if (src.endsWith('.mp3') || src.endsWith('.wav')) {
            const audio = new Audio();
            audio.addEventListener('canplaythrough', registrarProgresso, { once: true });
            audio.addEventListener('error', registrarProgresso, { once: true });
            audio.src = src; audio.load();
        } else {
            const img = new Image();
            img.addEventListener('load', registrarProgresso, { once: true });
            img.addEventListener('error', registrarProgresso, { once: true });
            img.src = src;
        }
    });
}

function registrarProgresso() {
    if (carregamentoConcluido) return;
    arquivosCarregados++;
    const barra = document.getElementById('barra-loading');
    if (barra) barra.style.width = Math.floor((arquivosCarregados / assetsParaCarregar.length) * 100) + '%';
    if (arquivosCarregados >= assetsParaCarregar.length) { carregamentoConcluido = true; setTimeout(finalizarCarregamento, 300); }
}

function finalizarCarregamento() {
    let telaLoading = document.getElementById('loading-screen');
    let telaStart = document.getElementById('start-screen');
    if (telaLoading) telaLoading.style.display = 'none';
    if (telaStart) telaStart.style.display = 'flex';
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
    if (usuarioLogado && usuarioLogado.progressoPTWE) {
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

    playerDiv.style.display = 'block'; noiseDiv.style.display = 'block';

    if (modo === 'noise') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/backwoag.png')";
        musicaBatalha.src = "soundtrack_jogo/Stuff/Noise_music.mp3";
    } else if (modo === 'doise') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/backwong.png')";
        musicaBatalha.src = "soundtrack_jogo/Stuff/Doise_Music.mp3";
    } else if (modo === 'faker') {
        gameArea.style.backgroundImage = "url('imagens_jogo/Stuff/dnuorgkcab.png')";
        musicaBatalha.src = "soundtrack_jogo/Stuff/Faker_Music.mp3";
    }

    musicaBatalha.play().catch(e => {});

    peppino.x = 50; peppino.y = CHAO_Y - peppino.altura; peppino.vy = 0; peppino.estado = 'idle';
    inimigo.x = 750; inimigo.y = CHAO_Y - inimigo.altura; inimigo.vy = 0; inimigo.estado = 'idle';

    arenaPlataformas.forEach((plat, index) => {
        let div = document.getElementById('plataforma' + (index + 1));
        if (div) {
            div.style.display = 'block';
            div.style.left = plat.x + 'px';
            div.style.top = plat.y + 'px';
            div.style.width = plat.largura + 'px';
            div.style.height = plat.altura + 'px';
            div.style.backgroundImage = "url('imagens_jogo/Stuff/platform.png')";
            div.style.backgroundSize = "100% 30px";
            div.style.backgroundPosition = "top";
            div.style.backgroundRepeat = "no-repeat";
            div.style.position = "absolute";
            div.style.zIndex = "50";
        }
    });

    jogoRodando = true;
    jogoPausado = false;
    cancelAnimationFrame(gameLoopId);
    gameLoopId = requestAnimationFrame(loopDoJogo);
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
    document.getElementById('plataforma1').style.display = 'none';
    document.getElementById('plataforma2').style.display = 'none';
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
        {id: 'faker', nome: 'FAKER ATTACK'}
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

    atualizarPeppino();
    atualizarInimigoStub();
    
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
            inimigo.estado = 'stunned';
            inimigo.stunTimer = 420;
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
                inimigo.estado = 'stunned';
                inimigo.stunTimer = 420; 
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

    let bateuNaParede = false;
    if (peppino.x <= 0) { peppino.x = 0; bateuNaParede = true; } 
    else if (peppino.x + peppino.largura >= LARGURA_TELA) { peppino.x = LARGURA_TELA - peppino.largura; bateuNaParede = true; }

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
                    inimigo.estado = 'stunned';
                    inimigo.stunTimer = 180;
                } else if (peppino.estado !== 'stomp') {
                    peppino.estado = 'jump';
                }
            }
        }
    }

    checarColisoesBasicas(peppino);
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
            
            if (centroX >= plat.x && centroX <= plat.x + plat.largura) {
                if (chaoAnterior <= plat.y && peAtual >= plat.y) {
                    obj.y = plat.y - obj.altura; 
                    obj.vy = 0;
                    obj.noChao = true;
                }
            }
        });
    }
}

function atualizarInimigoStub() {
    inimigo.vy += GRAVIDADE;
    inimigo.y += inimigo.vy;
    checarColisoesBasicas(inimigo);
    
    if (inimigo.stunTimer > 0) {
        inimigo.stunTimer--;
        if (inimigo.stunTimer === 0) inimigo.estado = 'idle';
    }
}

function renderizarObjetos() {
    const pDiv = document.getElementById('player');
    const nDiv = document.getElementById('noise');

    let img = 'imagens_jogo/P_sprites/Peppino_idle.gif';
    if (peppino.estado === 'walk') img = 'imagens_jogo/P_sprites/Peppino_walk.gif';
    else if (peppino.estado === 'run') img = 'imagens_jogo/P_sprites/Peppino_run.gif';
    else if (peppino.estado === 'jump') img = 'imagens_jogo/P_sprites/Peppino_jump.gif';
    else if (peppino.estado === 'wall') img = 'imagens_jogo/P_sprites/Peppino_wall.gif';
    else if (peppino.estado === 'wallfall') img = 'imagens_jogo/P_sprites/Peppino_wallfall.gif';
    else if (peppino.estado === 'hurt') img = 'imagens_jogo/P_sprites/Peppino_hurt.gif';
    else if (peppino.estado === 'grab') img = 'imagens_jogo/P_sprites/Peppino_grab.gif';
    else if (peppino.estado === 'stomp') img = 'imagens_jogo/P_sprites/Peppino_stomp.gif';
    else if (peppino.estado === 'taunt') img = `imagens_jogo/P_sprites/taunt${peppino.tauntId}.png`;
    else if (peppino.estado === 'parry') img = `imagens_jogo/P_sprites/Parry${peppino.parryId}.gif`;

    pDiv.style.backgroundImage = `url('${img}')`;
    pDiv.style.transform = `scaleX(${peppino.direcao})`;
    pDiv.style.left = peppino.x + 'px';
    pDiv.style.top = peppino.y + 'px';

    let nImg = 'imagens_jogo/N_sprites/Noise_idle_D.gif';
    if (inimigo.estado === 'stunned') nImg = 'imagens_jogo/N_sprites/Noise_hurt.gif';
    nDiv.style.backgroundImage = `url('${nImg}')`;
    nDiv.style.left = inimigo.x + 'px';
    nDiv.style.top = inimigo.y + 'px';
}

function abrirEstatisticas() {
    const statsScreen = document.getElementById('stats-screen'), statsContent = document.getElementById('stats-content');
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    const p = usuarioLogado.progressoPTWE;
    statsContent.innerHTML = `<h3>NOISE MODE</h3><p>Vezes jogadas: ${p.partidasJogadas.noise}</p><hr><h3>DOISE OVERLAY</h3><p>Vezes jogadas: ${p.partidasJogadas.doise}</p><hr><h3>FAKER ATTACK</h3><p>Vezes jogadas: ${p.partidasJogadas.faker}</p>`;
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
    
    avatarSelecionadoTemporario = usuarioLogado.foto || 'imagens/usuario_padrao.png';
    const grid = document.getElementById('grid-avatares');
    grid.innerHTML = '';

    for(let i=1; i<=20; i++) {
        let src = `imagens/avatar${i}.png`;
        let img = document.createElement('img');
        img.src = src;
        img.className = 'avatar-option';
        if (src === avatarSelecionadoTemporario) img.classList.add('selected');
        img.onclick = function() {
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
            img.classList.add('selected');
            avatarSelecionadoTemporario = src;
        };
        grid.appendChild(img);
    }
}

function fecharEdicaoPerfil() { document.getElementById('edit-profile-screen').style.display = 'none'; document.getElementById('stats-screen').style.display = 'flex'; }

function salvarEdicaoPerfil() {
    const novoNome = document.getElementById('input-novo-nome').value.trim();
    if (novoNome === '') return;
    usuarioLogado.nome = novoNome;
    usuarioLogado.foto = avatarSelecionadoTemporario;
    document.getElementById('nome-perfil-ptwe').innerText = novoNome;
    document.getElementById('foto-perfil-ptwe').src = usuarioLogado.foto;
    atualizarBancoDeDados(usuarioLogado);
    fecharEdicaoPerfil();
}

function arrancarJogo() {
    if (usuarioLogado) {
        document.getElementById('nome-perfil-ptwe').innerText = usuarioLogado.nome;
        document.getElementById('foto-perfil-ptwe').src = usuarioLogado.foto || 'imagens/usuario_padrao.png';
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
