const prompt = require ('prompt-sync')();
const calculadora = require ('./calculadora.js');

/*var nome = prompt ('Digite seu nome: ');
var idade = prompt ('Digite sua idade: ');

if (idade >= 18) {
  console.log(nome + 'é maior de idade') ;
}

else {
  console.log(nome + 'é menor de idade') ;
}
*/

var num1 = Number(prompt('Digite um número: '));
var num2 = Number(prompt('Digite outro número: '));

console.log('A soma entre' + num1 + ' e ' + num2 + ' é: ', calculadora.adicao(num1, num2)); 