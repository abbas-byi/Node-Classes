import chalk from "chalk";
import fs from "fs";

const add = (a, b, c, d) => {
  const add = [
    [a + b + c + d],
    [a + b],
    [b + c],
    [c + d],
    [[a + b] + c],
    [[[a + b] + c] + d],
  ];
  if (fs.existsSync("../calculation-program/txt-files/add.txt")) {
    fs.appendFileSync("../calculation-program/txt-files/add.txt", `${add.toString()} \n`);
  } else {
    fs.writeFileSync("../calculation-program/txt-files/add.txt", `${add.toString()} \n`);
  }
  //   fs.writeFileSync("add.txt", add.toString());
  console.log(chalk.red.bold(add));
  return add;
};
const subtract = (a, b, c, d) => {
  const subtract = [
    [a - b - c - d],
    [a - b],
    [b - c],
    [c - d],
    [[a - b] - c],
    [[[a - b] - c] - d],
  ];
  if (fs.existsSync("../calculation-program/txt-files/substract.txt")) {
    fs.appendFileSync("../calculation-program/txt-files/substract.txt", `${subtract.toString()} \n`);
  } else {
    fs.writeFileSync("../calculation-program/txt-files/substract.txt", `${subtract.toString()} \n`);
  }
  console.log(chalk.blue.inverse.bold(subtract));
  return subtract;
};
const multiplication = (a, b, c, d) => {
  const multiplication = [
    [a * b * c * d],
    [a * b],
    [b * c],
    [c * d],
    [[a * b] * c],
    [[[a * b] * c] * d],
  ];
  if (fs.existsSync("../calculation-program/txt-files/multiplication.txt")) {
    fs.appendFileSync("../calculation-program/txt-files/multiplication.txt", `${multiplication.toString()} \n`);
  } else {
    fs.writeFileSync("../calculation-program/txt-files/multiplication.txt", `${multiplication.toString()} \n`);
  }
  console.log(chalk.green.bold(multiplication));
  return multiplication;
};
const division = (a, b, c, d) => {
  const division = [
    [a / b / c / d],
    [a / b],
    [b / c],
    [c / d],
    [[a / b] / c],
    [[[a / b] / c] / d],
  ];
  if (fs.existsSync("../calculation-program/txt-files/division.txt")) {
    fs.appendFileSync("../calculation-program/txt-files/division.txt", `${division.toString()} \n`);
  } else {
    fs.writeFileSync("../calculation-program/txt-files/division.txt", `${division.toString()} \n`);
  }

  console.log(chalk.yellow.inverse.bold(division));
  return division;
};
const resultOfAllFunction = (a, b, c, d) => {
  return {
    add: add(a, b, c, d),
    subtract: subtract(a, b, c, d),
    multiplication: multiplication(a, b, c, d),
    division: division(a, b, c, d),
  };
};
export default resultOfAllFunction;
