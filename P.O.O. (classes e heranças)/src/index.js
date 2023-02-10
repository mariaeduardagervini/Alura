import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/Mago.js';
import { Arqueiro } from './modules/Arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';
import { Guerreiro } from './modules/Guerreiro.js';

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 8);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8);
const guerreiroJose = new Guerreiro('José', 8);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJose];

new PersonagemView(personagens).render();
