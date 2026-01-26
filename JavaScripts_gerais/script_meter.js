var pontuacao = 0;
var aviso = alert(' De todas as opções, você só pode escolher uma. \n Para responder a pergunta, responda com base no número dado. \n Por favor, responda com honestidade.');

// Perguntas.
var Q1 = prompt('Qual desses jogos você joga? \n 1 = Minecraft. \n 2 = Super Mario Bros. \n 3 = Pizza Tower. \n 4 = League Of Legends. \n 5 = Sonic. \n 6 = Outro jogo que não está aqui. \n 7 = Eu não jogo jogos eletrônicos.');
var Q2 = prompt('Qual desses esportes você pratica? \n 1 = Futebol. \n 2 = Basquete. \n 3 = Natação. \n 4 = Outro esporte que não está aqui. \n 5 = Eu não gosto de esportes.');
var Q3 = prompt('Qual é o seu passatempo favorito? \n 1 = Assistir qualquer coisa. \n 2 = Fazer alguma atividade. \n 3 = conversar com parentes/amigos. \n 4 = Brincar/gastar energia com algo. \n 5 = Outro passatempo que não está aqui. \n 6 = Fazer nada.');

// Questão 1.
if (Q1 == 1) {
    pontuacao = pontuacao + 1;
    document.getElementById("Q1").innerText = `Wow, você joga Minecraft. É meio genérico, mas é um jogo muito bom! (+1 Ponto)`;
} else if (Q1 == 2) {
    pontuacao = pontuacao + 1;
    document.getElementById("Q1").innerText = `Wow, você joga Mario. Então o "salvador de princesas" finalmente chegou! (+1 Ponto)`;
} else if (Q1 == 3) {
    pontuacao = pontuacao + 3;
    document.getElementById("Q1").innerText = `Wow, você joga Pizza Tower. Você tem bom gosto! (+3 Pontos)`;
} else if (Q1 == 4) {
    pontuacao = pontuacao - 1;
    document.getElementById("Q1").innerText = `Wow, você joga LOL. Vai socializar e para de jogar LOL! (-1 Ponto)`;
} else if (Q1 == 5) {
    pontuacao = pontuacao - 3;
    document.getElementById("Q1").innerText = `Wow, você joga Sonic. Porque não tenta algo melhor que isso? Você merece algo melhor... (-3 Pontos)`;
} else if (Q1 == 6) {
    document.getElementById("Q1").innerText = `Sério? Sinto muito, me diga outros jogos na sessão de comentários na página inicial. (+0 Pontos)`;
} else if (Q1 == 7) {
    document.getElementById("Q1").innerText = `Nossa, você não joga nenhum jogo. Tudo bem! Se você não gosta/tem interesse nisso, está tudo no seu direito. (+0 Pontos)`;
} else {
    document.getElementById("Q1").innerText = `Opção inválida na questão 1. (+0 Pontos)`;}

// Questão 2.
if (Q2 == 1) {
    pontuacao = pontuacao + 1;
    document.getElementById("Q2").innerText = `Wow, você pratica futebol. É meio genérico, mas ok! (+1 Ponto)`;
} else if (Q2 == 2) {
    pontuacao = pontuacao + 1;
    document.getElementById("Q2").innerText = `Wow, você pratica basquete. Então você deve ser alto ou tem bastante determinação! (+1 Ponto)`;
} else if (Q2 == 3) {
    pontuacao = pontuacao + 3;
    document.getElementById("Q2").innerText = `Wow, você pratica natação. Você é o próprio peixe fora d'água! (+3 Pontos)`;
} else if (Q2 == 4) {
    document.getElementById("Q2").innerText = `Sério? Sinto muito, me diga outros esportes na sessão de comentários na página inicial! (+0 Pontos)`;
} else if (Q2 == 5) {
    document.getElementById("Q2").innerText = `Nossa, você não pratica nenhum esporte. Tudo bem! Se você não gosta/tem interesse nisso, está tudo no seu direito. (+0 Pontos)`;
} else {
    document.getElementById("Q2").innerText = `Opção inválida na questão 2. (+0 Pontos)`;}

// Questão 3.
if (Q3 == 1) {
    pontuacao = pontuacao + 1;
    document.getElementById("Q3").innerText = `Wow, você assiste algo. É meio genérico, mas é um bom passatempo! (+1 Ponto)`;
} else if (Q3 == 2) {
    document.getElementById("Q3").innerText = `Wow, você faz algo no tempo livre. Então o "salvador de tempo" nunca descansa? (+0 Pontos)`;
} else if (Q3 == 3) {
    pontuacao = pontuacao + 3;
    document.getElementById("Q3").innerText = `Wow, você gosta de conversar. Você tem bom gosto! Ter momentos com quem você mais ama é sempre algo bom! (+3 Pontos)`;
} else if (Q3 == 4) {
    pontuacao = pontuacao + 2;
    document.getElementById("Q3").innerText = `Wow, você gasta energia. Ou você é criança ou você é um atleta. Parabéns de qualquer forma! (+2 Pontos)`;
} else if (Q3 == 5) {
    document.getElementById("Q3").innerText = `Sério? Sinto muito, me diga outros passatempos na sessão de comentários na página inicial! (+0 Pontos)`;
} else if (Q3 == 6) {
    pontuacao = pontuacao - 1;
    document.getElementById("Q3").innerText = `Nossa, você não tem nenhum passatempo. Tudo bem, eu acho? Se você não gosta/tem interesse nisso, eu meio que me preocupo com você... (-1 Ponto)`;
} else {
    document.getElementById("Q3").innerText = `Opção inválida na questão 3. (+0 Pontos)`;}

// Resultado Final
document.getElementById("A1").innerHTML = `RESULTADO FINAL: Sua pontuação de "legalzice" é: <strong>${pontuacao}</strong>`;