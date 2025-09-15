import * as checks from "./checks.js";

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

export function count(left, operator, right) {
  let result;

  switch (operator) {
    case "+": result = add(left, right);
      break;
    case "-": result = subtract(left, right);
      break;
    case "*": result = multiply(left, right);
      break;
    case "/": result = divide(left, right);
      break;
    case "**": result = power(left, right);
      break;
  }
  // console.log(`from operate() result is ${result}`);
  return result;
}




// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }
