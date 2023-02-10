import { Arqueiro } from './Arqueiro.js';
import { Mago } from './Mago.js';
import { Personagem } from './Personagem.js';

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = 'ArqueiroMago';
  static descricao = 'Detentor de lanças e flechas mágicas!';

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  }
  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
