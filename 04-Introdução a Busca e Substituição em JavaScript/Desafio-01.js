/*
//### Desafio - Ordenação de palavras por tamanho
Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho.
Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordenar por ordem alfabética.

//### Entrada
A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste.
Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive.
Os caracteres poderão ser espaços, letras, ou números.

//### Saída
A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.
Um espaço em branco deve ser impresso entre duas palavras.
|-------------------------------------------------------------------|
|        Exemplo de Entrada       |         Exemplo de Saída        |
|---------------------------------|---------------------------------|
| 2                               |                                 |
| One three four mond at midnight | midnight three four mond One at |
| one three five                  | three five one                  |
|-------------------------------------------------------------------|

*/

//Código do desafio:
const N = 2; //para uso local
// const N  = parseInt(gets()); //para uso na plataforma DIO

const input = ['One three four mond at midnight', 'one three five eggse'] //para uso local

for (let i = 0; i < N; i++) {

  // const input = gets(); //para uso na plataforma DIO
  // const words = input.split(' ', 50); // para uso na DIO
  const words = input[i].split(' ', 50); // para uso local

  // const filteredWords = words.filter(w => w.length <= 50)
  const filteredWords = words.filter(w => new RegExp(/^[A-Za-z0-9 ]{1,50}$/).test(w));

  const sortedWords = filteredWords.sort((a, b) => {
    if (a.length > b.length) return -1
    if (a.length < b.length) return 1
    if (b.length === a.length) {
      // console.log(a, b); //para uso local
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    }
    else return b.length - a.length
  })

  console.log(sortedWords.join(' '))
}