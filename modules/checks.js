const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const operators = ["+", "-", "*", "/"];

const otherOperators = ["clear", ".", "delete", "="];


// export function isAllowedValue(val) {
//   return (isNumberOrDot(val)|| operators.includes(val) || otherOperators.includes(val));
// }

export function isAllowedFirstValue(val) {
  return isNumberOrDot(val) || val === "-";
}

export function isNumberOrOperatorOrDot(val) {
  return isNumberOrDot(val) || isAnyOperator(val);
}

export function isNumberOrOperatorOrDotForDisplay(val) {
  return isNumberOrDot(val) || isOperator(val);
}

export function isOperator(val) {
  return operators.includes(val)
}

export function isEqual(val) {
  return val === "=";
}

export function isEnter(val) {
  return val === 'Enter';
}

export function isAnyOperator(val) {
  return isOperator(val) || isEnter(val) || isEqual(val);
}

export function isNumberOrDot(val) {
  return (numbers.includes(val) || val === ".");
}

export function hasInvalidExtraDot(arr) {
  let filtered = arr.filter((element) => element === ".");  

  return (filtered.length >= 2 || filtered === undefined);
}

export function isValidOperator(operator) {
  return (operator.length == 1 || (operator.length == 2 && includesAllowedOperators(operator)));
}

export function isArrayEmptyOrUndefined(arr) {
  return (arr === undefined || arr.length === 0);
}

function includesAllowedOperators(operator) {
  let validOperators = ["++", "+-", "--", "-+", "**", "*+", "*-", "/+", "/-"];

  return validOperators.includes(operator);
}
