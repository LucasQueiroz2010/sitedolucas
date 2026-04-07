var nomecompleto = 'Lucas Oliveira de Queiroz';
document.write('<footer class="branco">&copy; <time>2025-2026</time> - '+nomecompleto+' - Todos os direitos reservados.</footer>')

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioAtual'));

let modoAtualDaPartida = 'peppino';

function inicializarProgressoJogador() {
    if (!usuarioLogado) return;
    if (!usuarioLogado.progressoJogo) {
        usuarioLogado.progressoJogo = {
            modos: { doise: false, faker: false },
            ranks: { S: 0, A: 0, B: 0, C: 0, D: 0 }
        };
        salvarNoBanco(usuarioLogado);}

    document.getElementById('hud-jogador').style.display = 'flex';
    document.getElementById('hud-nome-perfil').innerText = usuarioLogado.nome;
    document.getElementById('hud-foto-perfil').src = usuarioLogado.foto || 'imagens/usuario_padrao.png';

    atualizarTelaDeRanks();
    atualizarBotoesDoMenu();}

function atualizarTelaDeRanks() {
    const ranks = usuarioLogado.progressoJogo.ranks;
    document.getElementById('hud-lista-ranks').innerHTML = `
        <span style="color: #ff0000;">S-Rank: ${ranks.S}</span>
        <span style="color: #ffaa00;">A-Rank: ${ranks.A}</span>
        <span style="color: #00ff00;">B-Rank: ${ranks.B}</span>
        <span style="color: #0088ff;">C-Rank: ${ranks.C}</span>
        <span style="color: #888888;">D-Rank: ${ranks.D}</span>`;}

function atualizarBotoesDoMenu() {
    const modos = usuarioLogado.progressoJogo.modos;
    const btnDoise = document.getElementById('btn-doise');
    const btnFaker = document.getElementById('btn-faker');

    if (btnDoise) {
        if (modos.doise) {
            btnDoise.disabled = false;
            btnDoise.innerText = "DOISE OVERLAY";
            btnDoise.style.filter = "none";
            btnDoise.style.opacity = "1";
        } else {
            btnDoise.disabled = true;
            btnDoise.innerText = "Win a battle against The Noise to unlock this game mode! ";
            btnDoise.style.filter = "grayscale(100%)";
            btnDoise.style.opacity = "0.5";}}

    if (btnFaker) {
        if (modos.faker) {
            btnFaker.disabled = false;
            btnFaker.innerText = "FAKER ATTACK";
            btnFaker.style.filter = "none";
            btnFaker.style.opacity = "1";
        } else {
            btnFaker.disabled = true;
            btnFaker.innerText = "Win a battle against The Doise to unlock this game mode! ";
            btnFaker.style.filter = "grayscale(100%)";
            btnFaker.style.opacity = "0.5";}}}
function vencerPartida(scoreFinal, hitsTomados) {
    if (!usuarioLogado) {
        alert("You won! But since you're not logged in, your progress wasn't saved.");
        return;}
    let rankConquistado = 'D';
    if (scoreFinal >= 5000 && hitsTomados === 0) rankConquistado = 'S';
    else if (scoreFinal >= 4000 && hitsTomados <= 2) rankConquistado = 'A';
    else if (scoreFinal >= 3000 && hitsTomados <= 5) rankConquistado = 'B';
    else if (scoreFinal >= 1500) rankConquistado = 'C';

    alert(`VICTORY!\nScore: ${scoreFinal}\nHits: ${hitsTomados}\n\nRank: ${rankConquistado}`);

    usuarioLogado.progressoJogo.ranks[rankConquistado]++;

    if (modoAtualDaPartida === 'noise' && !usuarioLogado.progressoJogo.modos.doise) {
        usuarioLogado.progressoJogo.modos.doise = true;
        alert("Woag? You unlocked the 'DOISE OVERLAY' game mode!");} 
    else if (modoAtualDaPartida === 'doise' && !usuarioLogado.progressoJogo.modos.faker) {
        usuarioLogado.progressoJogo.modos.faker = true;
        alert("Mamma-mia... You unlocked the 'FAKER ATTACK' game mode!");}

    salvarNoBanco(usuarioLogado);
    atualizarTelaDeRanks();
    atualizarBotoesDoMenu();}
function salvarNoBanco(dados) {
    let usuariosDB = JSON.parse(localStorage.getItem('usuariosDB')) || [];
    let index = usuariosDB.findIndex(u => u.nome === dados.nome);
    if(index !== -1) {
        usuariosDB[index] = dados;
        localStorage.setItem('usuariosDB', JSON.stringify(usuariosDB));
        localStorage.setItem('usuarioAtual', JSON.stringify(dados));}}
setTimeout(inicializarProgressoJogador, 500);