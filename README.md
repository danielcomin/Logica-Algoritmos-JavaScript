# O que aprendemos?! 

## Sintaxe e boas práticas
 
+ Ponto e vírgula é facultativo
 ```
    const myConst = "constante";
 ```

+ escrita em camelCase
 ```
    const myConst2 = "constante2"
 ```
+ Procurar escrever código em inglês
```
    function deSomething(myArgument) {

    }
```
## Variáveis

+ const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
```
    const a = "a"
```
+ var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.
```
    var x = "x";
```
+ let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
```
    let y = "y"
```
## Tipos de dados

+ String
+ Number
+ Boolean
+ undefined
+ null

## Estrutura de dados

+ Array:
```
    const myArray = [1, 2, "a", "b", true];
```
+ Object:
```
    const myObject = {property: "value" };
```
## Funções

+ Criação e tipos de funções:
    - named:
        ```
            function myFunction() {}
        ```
    - anonymous: 
        ```
            const myFunction() = function() {}
        ```
    - Arrow:
        ```
            const myFunction = () => {}
        ```
    - arguments & return:
        ```
            function sum(a, b) {
                return a + b
            }

            const sum = (a,b) => sum (a,b)
        ```
## Condicionais

+ if, else if, else:
```
    function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
            } else {
        result = 'NOT positive';
        }
            return result;
    }

```
+ switch: 
```
    const expr = 'Papayas';
    switch (expr) {
        case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
         console.log(`Sorry, we are out of ${expr}.`);
        }
```

## Estrutura de repetição

+ while:
``` 
    let n = 0;
    while (n < 3) {
        n++;
    }

    console.log(n);
```
+ for:
```
    let str = '';

    for (let i = 0; i < 9; i++) {
        str = str + i;
    }

    console.log(str);
```
+ for... of:
```
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
        console.log(element);
    }
```

## Operadores matematicos:

+ Operadores de atribuição:

    | NOME | OPERADOR ENCURTADO | SIGNIFICADO |
    |------|--------------------|-------------|
    | Atribuição | x = y |	x = y  |
    | Atribuição de adição |	x += y |	x = x + y |
    | Atribuição de subtração |	x -= y |	x = x - y
    | Atribuição de multiplicação |	x *= y |	x = x * y
    | Atribuição de divisão |	x /= y |	x = x / y |
    | Atribuição de resto |	x %= y |	x = x % y |
    | Atribuição exponencial |	x **= y |	x = x ** y |
    | Atribuição bit-a-bit por deslocamento á direita |	x >>= y |	x = x >> y |
    | Atribuição bit-a-bit por deslocamento á esquerda |	x <<= y |	x = x << y |
    | Atribuiçãode bit-a-bit deslocamento á direita não assinado |	x >>>= y |	x =  x >>> y |
    | Atribuição AND bit-a-bit |	x &= y |	x = x & y |
    | Atribuição XOR bit-a-bit |	x ^= y |	x = x ^ y |
    | Atribuição OR bit-a-bit |	x |= y |	x = x | y |

+ Operadores de comparação:

    | OPERADORES | DESCRIÇÃO | EXEMPLOS QUE RETORNAM VERDADEIRO |
    |------------|-----------|----------------------------------|
    | Igual (==) | Retorna verdadeiro caso os operandos sejam iguais. |	3 == var1 "3" == var1 3 == '3' |
    | Não igual (!=) | Retorna verdadeiro caso os operandos não sejam iguais. |	var1 != 4 var2 != "3" |
    | Estritamente igual (===) | Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. |	3 === var1 |
    | Estritamente não igual (!==) | Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo. |	var1 !== "3" 3 !== '3' |
    | Maior que (>) | Retorna verdadeiro caso o operando da esquerda seja maior que o da direita. |	var2 > var1 "12" > 2 |
    | Maior que ou igual (>=) | Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita. |	var2 >= var1 var1 >= 3 |
    | Menor que (<) | Retorna verdadeiro caso o operando da esquerda seja menor que o da direita. |	var1 < var2 "12" < "2" |
    | Menor que ou igual (<=) | Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita. |	var1 <= var2 var2 <= 5 |
