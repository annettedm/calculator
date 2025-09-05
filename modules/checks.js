const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const operators = ["+", "-", "*", "/"];

const otherOperators = ["clear", ".", "delete", "="];


export function isAllowedValue(val) {
  return (isNumberOrDot(val)|| operators.includes(val) || otherOperators.includes(val));
}

export function isAllowedFirstValue(val) {
  return isNumberOrDot(val) || val === "-";
}

export function isNumberOrOperatorOrDot(val) {
  return isNumberOrDot(val) || operators.includes(val);
}

export function isOperator(val) {
  if (operators.includes(val)) return true;
}

export function isEqual(val) {
  return val === "=";
}

export function isNumberOrDot(val) {
  return (numbers.includes(val) || val === ".");
}

export function hasInvalidExtraDot(arr) {
  console.log(`inside hasInvalidExtraDot arr: ${arr}`)
  let filtered = arr.filter((element) => element === ".");
  console.log(`inside hasInvalidExtraDot filtered: ${filtered}`)
  

  return (filtered.length >= 2 || filtered === undefined);
}

export function isValidOperator(operator) {

  return (operator.length == 1 || (operator.length == 2 && includesAllowedOperators(operator)));

}

function includesAllowedOperators(operator) {
  let validOperators = ["++", "+-", "--", "-+", "**", "*+", "*-", "/+", "/-"];

  return validOperators.includes(operator);
}
