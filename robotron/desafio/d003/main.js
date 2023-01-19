const lista = document.querySelector('[data-lista]');
const botao = document.querySelector('[data-botao]');

lista.style.display = 'block';

botao.addEventListener('click', () => {
  if (lista.style.display != 'block') {
    lista.style.display = 'block';
  } else {
    lista.style.display = 'none';
  }
});
