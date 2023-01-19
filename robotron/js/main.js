const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -4,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 43,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]');

  if (operacao === '-') {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  console.log(pecas[peca]);

  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
  });
}

var indice = 1;
var cores = [
  'img/robotron-azul.png',
  'img/robotron-amarelo.png',
  'img/robotron-branco.png',
  'img/robotron-rosa.png',
  'img/robotron-vermelho.png',
  'img/robotron-preto.png',
];

function mudaCor() {
  if (indice == cores.length) {
    indice = 0;
  }
  document.getElementById('robotron').src = cores[indice];
  indice++;
}
/*
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

subtrair.addEventListener('click', (evento) => {
  braco.value = parseInt(braco.value) - 1;
});

somar.addEventListener('click', (evento) => {
  braco.value = parseInt(braco.value) + 1;
});


const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', () => {
  console.log('Cliquei no robô');
});

function dizOi(nome) {
  console.log('Oi ' + nome);
  console.log('Bem vindo ao Robotron 2000');
}

dizOi('Pedro');
*/
