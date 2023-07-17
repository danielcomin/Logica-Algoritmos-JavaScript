/*
    Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.
*/


function calculate(numberOne, expression, numberTwo) {
    let result

    switch (expression) {
        case '+':
            result = numberOne + numberTwo;
            alert(`O resultado é ${result}`);
            break;
        case '-':
            result = numberOne - numberTwo;
            alert(`O resultado é ${result}`);
            break;
        case '*':
            result = numberOne * numberTwo;
            alert(`O resultao é ${result}`);
            break;
        case '/':
            result = numberOne / numberTwo;
            alert(`O resultado é ${result}`);
            break;
        case '%':
            result = numberOne % numberTwo;
            alert(`O resultado é ${result}`);
            break;
        default:
            result = 'Operação inexistente'
            break;
    }

    return result
}

alert('VAMOS REALIZAR UMA OPERAÇÃO MATEMÁTICA!');
let numberOne = prompt('Insira um número:');
let numberTwo = prompt('Insira um segundo número:');

let expression = prompt('Insira a expressão matemática ( subtração | * | - divisão | / | - soma | + | - subtração | - | - resto da divisão | % | ):');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

calculate(numberOne, expression, numberTwo)