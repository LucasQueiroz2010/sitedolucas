let currentPlayer = 1;
let p1Name, p2Name, totalRounds;
let p1Wins = 0, p2Wins = 0;
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = false;
let currentPreviewAudio = null;
const characterData = [
    {   name: "Peppino",
        img: "jogodavelha/Icons/Peppino.png",
        moves: ["jogodavelha/Soundtrack/Peppino/Peppino1.wav", "jogodavelha/Soundtrack/Peppino/Peppino2.wav", "jogodavelha/Soundtrack/Peppino/Peppino3.wav", "jogodavelha/Soundtrack/Peppino/Peppino4.wav"],
        point: "jogodavelha/Soundtrack/Peppino/Peppino_point.wav",
        win: "jogodavelha/Soundtrack/Peppino/Peppino_win.mp3"},
    {   name: "The Noise",
        img: "jogodavelha/Icons/Noise.png",
        moves: ["jogodavelha/Soundtrack/Noise/Noise1.wav", "jogodavelha/Soundtrack/Noise/Noise2.wav", "jogodavelha/Soundtrack/Noise/Noise3.wav", "jogodavelha/Soundtrack/Noise/Noise4.wav"],
        point: "jogodavelha/Soundtrack/Noise/Noise_point.wav",
        win: "jogodavelha/Soundtrack/Noise/Noise_win.mp3"},
    {   name: "Mario",
        img: "jogodavelha/Icons/Mario.png",
        moves: ["jogodavelha/Soundtrack/Mario/Mario1.wav", "jogodavelha/Soundtrack/Mario/Mario2.wav", "jogodavelha/Soundtrack/Mario/Mario3.wav", "jogodavelha/Soundtrack/Mario/Mario4.wav"],
        point: "jogodavelha/Soundtrack/Mario/Mario_point.wav",
        win: "jogodavelha/Soundtrack/Mario/Mario_win.mp3"},
    {   name: "Luigi",
        img: "jogodavelha/Icons/Luigi.png",
        moves: ["jogodavelha/Soundtrack/Luigi/Luigi1.wav", "jogodavelha/Soundtrack/Luigi/Luigi2.wav", "jogodavelha/Soundtrack/Luigi/Luigi3.wav", "jogodavelha/Soundtrack/Luigi/Luigi4.wav"],
        point: "jogodavelha/Soundtrack/Luigi/Luigi_point.wav",
        win: "jogodavelha/Soundtrack/Luigi/Luigi_win.wav"},
    {   name: "Peach",
        img: "jogodavelha/Icons/Peach.png",
        moves: ["jogodavelha/Soundtrack/Peach/Peach1.wav", "jogodavelha/Soundtrack/Peach/Peach2.wav", "jogodavelha/Soundtrack/Peach/Peach3.wav", "jogodavelha/Soundtrack/Peach/Peach4.wav"],
        point: "jogodavelha/Soundtrack/Peach/Peach_point.wav",
        win: "jogodavelha/Soundtrack/Peach/Peach_win.wav"},
    {   name: "Daisy",
        img: "jogodavelha/Icons/Daisy.png",
        moves: ["jogodavelha/Soundtrack/Daisy/Daisy1.wav", "jogodavelha/Soundtrack/Daisy/Daisy2.wav", "jogodavelha/Soundtrack/Daisy/Daisy3.wav", "jogodavelha/Soundtrack/Daisy/Daisy4.wav"],
        point: "jogodavelha/Soundtrack/Daisy/Daisy_point.wav",
        win: "jogodavelha/Soundtrack/Daisy/Daisy_win.wav"},
    {   name: "Peddito",
        img: "jogodavelha/Icons/Peddito.png",
        moves: ["jogodavelha/Soundtrack/Peddito/Peddito1.wav", "jogodavelha/Soundtrack/Peddito/Peddito2.wav", "jogodavelha/Soundtrack/Peddito/Peddito3.wav", "jogodavelha/Soundtrack/Peddito/Peddito4.wav"],
        point: "jogodavelha/Soundtrack/Peddito/Peddito_point.wav",
        win: "jogodavelha/Soundtrack/Peddito/Peddito_win.mp3"},
    {   name: "The Doise",
        img: "jogodavelha/Icons/Doise.png",
        moves: ["jogodavelha/Soundtrack/Doise/Doise1.wav", "jogodavelha/Soundtrack/Doise/Doise2.wav", "jogodavelha/Soundtrack/Doise/Doise3.wav", "jogodavelha/Soundtrack/Doise/Doise4.wav"],
        point: "jogodavelha/Soundtrack/Doise/Doise_point.mp3",
        win: "jogodavelha/Soundtrack/Doise/Doise_win.mp3"}];

let p1Index = 0;
let p2Index = 1;
window.onload = function() {
    updateCharUI();
    document.addEventListener('click', function() {
        const setupMusic = document.getElementById('setupMusic');
        if (setupMusic.paused) {
            setupMusic.volume = 0.5;
            setupMusic.play().catch(e => console.log("Navegador bloqueou autoplay"));}}, {
        once: true});};

function cycleCharacter(player) {
    if (player === 1) {
        p1Index = (p1Index + 1) % characterData.length;
        if (p1Index === p2Index) {
            p1Index = (p1Index + 1) % characterData.length;}
    } else {
        p2Index = (p2Index + 1) % characterData.length;
        if (p2Index === p1Index) {
            p2Index = (p2Index + 1) % characterData.length;}}
    updateCharUI();
    if (currentPreviewAudio) {
        currentPreviewAudio.pause();
        currentPreviewAudio.currentTime = 0;}
    const char = player === 1 ? characterData[p1Index] : characterData[p2Index];
    currentPreviewAudio = new Audio(char.moves[0]);
    currentPreviewAudio.play();}

function updateCharUI() {
    const p1Char = characterData[p1Index];
    const p2Char = characterData[p2Index];
    document.getElementById('btn-p1-select').style.backgroundImage = `url('${p1Char.img}')`;
    document.getElementById('label-p1').innerText = p1Char.name;
    document.getElementById('btn-p2-select').style.backgroundImage = `url('${p2Char.img}')`;
    document.getElementById('label-p2').innerText = p2Char.name;}

function setupGameAudio() {
    const p1Data = characterData[p1Index];
    const p2Data = characterData[p2Index];
    document.getElementById('p1_move_1').src = p1Data.moves[0];
    document.getElementById('p1_move_2').src = p1Data.moves[1];
    document.getElementById('p1_move_3').src = p1Data.moves[2];
    document.getElementById('p1_move_4').src = p1Data.moves[3];
    document.getElementById('p1_point').src = p1Data.point;
    document.getElementById('p1_win_theme').src = p1Data.win;
    document.getElementById('p2_move_1').src = p2Data.moves[0];
    document.getElementById('p2_move_2').src = p2Data.moves[1];
    document.getElementById('p2_move_3').src = p2Data.moves[2];
    document.getElementById('p2_move_4').src = p2Data.moves[3];
    document.getElementById('p2_point').src = p2Data.point;
    document.getElementById('p2_win_theme').src = p2Data.win;
    document.documentElement.style.setProperty('--img-p1', `url('${p1Data.img}')`);
    document.documentElement.style.setProperty('--img-p2', `url('${p2Data.img}')`);}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

function playMoveSound(player) {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    const sound = document.getElementById(`p${player}_move_${randomNum}`);
    if (sound) {
        sound.currentTime = 0;
        sound.play();}}

function startGame() {
    p1Name = document.getElementById('p1Name').value || characterData[p1Index].name;
    p2Name = document.getElementById('p2Name').value || characterData[p2Index].name;
    let roundsInput = parseInt(document.getElementById('rounds').value);
    if (isNaN(roundsInput) || roundsInput % 2 === 0 || roundsInput <= 0) {
        alert("Insira um número ímpar.");
        return;}
    setupGameAudio();
    totalRounds = roundsInput;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    document.body.classList.add('game-mode');
    const setupMusic = document.getElementById('setupMusic');
    if (setupMusic) {
        setupMusic.pause();
        setupMusic.currentTime = 0;}
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.volume = 1.0;
        bgMusic.play();}
    updateScoreboard();
    resetBoard();}

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');
    if (gameState[index] !== "" || !gameActive) return;
    gameState[index] = currentPlayer;
    cell.classList.add(currentPlayer === 1 ? 'p1' : 'p2');
    checkResult();}

function checkResult() {
    let roundWon = false;
    for (let condition of winningConditions) {
        let a = gameState[condition[0]],
            b = gameState[condition[1]],
            c = gameState[condition[2]];
        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
            roundWon = true;
            break;}}
    if (roundWon) {
        currentPlayer === 1 ? p1Wins++ : p2Wins++;
        updateScoreboard();
        if (p1Wins > totalRounds / 2 || p2Wins > totalRounds / 2) {
            gameActive = false;
            const bgMusic = document.getElementById('bgMusic');
            if (bgMusic) bgMusic.pause();
            document.getElementById(`p${currentPlayer}_win_theme`).play();
            setTimeout(() => {
                alert(`FIM DE JOGO! ${currentPlayer === 1 ? p1Name : p2Name} VENCEU O JOGO!`);
            }, 100);
        } else {
            document.getElementById(`p${currentPlayer}_point`).play();
            setTimeout(resetBoard, 500);}
        return;}
    if (!gameState.includes("")) {
        document.getElementById('draw_sound').play();
        setTimeout(resetBoard, 500);
        return;}
    playMoveSound(currentPlayer);
    currentPlayer = currentPlayer === 1 ? 2 : 1;}

function resetBoard() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('p1', 'p2');});}

function resetFullGame() {
    location.reload();}

function updateScoreboard() {
    document.getElementById('scoreboard').innerText =
        `${p1Name}: ${p1Wins} | ${p2Name}: ${p2Wins} (${totalRounds} rounds totais!)`;}

function toggleFullscreen() {
    const icon = document.getElementById('fs-icon');
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        icon.src = "jogodavelha/fullscreen_off.png";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            icon.src = "jogodavelha/fullscreen_on.png";}}}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));