/*
//### Desafio - Análise de Números
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

//### Entrada
Você receberá 5 valores inteiros.

//### Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
|----------------------------------------------|
| Exemplo de Entrada |    Exemplo de Saída     |
|--------------------|-------------------------|
| -5                 |                         |
| 0                  | 3 valor(es) par(es)     |
| -3                 | 2 valor(es) impar(es)   |
| -4                 | 1 valor(es) positivo(s) |
| 12                 | 3 valor(es) negativo(s) |
|----------------------------------------------|
*/

//Código do desafio:
const inputs = [-5, 0, 3, -4, 12] //para uso local

let numerosEntrada = new Array(5)
for (let i = 0; i < numerosEntrada.length; i++) {
  // numerosEntrada[i] = parseInt(gets()); //para uso na DIO
  numerosEntrada[i] = parseInt(inputs[i]); //para uso local
}

const numeros = {
  positivos: 0,
  negativos: 0,
  pares: 0,
  impares: 0
}

let numerosSaida = numerosEntrada.reduce((total, n) => {
  (n > 0) && (total.positivos++);
  n < 0 && (total.negativos++);
  (Math.abs(n) % 2 === 0) && (total.pares++);
  (Math.abs(n) % 2 === 1) && (total.impares++);

  return total;
}, numeros);

console.log(`
  ${numerosSaida.pares} valor(es) par(es)
  ${numerosSaida.impares} valor(es) impar(es)
  ${numerosSaida.positivos} valor(es) positivo(s)
  ${numerosSaida.negativos} valor(es) negativo(s)
`);