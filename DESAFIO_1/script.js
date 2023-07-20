/*
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois  números** e, a partir daí, calcular:

  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;
  - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [ ]  Verifique se os dois números inseridos são iguais ~~(ou  diferentes)~~.
*/


let num1 = Number(prompt(`Digite o primerio número:`));
let num2 = Number(prompt(`Digite o segundo número:`));

//soma
const sum = num1 + num2;

//subtração
const subtraction = num1 - num2;

//multiplicação
const multiplication = num1 * num2;

//divisão
const division = (num1 / num2).toFixed(2);

//resto da divisão
const rest =  num1 % num2;

alert(`A soma de ${num1} + ${num2} é igual á ${sum}.`);
alert(`A subtração de ${num1} - ${num2} é igual á ${subtraction}.`);
alert(`A multiplicação de ${num1} * ${num2} é igual á ${multiplication}.`);
alert(`A divisão de ${num1} / ${num2} é igual á ${division}.`);
alert(`O resto da divisão do ${num1} / ${num2} é igual á ${rest}.`);

if (sum % 2 === 0) {
  alert(`${num1}+${num2}=${sum}. Portanto, a soma é PAR!`);
} else {
  alert(`${num1}+${num2}=${sum}. Portanto, a soma é IMPAR!`);
}

if (rest === 0) {
  alert(`Os dois números inseridos são iguais!`);
} else {
  alert(`Os dois números inseridos são diferentes!`);
}