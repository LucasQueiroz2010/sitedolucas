// Seleção de elementos do DOM.
// DOM é 'Document Object Model', que é uma interface de programação que representa páginas HTML como uma estrutura de árvore hierárquica.
const celulas = document.querySelectorAll(".celula");
const textoTurno = document.querySelector("#turno");
const resetBtn = document.querySelector("#resetBtn"); 

// Sons/Imagens
const somVitoria = new Audio('jogodavelha/Soundtrack_generico/vitoria.wav');
const somEmpate = new Audio('jogodavelha/Soundtrack_generico/empate.wav');
const imagemP1 ='<img src="jogodavelha/Icons_generico/X.png">';
const imagemP2 = '<img src="jogodavelha/Icons_generico/O.png">';

// Váriaveis de estado do jogo.
// Array para as 9 posições do tabuleiro (deixei vazio para que o jogo começe com elas vazias).
// 'Array' é um objeto que funciona como uma lista de valores armazenados em uma única variável através de um índice numérico.
let opçoes = ["", "", "", "", "", "", "", "", ""];
let playerAtual = "1";
let running = false;

// Condições de vitória.
// Índices do array que formam uma linha, coluna ou diagonal.
const condiçaodevitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]];           // Diagonais

// Inicialização
function começarJogo() {
// Adicionei um evento de clique em cada célula.
    celulas.forEach(cell => cell.addEventListener("click", celulaClicada));
// Evento para botão de reinício.
    resetBtn.addEventListener("click", resetarJogo);
    textoTurno.textContent = `Vez do Jogador: ${playerAtual}`;
    running = true;}

// Lógica de clique das células.
function celulaClicada() {
    const indexCelula = this.getAttribute("data-index");

// Se a célula já tem algo OU o jogo parou, não faz nada
    if (opçoes[indexCelula] != "" || !running) {
        return;}

// Atualiza a célula e verifica o resultado.
    atualizaCelula(this, indexCelula);
    checarVitoria();}
function atualizaCelula(cell, index) {
    opçoes[index] = playerAtual;
    if (playerAtual == "1") {
        cell.innerHTML = imagemP1;
    } else {
        cell.innerHTML = imagemP2;}}

// Troca a vez dos players após seu turno.
function trocarPlayer() {
    playerAtual = (playerAtual == "1") ? "2" : "1";
    textoTurno.textContent = `Vez do Jogador: ${playerAtual}`;}

// Verificação do vencedor.
function checarVitoria() {
    let roundWon = false;

// Loop de todas as condições de vitória
    for (let i = 0; i < condiçaodevitoria.length; i++) {
        const condition = condiçaodevitoria[i];
        const celulaA = opçoes[condition[0]];
        const celulaB = opçoes[condition[1]];
        const celulaC = opçoes[condition[2]];
// Se alguma célula estiver vazia, o jogo continua.
        if (celulaA == "" || celulaB == "" || celulaC == "") {
            continue;}
        if (celulaA == celulaB && celulaB == celulaC) {
            roundWon = true;
            break;}}

// Se todas as células estiverem vazias, o jogo continua.
    if (roundWon) {
        textoTurno.textContent = `O Jogador ${playerAtual} venceu!`;
        running = false;
        somVitoria.play();} 
    else if (!opçoes.includes("")) {
        textoTurno.textContent = `Empate! Reiniciando...`;
        somEmpate.play();
        running = false;
        // Reinicia automaticamente após 2 segundos se der empate
        setTimeout(resetarJogo, 700);
    } 
    else {
        trocarPlayer();}}

// Funções.
function resetarJogo() {
    playerAtual = "1";
    opçoes = ["", "", "", "", "", "", "", "", ""];
    textoTurno.textContent = `Vez do Jogador: ${playerAtual}`;
        celulas.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("x", "o");});
        running = true;

    // 'getElementById' é usado para acessar um elemento HTML específico no DOM através do seu atributo de 'id'.
    const textoReset = document.getElementById("textoReset");
    if(textoReset) textoReset.innerText = "Resetar jogo.";}

    document.addEventListener("DOMContentLoaded", function() {
    const musica = document.getElementById("minhaMusica");
    const overlay = document.getElementById("overlayMusica");
    const btnEntrar = document.getElementById("btnEntrar");

    musica.volume = 0.5;

// Função para iniciar o site e a música.
    function iniciarExperiencia() {
        musica.play().then(() => {
            console.log("Música iniciada.");
        }).catch(error => {
            console.log("Erro ao tocar música:", error);});
// Esconde a tela de início.
        overlay.classList.remove("teladeinicio");
        overlay.classList.add("teladeinicio_desativada");}
    musica.play().then(() => {
        overlay.classList.remove("teladeinicio");
        overlay.classList.add("teladeinicio_desativada");
    }).catch(() => {
        console.log("Autoplay bloqueado. Aguardando interação do usuário.");});
    btnEntrar.addEventListener("click", iniciarExperiencia);});

começarJogo();