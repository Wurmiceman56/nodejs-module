// index.js
const sum = require('./alter');
const chalk = require('chalk');

function coloredSum(x, y) {
  const result = x + y;
  console.log(chalk.green(`Die Summe von Zahlen ${x} und ${y} ist ${result}.`));
}

coloredSum(3, 4);
coloredSum(5, 6);
coloredSum(10, 20);
