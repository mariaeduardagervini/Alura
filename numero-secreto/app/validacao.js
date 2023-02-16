function verificaSeOChutePossuiUmValorValido() {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    if (chute.toUpperCase() === 'GAME OVER') {
      document.body.innerHTML = `
      <h2>Game Over !!!</h2>
      <h3>Pressione o botão de jogar novamente</h3>
      <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`;
      document.body.style.backgroundColor = 'red';
    } else {
      elementoChute.innerHTML = `<div>Valor inválido</div>`;
    }
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML = `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
  } else {
    ` <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
});
