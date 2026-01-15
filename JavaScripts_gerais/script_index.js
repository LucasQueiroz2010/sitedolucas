var nomecompleto = 'Lucas Oliveira de Queiroz'
var nome = 'Lucas'
var teste = 'Teste'
var nomepessoal = prompt ('Me diga o seu nome com letra maiúscula no começo (clique em cancelar para não informar):')
var idadepessoal = prompt ('Me diga a sua idade (clique em cancelar para não informar):')
var genero = prompt ('Me diga o seu gênero (Masculino/Feminino) e escreva com letra maiúscula no começo (clique em cancelar para não informar):')


//NOME
if (nomepessoal == null) {
    document.getElementById("saudações").innerText = `Seja bem-vindo ao Site do Lucas, pessoa genérica sem nome!`}
    document.getElementById("saudações").innerText = `Seja bem-vindo ao Site do Lucas ${nomepessoal}!`

//IDADE
if (idadepessoal <= 12) {
    document.getElementById("Idade").innerText = `Uau, ${nomepessoal}! Você é bem pequeno, só tem ${idadepessoal} anos!`
    document.getElementById("saudações2").innerText = `Fique a vontade!`}
else if (idadepessoal >= 13 && idadepessoal <= 17) {
    document.getElementById("Idade").innerText = `Interessante, ${nomepessoal}! Você é um adolescente, tem ${idadepessoal} anos!`
    document.getElementById("saudações2").innerText = `Fique a vontade!`}
else if (idadepessoal > 17) {
    document.getElementById("Idade").innerText = `Que legal, ${nomepessoal}! Você já é um adulto, já tem ${idadepessoal} anos!`
    document.getElementById("saudações2").innerText = `Fique a vontade!`}
if (idadepessoal == undefined || idadepessoal == null) {
    document.getElementById("Idade").innerText = `Você não tem personalidade ao não querer me dizer sua idade...`}

//GÊNERO
if (genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Seja bem-vindo ao Site do Lucas ${nomepessoal}, meu caro amigo!`
    document.getElementById("saudações2").innerText = `Fique a vontade, meu brother!`}
else if (genero == 'Feminino') {
    document.getElementById("saudações").innerText = `Seja bem-vinda ao Site do Lucas ${nomepessoal}, minha amada amiga!`
    document.getElementById("saudações2").innerText = `Fique a vontade, minha linda!`}
else if (genero != 'Masculino' && genero != 'Feminino') {
    document.getElementById("saudações").innerText = `Seja bem-vindo/a ao Site do Lucas ${nomepessoal}, ser humano genérico!`
    document.getElementById("saudações2").innerText = `Gênero neutro?`
}
if (genero == null) {
    document.getElementById("saudações").innerText = `Você é chato, sabia?!`
    document.getElementById("saudações2").innerText = `Não fique a vontade!`}

//EASTER EGGS
if (idadepessoal == 67) {
    document.getElementById("Idade").innerText = `O meme '67' é horrível! Você deveria cometer suicídio, ${nomepessoal}!`}
if (nomepessoal == 'Taynan') {
    document.getElementById("saudações").innerText = `Oi, mãe! Seja bem-vinda ao meu site!`
    document.getElementById("Idade").innerText = `Minha mãe tem ${idadepessoal} anos? Tá novinha ainda!`
    document.getElementById("saudações2").innerText = `Fique a vontade, mãe!`}
if (nomepessoal == 'Davi') {
    document.getElementById("saudações").innerText = `E aí, meu brother Davi! Seja bem-vindo site do teu 'irmãozinho'!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos. Já é um adulto, né Davi?`
    document.getElementById("saudações2").innerText = `Fique a vontade, narigudo!`}
if (nomepessoal == 'Icaro') {
    document.getElementById("saudações").innerText = `Oi, pai! Bem-vindo ao meu site, nego doce!`
    document.getElementById("Idade").innerText = `O nego doce tem ${idadepessoal} anos, tá véio, ein?`
    document.getElementById("saudações2").innerText = `Fique a vontade, pai!`}
if (nomepessoal == 'Josefina' && idadepessoal == 65 && genero == 'Feminino') {
    document.getElementById("saudações").innerText = `Oi, Vó Nega! Bem-vinda ao meu site!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Ainda está no ápice da juventude!`
    document.getElementById("saudações2").innerText = `Fuqie a vontade, Vó Nega!`}
if (nomepessoal == null && idadepessoal == null && genero == null) {
    document.getElementById("saudações").innerText = `Olhem! Um anônimo!`
    document.getElementById("Idade").innerText = `Sem idade? Sem gênero? Que pessoa sem personalidade...`
    document.getElementById("saudações2").innerText = `Faça o que quiser no meu site.`}
if (nomepessoal == 'Peppino Spaghetti' && idadepessoal == 44 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Olhe! é o Peppino Spaghetti, do jogo Indie Pizza Tower!`
    document.getElementById("Idade").innerText = `A meia-idade é complicada, não é?`
    document.getElementById("saudações2").innerText = `EEEEEEEAAAAAAAAAAAAAAAOOOOOOOOUUUUUUUUUHHHHHH!!!`}
if (nomepessoal == 'Theodore Noise' && idadepessoal == 40 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Olhe! é o Theodore Noise, poderia falar sua fala icônica?`
    document.getElementById("Idade").innerText = `woag`
    document.getElementById("saudações2").innerText = `GGGGAAAAAAAAAAAAAAAAAAAAAHHHH!!!`}
if (nomepessoal == 'Ana Júlia' && idadepessoal == 16 && genero == 'Feminino') {
    document.getElementById("saudações").innerText = `Olha! Uma cachorra!`
    document.getElementById("Idade").innerText = `Que cadela véia! Já tem ${idadepessoal} anos.`
    document.getElementById("saudações2").innerText = `Coisa feia...`}
if (nomepessoal == 'Rafael' && idadepessoal == 21 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Bora jogar um Minezinho?`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Já tá véio!`
    document.getElementById("saudações2").innerText = `É o homem de Deus.`}
if (nomepessoal == 'Alexander' && nomepessoal == 'Batatão' && idadepessoal == 28 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `É dentro ou fora, Batatão?`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Já tá véio, meeeeeeeeeu!`
    document.getElementById("saudações2").innerText = `É o homem mais polêmico do mundo todo.`}
if (nomepessoal == 'Mario' && idadepessoal == 25 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Olhe! é o Super Mario, do jogo de plataforma Super Mario Bros!`
    document.getElementById("Idade").innerText = `Quando que você vai salvar a princesa?`
    document.getElementById("saudações2").innerText = `WAAAAHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!`}
if (nomepessoal == 'Giovanna' && idadepessoal == 14 && genero == 'Feminino') {
    document.getElementById("saudações").innerText = `UMA LÉSBICA! CADÊ O NOISE? OU UM DEMONIO QUALQUER PRA ME SALVAR DESSA LÉSBICA!`
    document.getElementById("Idade").innerText = `${idadepessoal} anos? Que tchola...`
    document.getElementById("saudações2").innerText = `* Jogo o The Noise na sua direção, fazendo-o explodir, por que o Noise é alérgico a lésbicas. *`}
if (nomepessoal == 'Baldi Baldimore' && idadepessoal == 29 && genero == 'Masculino') {
    document.getElementById("saudações").innerText = `Oh, hi! Welcome to my website.`
    document.getElementById("Idade").innerText = `Now is time for everybody's favorite subject: MATH!`
    document.getElementById("saudações2").innerText = `Let's play hide and seek!`}