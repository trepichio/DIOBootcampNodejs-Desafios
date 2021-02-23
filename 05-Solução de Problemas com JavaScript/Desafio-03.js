/*
//### Desafio - Melhor amigo do Pablo
Todo final de ano ocorre uma festa na escola. As inscrições para participar da festa são abertas no início de julho.
No momento da inscrição, o aluno pode escolher se quer ser "O Amigo do Pablo" na festa ou não. O mais lógico seria escolher a opção Sim,
afinal, é um privilégio ser O Amigo do Pablo, já que ele é a pessoa mais descolada da escola. Porém, há indivíduos que definitivamente não
pretendem ser O Amigo do Pablo, e por motivos desconhecidos.
Somente um será o escolhido. Em vista disso, muitos alunos que escolheram a opção Sim realizaram a inscrição diversas vezes para aumentar a
própria probabilidade de ser O Amigo do Pablo. A diretora da escola pediu que você desenvolva um programa que organize as inscrições do site,
pois está havendo um spam de inscrições. O critério para ser o escolhido é a quantidade de letras do primeiro nome, e em caso de empate, vence
aquele que realizou primeiro a inscrição. A organização final dos inscritos deverá seguir a ordem de escolha (Sim ou Não), mas respeitando a
ordem alfabética.
OBS.: Ninguém que escolheu a opção Não realizou a inscrição mais de uma vez.

//### Entrada
A entrada contém somente um caso de teste. Cada linha é composta pelo primeiro nome do participante (sem espaços), seguido da opção SIM
(caso o usuário queira ser O Amigo do Pablo) ou NAO (caso não queira). A entrada termina assim que o usuário digita "FIM" (sem as aspas).

//### Saída
Seu programa deverá imprimir os inscritos pela ordem de escolha e por ordem alfabética, seguido do nome do vencedor. Imprima uma linha em
branco entre a lista de inscritos e o nome do vencedor.

|---------------------------------------|
| Exemplo de Entrada | Exemplo de Saída |
|--------------------|------------------|
| Joao NAO           | Abhay            |
| Carlos SIM         | Aline            |
| Abner NAO          | Andres           |
| Samuel SIM         | Carlos           |
| Ricardo NAO        | Samuel           |
| Abhay SIM          | Abner            |
| Samuel SIM         | Joao             |
| Andres SIM         | Ricardo          |
| Roberto NAO        | Roberto          |
| Carlos SIM         |                  |
| Samuel SIM         | Amigo do Habay:  |
| Samuel SIM         | Carlos           |
| Abhay SIM          |                  |
| Aline SIM          |                  |
| Andres SIM         |                  |
| FIM                |                  |
|---------------------------------------|
*/

//Código do desafio:
/**
 * AVISO:
 * Os testes da plataforma da DIO ESTÃO EQUIVOCADOS, pois há discrepâncias entre o enunciado, a entrada provida e saída esperada. [UPDATE 23/02/21: a DIO corrigiu o Bug]
 * Para utilizar este código na plataforma da DIO, foi necessário uma pequena adição (que fiz questão de apontá-la com um comentário no meu fonte) de acordo com a explicação abaixo. [UPDATE 23/02/21: não é mais necessária essa adição]
 * 1- Consta o nome 'Abhay' na entrada fornecida por eles, PORÉM NÃO consta na saída esperada dos testes. Portanto, é necessário remover este nome da lista antes de imprimir a saída.
 * 2- No enunciado espera-se a saída "Amigo do Pablo:", mas no exemplo está "Amigo do Habay:". No entanto, os testes realmente validam "Amigo do Pablo:". Isto apenas gera confusão!
 * 3- No exemplo não há o nome do Pablo na lista, mas há na entrada fornecida. Isso não interfere no resultado final, mas poderia caso fosse outro nome maior.
 *
 */
const inputs = [ //para uso local
  'Joao NAO',
  'Carlos SIM',
  'Abner NAO',
  'Samuel SIM',
  'Ricardo NAO',
  'Abhay SIM',
  'Samuel SIM',
  'Andres SIM',
  'Roberto NAO',
  'Carlos SIM',
  'Samuel SIM',
  'Samuel SIM',
  'Abhay SIM',
  'Aline SIM',
  'Andres SIM',
  'And res SIM',
  'FIM',
] //para uso local
let n = 0 //para uso local

const validInput = /^([A-Za-z]+)\s(SIM|NAO)$/g
let students = new Map()
let name = '', answer = '', input = '', maxLength = 0

while (true) {
  // input = gets() //para uso na DIO
  input = inputs[n++] //para uso local

  if (input === 'FIM') break;
  if (input.match(validInput) === null) break;

  [name, answer] = input.split(' ')

  if (answer === 'SIM') {
    maxLength = name.length > maxLength ? name.length : maxLength
  }

  students.set(name, { name, answer, length: name.length })

}

const [longestName] = [...students.entries()]
  .filter(student => student[1].answer === 'SIM' && student[1].length === maxLength)[0]

const friends = [...students.entries()]
  .filter(std => /** [UPDATE 23/02/21]: havia um bug na DIO onde era necessário filtrar o "Abhay", não mais */ /** std[1].name !== 'Abhay' && */ std[1].answer === 'SIM')
  .sort()

const notFriends = [...students.entries()]
  .filter(std => std[1].answer === 'NAO').sort()

friends.forEach(std => console.log(std[1].name))
notFriends.forEach(std => console.log(std[1].name))

console.log('\nAmigo do Pablo:');
console.log(`${longestName}`);