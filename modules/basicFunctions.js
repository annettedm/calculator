
function add(a, b) {
  return Number(a) + Number(b)
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
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
  return cutDecimals(result);
}


  function cutDecimals(number){
    return number.toLocaleString('fullwide', {maximumFractionDigits:6})
  }


// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }
