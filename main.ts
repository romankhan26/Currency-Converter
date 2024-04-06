#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const currency: any = {
  USD: 1, //Base Currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  AFN: 71.5,
  ALL: 94.56,
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.bold.grey.bgYellow(
      "What currency do you want to convert from?"
    ),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "AFN", "ALL"],
  },

  {
    name: "amount",
    message: chalk.bold.grey.bgGray(
      "How much currency do you want to convert?"
    ),
    type: "number",
  },
  {
    name: "to",
    message: chalk.bold.grey.bgYellow(
      "What currency do you want to convert to?"
    ),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "AFN", "ALL"],
  },
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

// console.log(convertedAmount.toFixed(2));

switch (userAnswer.to) {
  case "USD":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}USD     **********\n\t`)
    );
    break;
  case "EUR":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}EUR     **********\n\t`)
    );
    break;
  case "GBP":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}GBP     **********\n\t`)
    );
    break;
  case "INR":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}INR     **********\n\t`)
    );
    break;
  case "PKR":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}PKR     **********\n\t`)
    );
    break;
  case "AFN":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}AFN     **********\n\t`)
    );
    break;
  case "ALL":
    console.log(
      chalk.green(`\t\n**********     ${convertedAmount.toFixed(2)}ALL     **********\n\t`)
    );
    break;
}
