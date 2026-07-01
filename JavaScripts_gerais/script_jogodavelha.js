// Seleção de elementos do DOM.
// DOM é 'Document Object Model', que é uma interface de programação que representa páginas HTML como uma estrutura de árvore hierárquica.
const celulas = document.querySelectorAll(".celula");
const textoTurno = document.querySelector("#turno");
const resetBtn = document.querySelector("#resetBtn");
const textoReset = document.getElementById("textoReset");
const musica = document.getElementById("minhaMusica");
const overlay = document.getElementById("overlayMusica");
const btnStart = document.getElementById("botaostart");

// Sons e Imagens.
const somVitoria = new Audio('Soundtrack_JV/vitoria.wav');
const somEmpate = new Audio('Soundtrack_JV/empate.wav');
const imagemP1 = '<img src="Icons_JV/X.png">';
const imagemP2 = '<img src="Icons_JV/O.png">';
const imagemVitoriaP1 = '<img src="Icons_JV/X_win.png">';
const imagemVitoriaP2 = '<img src="Icons_JV/O_win.png">';

// Váriaveis de estado do jogo.
// Array para as 9 posições do tabuleiro (deixei vazio para que o jogo começe com elas vazias).
// 'Array' é um objeto que funciona como uma lista de valores armazenados em uma única variável através de um índice numérico.
let opçoes = ["", "", "", "", "", "", "", "", ""];
let playerAtual = "1";
let running = false; // Começa pausado até clicar em Start

// Condições de vitória.
// Índices do array que formam uma linha, coluna ou diagonal.
const condicaoDeVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas.
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columas
    [0, 4, 8], [2, 4, 6]];           // Diagonais.

// Funções do jogo.
// Função chamada ao clicar em uma célula.
function celulaClicada() {
    const indexCelula = this.getAttribute("data-index");
// Se a célula já tem algo OU o jogo não está rodando, para aqui.
    if (opçoes[indexCelula] != "" || !running) {
        return;}
    atualizaCelula(this, indexCelula);
    checarVitoria();}

// Váriaveis de estado do jogo.
// Array para as 9 posições do tabuleiro (deixei vazio para que o jogo começe com elas vazias).
// 'Array' é um objeto que funciona como uma lista de valores armazenados em uma única variável através de um índice numérico.
function atualizaCelula(cell, index) {
    opçoes[index] = playerAtual;
    
    if (playerAtual == "1") {
        cell.innerHTML = imagemP1;
    } else {
        cell.innerHTML = imagemP2;}}

// Função que troca a vez dos players após seu turno.
function trocarPlayer() {
    playerAtual = (playerAtual == "1") ? "2" : "1";
    textoTurno.textContent = `Vez do Jogador: ${playerAtual}`;}

// Função que verifica se alguém ganhou.
function checarVitoria() {
    let roundWon = false;
    let sequenciaVencedora = [];

// Loop de todas as condições de vitória.
    for (let i = 0; i < condicaoDeVitoria.length; i++) {
        const condition = condicaoDeVitoria[i];
        const celulaA = opçoes[condition[0]];
        const celulaB = opçoes[condition[1]];
        const celulaC = opçoes[condition[2]];
        if (celulaA == "" || celulaB == "" || celulaC == "") {
            continue;}
        if (celulaA == celulaB && celulaB == celulaC) {
            roundWon = true;
            sequenciaVencedora = condition;
            break;}}
    if (roundWon) {
        textoTurno.textContent = `O Jogador ${playerAtual} venceu!`;
        running = false;
        somVitoria.play();
        somVitoria.volume = 0.2;
// lógica que troca para a imagem de vitória.
        sequenciaVencedora.forEach(index => {
            if (playerAtual == "1") {
                celulas[index].innerHTML = imagemVitoriaP1;
            } else {
                celulas[index].innerHTML = imagemVitoriaP2;}});
    } else if (!opçoes.includes("")) {
        textoTurno.textContent = `Empate!`;
        somEmpate.play();
        running = false;
        setTimeout(resetarJogo, 690);
        somEmpate.volume = 1.8;
    } else {
        trocarPlayer();}}

// Função que reseta o jogo.
function resetarJogo() {
    playerAtual = "1";
    opçoes = ["", "", "", "", "", "", "", "", ""];
    textoTurno.textContent = `Vez do Jogador: ${playerAtual}`;    
    celulas.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("x", "o");});    
    if(textoReset) textoReset.innerText = "Resetar jogo.";
    running = true;}

// Lógica que configura os cliques nas células e no botão reset.
celulas.forEach(cell => cell.addEventListener("click", celulaClicada));
if(resetBtn) resetBtn.addEventListener("click", resetarJogo);

// Se a música tocar automáticamente, não mostra a tela de início. 
// Se a música não tocar, mostra a tela de início que, ao clicar no botão de start, queinicia o jogo e a música.
if(btnStart) {
    btnStart.addEventListener("click", function() {
        if(musica) {
            musica.volume = 0.5;
            musica.play().catch(error => console.log("Erro ao tocar música:", error));}        
        if(overlay) {
            overlay.classList.remove("teladeinicio");
            overlay.classList.add("teladeinicio_desativada");}
        
        resetarJogo();});}