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

export function count(a, op, b) {
  let left = a;
  let operator = op;
  let right = b;
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
  console.log(`from operate() result is ${result}`);
  return result;
}


export function parseDisplayValue(displayValue) {
  let leftNumber = [];
  let operator = [];
  let rightNumber = [];

  let cur;

  let rawArray = displayValue.split('');

  for (let i = 0; i < rawArray.length; i++) {
    cur = rawArray[i];
    if (i === 0 && checks.isAllowedFirstValue(cur)) {
      leftNumber.push(rawArray[i]);
      // console.log(rawArray[i]);
      // console.log(`first element -->> leftNumber ${leftNumber}`);
      // console.log(`first element -->> operator ${operator}`);
      // console.log(`first element -->> rightNumber ${rightNumber}`);
      continue;
    } 

    if (rightNumber.length === 0 && operator.length == 0 && checks.isNumberOrDot(cur)) {
      leftNumber.push(rawArray[i]);
      // console.log(rawArray[i]);
      // console.log(`leftNumber ${leftNumber}`);
      // console.log(`operator ${operator}`);
      // console.log(`rightNumber ${rightNumber}`);
      continue;
    }

    if (leftNumber.length !== 0 && checks.isOperator(cur)) {
      operator.push(rawArray[i]);
      // console.log(rawArray[i]);
      // console.log(`leftNumber ${leftNumber}`);
      // console.log(`operator ${operator}`);
      // console.log(`rightNumber ${rightNumber}`);
      continue;
    }

    if (operator.length !== 0 && checks.isNumberOrDot(cur)) {
      rightNumber.push(rawArray[i]);
      // console.log(rawArray[i]);
      // console.log(`leftNumber ${leftNumber}`);
      // console.log(`operator ${operator}`);
      // console.log(`rightNumber ${rightNumber}`);
      continue;
    }
  }

  console.log(`inside parseDisplayValue: left ${leftNumber} right: ${rightNumber} operator: ${operator}`);
  return {
    left: leftNumber,
    right: rightNumber,
    operator: operator,
  };
}

export function prepareForCount(values) {
  if (values.left === undefined || values.left.length === 0 || values.right === undefined || values.right.length === 0 || values.operator === undefined || values.operator.length === 0) return 'error';

  let left = values.left;
  console.log(left);
  let right = values.right;
  console.log(right);
  let operator = values.operator.join("");
  console.log(operator);
  
  if (checks.hasInvalidExtraDot(left) || checks.hasInvalidExtraDot(right) || !checks.isValidOperator(operator)) return 'error';

  if (operator.length == 2) {
    operator = defineOperator(operator);
  }

  if (operator === "*-") {
    operator = "*";
    right.unshift("-");
  }

  left = left.join("");
  right = right.join("");
  
  return { left, right, operator };
}

function defineOperator(operator) {
  let operatorResult;

  switch (operator) {
    case "++": operatorResult = "+";
      break;
    case "+-": operatorResult = "-";
      break;
    case "--": operatorResult = "-"
      break;
    case " - +": operatorResult = "-";
      break;
    case "**": operatorResult = "**";
      break;
    case "*+": operatorResult = "*";
      break;
    case "*": operatorResult = "*-";
      break;
    case "/+": operatorResult = "/";
      break;
    case "/-": operatorResult = "/";
      break;
  }
  return operatorResult;
}

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }
