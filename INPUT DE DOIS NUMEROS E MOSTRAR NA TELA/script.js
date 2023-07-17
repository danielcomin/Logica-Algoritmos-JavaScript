/*
    Solicite dois números, faça a soma deles e apresente o resultado  final ao usuario
*/

alert('Iremos fazer a soma de dois números!');

let numberOne = prompt('Digite o primeiro número:');
let numberTwo = prompt('Digite o segundo número:');
let numberDivision = prompt('O resultado da soma vai ser dividir por:');

let resultSoma = Number(numberOne) + Number(numberTwo);
let resultEnd = Number(resultSoma) / Number(numberDivision);

alert(`A soma dos dois números é ||${resultSoma}|| que dividido por ||${numberDivision}|| é || ${resultEnd} ||`);