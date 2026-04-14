let usuarioLogado = JSON.parse(localStorage.getItem('usuarioAtual'));

if (!usuarioLogado) {
    window.location.href = "login.html";
} else {
    if (!usuarioLogado.progressoPTWE) {
        usuarioLogado.progressoPTWE = {
            modosDesbloqueados: { noise: true, doise: false, faker: false },
            ranks: {
                noise: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 },
                doise: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 },
                faker: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 }
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
    'peppino_idle.gif', 'peppino_run.gif', 'peppino_jump.gif', 'peppino_fall.gif',
    'noise_idle.gif', 'noise_run.gif', 'faker_idle.gif', 'faker_run.gif',
    'pizza.gif', 'toppin_tomato.gif', 'toppin_cheese.gif', 'toppin_sausage.gif', 'toppin_pineapple.gif', 'toppin_mushroom.gif',
    'bg.png', 'platform.png', 'image_510045.png', 'image_510069.png', 'image_5100a2.png', 
    'image_5100e3.png', 'image_510120.png', 'image_510405.png', 'image_510424.png',
    'bgm_start.mp3', 'bgm_game.mp3', 'bgm_escape.mp3', 'bgm_faker.mp3', 'bgm_faker_escape.mp3',
    'sfx_jump.wav', 'sfx_collect.wav', 'sfx_hurt.wav', 'sfx_taunt.wav'
];

let arquivosCarregados = 0;
let carregamentoConcluido = false;
const musicaMenu = new Audio('bgm_start.mp3');
musicaMenu.loop = true;
let modoSelecionadoNoMenu = 'noise';
let modoAtualDaPartida = 'noise';

const listaAvatares = [
    'imagens_jogo/profile_pictures/Peppino.png', 'imagens_jogo/profile_pictures/aPepperman.png', 'imagens_jogo/profile_pictures/Vigilante.png', 'imagens_jogo/profile_pictures/Noise.png',
    'imagens_jogo/profile_pictures/Doise.png', 'imagens_jogo/profile_pictures/Noisette.png', 'imagens_jogo/profile_pictures/Doise.png', 'imagens_jogo/profile_pictures/Faker.png',
    'imagens_jogo/profile_pictures/Peddito.png', 'imagens_jogo/profile_pictures/Pizzaface.png', 'imagens_jogo/profile_pictures/Pizzahead.png', 'imagens_jogo/profile_pictures/Pizzelle.png',
    'imagens_jogo/profile_pictures/Pizzano.png', 'imagens_jogo/profile_pictures/WIP.png', 'imagens_jogo/profile_pictures/WIP.png', 'imagens_jogo/profile_pictures/WIP.png',
    'imagens_jogo/profile_pictures/WIP.png', 'imagens_jogo/profile_pictures/WIP.png', 'imagens_jogo/profile_pictures/WIP.png', 'imagens_jogo/profile_pictures/generic_picture.png'
];
let avatarSelecionadoTemporario = '';

