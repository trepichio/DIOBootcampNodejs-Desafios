/*
//### Desafio - Contagem repetida de números
Neste desafio sua tarefa será ler vários números e em seguida dizer quantas vezes cada número aparece, ou seja,
deve-se escrever cada um dos valores distintos que aparecem na entrada por ordem crescente de valor.

//### Entrada
A primeira linha de entrada contem um único inteiro N, que indica a quantidade de valores que serão lidos para X (1 ≤ N ≤ 2000) logo em seguida.
Com certeza cada número não aparecerá mais do que 20 vezes na entrada de dados.

//### Saída
Imprima a saída de acordo com o exemplo fornecido abaixo, indicando quantas vezes cada um deles aparece na entrada por ordem crescente de valor.
|--------------------------------------------|
| Exemplo de Entrada |    Exemplo de Saída   |
|--------------------|-----------------------|
| 7                  | 4 aparece 1 vez(es)   |
| 8                  | 8 aparece 2 vez(es)   |
| 10                 | 10 aparece 3 vez(es)  |
| 8                  | 260 aparece 1 vez(es) |
| 260                |                       |
| 4                  |                       |
| 10                 |                       |
| 10                 |                       |
|--------------------------------------------|
*/

//Código do desafio:
/**
 * AVISO!
 * Na saída proposta da DIO é exigido que a expressão 'vez(es)' seja impressa não importa a quantidade de repetições.
 * Nesta solução, é implementado a saída tanto em singular quanto no plural.
 */
const inputs = [ //para uso local
  '7',
  '8',
  '10',
  '8',
  '260',
  '4',
  '10',
  '10',
] //para uso local


// const nCases = parseInt(gets()) //para uso na DIO
const nCases = parseInt(inputs[0]) //para uso local
let input = 0
let numbers = []

for (let i = 1; i <= nCases; i++) {
  // input = parseInt(gets()) //para uso na DIO
  input = parseInt(inputs[i]) //para uso local

  if ((input < 1 || input > 2000)) {
    //skip invalid entry
    continue;
  }

  numbers = [...numbers, input];
}

const distinctNumbers = Array.from(new Set(numbers))
  .sort((a, b) => a - b)
  .map(v => ([v, 0]))

let countNumberMap = new Map(distinctNumbers)

numbers.forEach(n => {
  countNumberMap.set(n, countNumberMap.get(n) + 1)
})

for (const [number, times] of countNumberMap) {
  console.log(`${number} aparece ${times} vez${times > 1 ? 'es' : ''}`) // saída com singular ou plural
  // console.log(`${number} aparece ${times} vez(es)`) //saída exigida na DIO
}