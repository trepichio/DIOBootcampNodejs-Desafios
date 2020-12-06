const main = require("./Desafio-07.js");
const input01 = require('./Desafio-07.test.input01.js');
const input02 = require('./Desafio-07.test.input02.js');
const input03 = require('./Desafio-07.test.input03.js');
const input04 = require('./Desafio-07.test.input04.js');
const input05 = require('./Desafio-07.test.input05.js');
const input06 = require('./Desafio-07.test.input06.js');
const input07 = require('./Desafio-07.test.input07.js');
const input08 = require('./Desafio-07.test.input08.js');
const input09 = require('./Desafio-07.test.input09.js');
const input10 = require('./Desafio-07.test.input10.js');

const inputs = [
  input01,
  input02,
  input03,
  input04,
  input05,
  input06,
  input07,
  input08,
  input09,
  input10,
]

let result;

for (let i = 0; i < inputs.length; i++) {
  result = main(inputs[i][0]);

  if (result === inputs[i][1]) console.log(`test ${i} passed`);
  else console.log(`test ${i} failed with ${result} but it should be equal to ${inputs[i][1]}`);
}
