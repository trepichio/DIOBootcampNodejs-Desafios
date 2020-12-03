/*
//### Desafios - Exibindo Números Pares
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

//### Entrada
Você receberá 1 valor inteiro N, onde N > 0.

//### Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha.
|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| 6	                 | 2                |
|                    | 4                |
|                    | 6                |
|---------------------------------------|
*/

//Código do desafio:
// let n = parseInt(gets()); //para uso na DIO
let n = parseInt('6'); //para uso local
let contador = 1;

while (contador <= n) {
  contador % 2 === 0 && console.log(contador);
  contador++;
}