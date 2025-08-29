import { add, divide, multiply, subtract } from "./modules/basic_functions.js";

function operate(a, op, b) {
  let firstValue = a;
  let operator = op;
  let secondValue = b;
  let result;


  switch (operator) {
    case "+": result = add(firstValue, secondValue);
      break;
    case "-": result = subtract(firstValue, secondValue);
      break;
    case "*": result = multiply(firstValue, secondValue);
      break;
    case "/": result = divide(firstValue, secondValue);
      break;
  }

  return result;
}



// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }
