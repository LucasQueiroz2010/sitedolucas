var nomecompleto = 'Lucas Oliveira de Queiroz'
var nome = 'Lucas'
var teste = 'Teste'

var nomepessoal = prompt('Me diga o seu nome com letra maiúscula no começo:')
var idadepessoal = prompt('Me diga a sua idade:')
var genero = prompt('Me diga o seu gênero (M/F) e escreva com letra maiúscula no começo:')

// NOME
if (!nomepessoal) {
    document.getElementById("saudações").innerText = `Seja bem-vindo ao Site do Lucas, pessoa genérica sem nome!`
    nomepessoal = null;}

// IDADE
if (!idadepessoal) {
    document.getElementById("Idade").innerText = `Olá, ser humano sem idade!`
    idadepessoal = null;} 
else {
    let idadeNum = parseInt(idadepessoal);
    if (idadeNum <= 12) {
        document.getElementById("Idade").innerText = `Uau, ${nomepessoal ? nomepessoal : 'pequeno'}! Você é bem pequeno, só tem ${idadepessoal} anos!`
        document.getElementById("saudações2").innerText = `Fique a vontade!`} 
    else if (idadeNum >= 13 && idadeNum <= 17) {
        document.getElementById("Idade").innerText = `Interessante, ${nomepessoal ? nomepessoal : 'jovem'}! Você é um adolescente, tem ${idadepessoal} anos!`
        document.getElementById("saudações2").innerText = `Fique a vontade!`} 
    else if (idadeNum > 17) {
        document.getElementById("Idade").innerText = `Que legal, ${nomepessoal ? nomepessoal : 'adulto'}! Você já é um adulto, já tem ${idadepessoal} anos!`
        document.getElementById("saudações2").innerText = `Fique a vontade!`}}

// GÊNERO
if (genero == 'M') {
    let nomeExibicao = nomepessoal ? nomepessoal : "Jacinto Pinto";
    document.getElementById("saudações").innerText = `Seja bem-vindo ao Site do Lucas ${nomeExibicao}, meu caro amigo!`
    document.getElementById("saudações2").innerText = `Fique a vontade, meu brother!`} 
else if (genero == 'F') {
    let nomeExibicao = nomepessoal ? nomepessoal : "Dolores Nashana";
    document.getElementById("saudações").innerText = `Seja bem-vinda ao Site do Lucas ${nomeExibicao}, minha amada amiga!`
    document.getElementById("saudações2").innerText = `Fique a vontade, minha linda!`} 
else if (genero != 'M' && genero != 'F' && genero != null) {
    document.getElementById("saudações2").innerText = `Gênero neutro?`}

// EASTER EGGS
if (idadepessoal == 67) {
    document.getElementById("Idade").innerText = `O meme '67' já está ultrapassado, ${nomepessoal}! Você deveria cometer suicídio!`}
if (nomepessoal == 'Taynan' && idadepessoal == 36 && genero == 'F') {
    document.getElementById("saudações").innerText = `Oi, mãe! Seja bem-vinda ao meu site!`
    document.getElementById("Idade").innerText = `Minha mãe tem ${idadepessoal} anos? Tá novinha ainda!`
    document.getElementById("saudações2").innerText = `Fique a vontade, mãe!`}
if (nomepessoal == 'Davi' && idadepessoal == 21 && genero == 'M') {
    document.getElementById("saudações").innerText = `E aí, meu brother Davi! Seja bem-vindo site do teu 'irmãozinho'!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos. Já é um adulto, né Davi?`
    document.getElementById("saudações2").innerText = `Fique a vontade, narigudo!`}
if (nomepessoal == 'Icaro' && idadepessoal == 42 && genero == 'M') {
    document.getElementById("saudações").innerText = `Oi, pai! Bem-vindo ao meu site, nego doce!`
    document.getElementById("Idade").innerText = `O nego doce tem ${idadepessoal} anos, tá véio, ein?`
    document.getElementById("saudações2").innerText = `Fique a vontade, pai!`}
if (nomepessoal == 'Josefina' && idadepessoal == 65 && genero == 'F') {
    document.getElementById("saudações").innerText = `Oi, Vó Nega! Bem-vinda ao meu site!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Ainda está no ápice da juventude!`
    document.getElementById("saudações2").innerText = `Fique a vontade, Vó Nega!`}
if (!nomepessoal && !idadepessoal && !genero) {
    document.getElementById("saudações").innerText = `Olhem! Um anônimo!`
    document.getElementById("Idade").innerText = `Sem idade? Sem gênero? Que pessoa chata...`
    document.getElementById("saudações2").innerText = `Faça o que quiser no meu site.`}
