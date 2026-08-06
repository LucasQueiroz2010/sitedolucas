var nomecompleto = 'Lucas Oliveira de Queiroz';
var nome = 'Lucas';
var teste = 'Teste';

const perfilWidget = document.getElementById('perfil-widget');
if (perfilWidget) {
    perfilWidget.style.display = 'none';
}

const saudaçõesEl = document.getElementById('saudações');
const idadeEl = document.getElementById('Idade');
const saudações2El = document.getElementById('saudações2');

if (saudaçõesEl) {
    saudaçõesEl.innerText = 'Seja bem-vindo ao Site do Lucas!';
}
if (idadeEl) {
    idadeEl.innerText = 'Olá! Este site continua funcionando sem login.';
}
if (saudações2El) {
    saudações2El.innerText = 'Fique à vontade e aproveite as páginas!';
}

// FUNÇÕES COMPARTILHADAS.
var imagemOriginal1 = true;
function mudarestrela1(elemento) {
    if (imagemOriginal1) {
        elemento.style.backgroundImage = "url('imagens/scout.gif')";
        imagemOriginal1 = false;
    } else {
        elemento.style.backgroundImage = "url('imagens/estrela_basica_marrom.png')";
        imagemOriginal1 = true;
    }
}

var imagemOriginal2 = true;
function mudarestrela2(elemento) {
    if (imagemOriginal2) {
        elemento.style.backgroundImage = "url('imagens/estrela_mario.gif')";
        imagemOriginal2 = false;
    } else {
        elemento.style.backgroundImage = "url('imagens/estrela_basica.png')";
        imagemOriginal2 = true;
    }
}

var imagemOriginal3 = true;
function mudarestrela3(elemento) {
    if (imagemOriginal3) {
        elemento.style.backgroundImage = "url('imagens/Isaac.gif')";
        imagemOriginal3 = false;
    } else {
        window.location.href = "TBOU/index.html";
    }
}

const range = document.getElementById('myRange');
const rangeV = document.getElementById('rangeValue');
function updateRange() {
    if (range && rangeV) {
        const newValue = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        rangeV.innerHTML = newValue;
        const newVal = Number(((newValue - min) * 100) / (max - min));
        rangeV.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
}
if (range) {
    range.addEventListener('input', updateRange);
    document.addEventListener('DOMContentLoaded', updateRange);
}

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// LÓGICA DE SALVAR COMENTÁRIOS/FEEDBACK
const botaoEnviar = document.getElementById('transicaolink');
if (botaoEnviar) {
    botaoEnviar.addEventListener('click', function(e) {
        e.preventDefault();

        const nota = document.getElementById('myRange').value;
        const texto = document.getElementById('texto-comentario').value;

        if (texto.trim() === '') {
            alert('Por favor, escreva um comentário antes de enviar!');
            return;
        }

        const novoFeedback = {
            usuario: 'Visitante',
            nota: nota,
            comentario: texto,
            data: new Date().toLocaleString('pt-BR')
        };

        let feedbacksDB = JSON.parse(localStorage.getItem('feedbacksDB')) || [];
        feedbacksDB.push(novoFeedback);
        localStorage.setItem('feedbacksDB', JSON.stringify(feedbacksDB));

        alert('Obrigado pelo seu feedback!');
        document.getElementById('texto-comentario').value = '';
    });
}