function iniciarPreloader() {
    if (assetsParaCarregar.length === 0) {
        finalizarCarregamento();
        return;
    }
    assetsParaCarregar.forEach(src => {
        if (src.endsWith('.mp3') || src.endsWith('.wav')) {
            const audio = new Audio();
            audio.addEventListener('canplaythrough', registrarProgresso, { once: true });
            audio.addEventListener('error', registrarProgresso, { once: true });
            audio.src = src;
            audio.load();
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
    const porcentagem = Math.floor((arquivosCarregados / assetsParaCarregar.length) * 100);
    const barra = document.getElementById('barra-loading');
    if (barra) {
        barra.style.width = porcentagem + '%';
    }
    if (arquivosCarregados >= assetsParaCarregar.length) {
        carregamentoConcluido = true;
        setTimeout(finalizarCarregamento, 300);
    }
}

function finalizarCarregamento() {
    let telaLoading = document.getElementById('loading-screen');
    let telaStart = document.getElementById('start-screen');
    if (telaLoading) telaLoading.style.display = 'none';
    if (telaStart) telaStart.style.display = 'flex';
    atualizarBotoesDoMenu();
}

function irParaModos() {
    musicaMenu.play().catch(e => console.log(e));
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('mode-screen').style.display = 'flex';
}

function atualizarBotoesDoMenu() {
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    const progresso = usuarioLogado.progressoPTWE.modosDesbloqueados;
    const btnDoise = document.getElementById('btn-doise');
    const btnFaker = document.getElementById('btn-faker');
    
    if (btnDoise) {
        if (progresso.doise) {
            btnDoise.disabled = false;
            btnDoise.innerText = "DOISE OVERLAY";
        } else {
            btnDoise.disabled = true;
            btnDoise.innerText = "DOISE OVERLAY";
        }
    }
    if (btnFaker) {
        if (progresso.faker) {
            btnFaker.disabled = false;
            btnFaker.innerText = "FAKER ATTACK";
        } else {
            btnFaker.disabled = true;
            btnFaker.innerText = "FAKER ATTACK";
        }
    }
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
    if (typeof startGame === 'function') {
        if (modoAtualDaPartida === 'noise') {
            startGame(true, false, false);
        } else if (modoAtualDaPartida === 'doise') {
            startGame(true, false, true);
        } else if (modoAtualDaPartida === 'faker') {
            startGame(false, true, false);
        }
    }
}

function registrarFimDePartida(modoJogado, rankConseguido) {
    if (!usuarioLogado) return; 
    let progresso = usuarioLogado.progressoPTWE;
    if (progresso.ranks[modoJogado] && progresso.ranks[modoJogado][rankConseguido] !== undefined) {
        progresso.ranks[modoJogado][rankConseguido] += 1;
    } else {
        progresso.ranks[modoJogado][rankConseguido] = 1;
    }
    if (modoJogado === 'noise') {
        progresso.modosDesbloqueados.doise = true;
    } else if (modoJogado === 'doise') {
        progresso.modosDesbloqueados.faker = true;
    }
    atualizarBancoDeDados(usuarioLogado);
}

function abrirEstatisticas() {
    const statsScreen = document.getElementById('stats-screen');
    const statsContent = document.getElementById('stats-content');
    if (!usuarioLogado || !usuarioLogado.progressoPTWE) return;
    const p = usuarioLogado.progressoPTWE;
    statsContent.innerHTML = `
        <h3>NOISE MODE</h3>
        <p>Status: Desbloqueado</p>
        <p>Vezes jogadas: ${p.partidasJogadas.noise}</p>
        <p>Ranks: S(${p.ranks.noise.S}) | A(${p.ranks.noise.A}) | B(${p.ranks.noise.B}) | C(${p.ranks.noise.C}) | P(${p.ranks.noise.P})</p>
        <hr>
        <h3>DOISE OVERLAY</h3>
        <p>Status: ${p.modosDesbloqueados.doise ? 'Desbloqueado' : 'Bloqueado'}</p>
        <p>Vezes jogadas: ${p.partidasJogadas.doise}</p>
        <p>Ranks: S(${p.ranks.doise.S}) | A(${p.ranks.doise.A}) | B(${p.ranks.doise.B}) | C(${p.ranks.doise.C}) | P(${p.ranks.doise.P})</p>
        <hr>
        <h3>FAKER ATTACK</h3>
        <p>Status: ${p.modosDesbloqueados.faker ? 'Desbloqueado' : 'Bloqueado'}</p>
        <p>Vezes jogadas: ${p.partidasJogadas.faker}</p>
        <p>Ranks: S(${p.ranks.faker.S}) | A(${p.ranks.faker.A}) | B(${p.ranks.faker.B}) | C(${p.ranks.faker.C}) | P(${p.ranks.faker.P})</p>
    `;
    statsScreen.style.display = 'flex';
}

function fecharEstatisticas() {
    document.getElementById('stats-screen').style.display = 'none';
}

function apagarDados() {
    let confirmacao = confirm("CUIDADO! Isso vai apagar TODAS as suas estatísticas, ranks e modos desbloqueados. Esta ação NÃO pode ser desfeita. Deseja continuar?");
    if (confirmacao) {
        usuarioLogado.progressoPTWE = {
            modosDesbloqueados: { noise: true, doise: false, faker: false },
            ranks: {
                noise: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 },
                doise: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 },
                faker: { S: 0, A: 0, B: 0, C: 0, D: 0, P: 0 }
            },
            partidasJogadas: { noise: 0, doise: 0, faker: 0 }
        };
        atualizarBancoDeDados(usuarioLogado);
        alert("Seus dados foram apagados com sucesso!");
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

    listaAvatares.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.className = 'avatar-option';
        if (src === avatarSelecionadoTemporario) {
            img.classList.add('selected');
        }
        img.onclick = function() {
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
            img.classList.add('selected');
            avatarSelecionadoTemporario = src;
        };
        grid.appendChild(img);
    });
}

function fecharEdicaoPerfil() {
    document.getElementById('edit-profile-screen').style.display = 'none';
    document.getElementById('stats-screen').style.display = 'flex';
}

function salvarEdicaoPerfil() {
    const novoNome = document.getElementById('input-novo-nome').value.trim();
    
    if (novoNome === '') {
        alert('O nome não pode estar vazio!');
        return;
    }

    let nomeAntigo = usuarioLogado.nome;
    usuarioLogado.nome = novoNome;
    usuarioLogado.foto = avatarSelecionadoTemporario;

    document.getElementById('nome-perfil-ptwe').innerText = novoNome;
    document.getElementById('foto-perfil-ptwe').src = usuarioLogado.foto;

    finalizarSalvamentoPerfil(nomeAntigo);
}

function finalizarSalvamentoPerfil(nomeAntigo) {
    localStorage.setItem('usuarioAtual', JSON.stringify(usuarioLogado));
    let usuariosDB = JSON.parse(localStorage.getItem('usuariosDB')) || [];
    let index = usuariosDB.findIndex(u => u.nome === nomeAntigo);
    if (index !== -1) {
        usuariosDB[index] = usuarioLogado;
        localStorage.setItem('usuariosDB', JSON.stringify(usuariosDB));
    }
    fecharEdicaoPerfil();
}

function arrancarJogo() {
    if (usuarioLogado) {
        let nomePerfil = document.getElementById('nome-perfil-ptwe');
        let fotoPerfil = document.getElementById('foto-perfil-ptwe');
        if (nomePerfil) nomePerfil.innerText = usuarioLogado.nome;
        if (fotoPerfil) fotoPerfil.src = usuarioLogado.foto || 'imagens/usuario_padrao.png';
    }
    iniciarPreloader();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancarJogo);
} else {
    arrancarJogo();
}