if (nomepessoal == 'Peppino Spaghetti' && idadepessoal == 44 && genero == 'M') {
    document.getElementById("saudações").innerText = `Olhe! é o Peppino Spaghetti, do jogo Indie Pizza Tower!`
    document.getElementById("Idade").innerText = `A meia-idade é complicada, não é?`
    document.getElementById("saudações2").innerText = `EEEEEEEAAAAAAAAAAAAAAAOOOOOOOOUUUUUUUUUHHHHHH!!!`}
if (nomepessoal == 'Theodore Noise' && idadepessoal == 40 && genero == 'M') {
    document.getElementById("saudações").innerText = `Olhe! é o Theodore Noise, poderia falar sua fala icônica?`
    document.getElementById("Idade").innerText = `woag`
    document.getElementById("saudações2").innerText = `GGGGAAAAAAAAAAAAAAAAAAAAAHHHH!!!`}
if (nomepessoal == 'Ana Júlia' && idadepessoal == 16 && genero == 'F') {
    document.getElementById("saudações").innerText = `Oi prima! Bem vinda ao meu site!`
    document.getElementById("Idade").innerText = `Você tem ${idadepessoal} anos.`
    document.getElementById("saudações2").innerText = `Priminha da minha vida!`}
if ((nomepessoal == 'Alexander' || nomepessoal == 'Batatão') && idadepessoal == 28 && genero == 'M') {
    document.getElementById("saudações").innerText = `É dentro ou fora, Batatão?`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Já tá véio, meeeeeeeeeu!`
    document.getElementById("saudações2").innerText = `É o homem mais polêmico do mundo todo.`}
if (nomepessoal == 'Mario' && idadepessoal == 25 && genero == 'M') {
    document.getElementById("saudações").innerText = `Olhe! é o Super Mario, do jogo de plataforma Super Mario Bros!`
    document.getElementById("Idade").innerText = `Quando que você vai salvar a princesa?`
    document.getElementById("saudações2").innerText = `WAAAAHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!`}
if (nomepessoal == 'Baldi Baldimore' && idadepessoal == 29 && genero == 'M') {
    document.getElementById("saudações").innerText = `Oh, hi! Welcome to my website.`
    document.getElementById("Idade").innerText = `Now is time for everybody's favorite subject: MATH!`
    document.getElementById("saudações2").innerText = `Let's play hide and seek!`}
if (nomepessoal == 'Marta' && idadepessoal == 45 && genero == 'F') {
    document.getElementById("saudações").innerText = `Oi, Marta. Seja bem vinda ao meu site!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Nem parece...`
    document.getElementById("saudações2").innerText = `Eu te amo! Obrigado por aguentar minhas loucuras!`}
if (nomepessoal == 'Gabriel' && idadepessoal == 18 && genero == 'M') {
    document.getElementById("saudações").innerText = `Oi, Biel, seja bem vindo ao meu site!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Mesmo tendo essa idade, você é o melhor do mundo!`
    document.getElementById("saudações2").innerText = `Eu te amo! Obrigado por aguentar minhas loucuras e por ser um primo incrível para mim!`}
if (nomepessoal == 'Murilo' && idadepessoal == 16 && genero == 'M') {
    document.getElementById("saudações").innerText = `Hello, Cracktorio enjoyer! Welcome to Lucas' website.`
    document.getElementById("Idade").innerText = `IDK how you tolerate me, but thanks anyway! I apreciate you pacience!`
    document.getElementById("saudações2").innerText = `Your saying you got NO BALLS? Hold up... *replaces your balls*`}

// Mudança das estrelas
var imagemOriginal1 = true;

function mudarestrela1(elemento) {
    if (imagemOriginal1) {
        elemento.style.backgroundImage = "url('imagens/scout.gif')";
        imagemOriginal1 = false;
    } else {
        elemento.style.backgroundImage = "url('imagens/estrela_basica_marrom.png')";
        imagemOriginal1 = true;}}

var imagemOriginal2 = true;

function mudarestrela2(elemento) {
    if (imagemOriginal2) {
        elemento.style.backgroundImage = "url('imagens/estrela_mario.gif')";
        imagemOriginal2 = false;
    } else {
        elemento.style.backgroundImage = "url('imagens/estrela_basica.png')";
        imagemOriginal2 = true;}}

var imagemOriginal3 = true;

function mudarestrela3(elemento) {
    if (imagemOriginal3) {
        elemento.style.backgroundImage = "url('imagens/velha.png')";
        imagemOriginal3 = false;
    } else {
        window.location.href = "jogodavelha.html";}}

// Função do RADIO.
const range = document.getElementById('myRange');
        const rangeV = document.getElementById('rangeValue');
        function updateRange() {
            const newValue = range.value;
            const min = range.min ? range.min : 0;
            const max = range.max ? range.max : 100;
            rangeV.innerHTML = newValue;
            const newVal = Number(((newValue - min) * 100) / (max - min));
            rangeV.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;}
        range.addEventListener('input', updateRange);
        document.addEventListener("DOMContentLoaded", updateRange);