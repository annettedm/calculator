import * as checks from './checks.js';

export function parseDisplayValue(displayValue) {
  let left = [];
  let operator = [];
  let right = [];
  let extraOperator = [];
  let cur;

  let rawArray = displayValue.split('');

  for (let i = 0; i < rawArray.length; i++) {
    cur = rawArray[i];
    // left for the first value including "-"
    if (i === 0 && checks.isAllowedFirstValue(cur)) {
      left.push(cur);
      continue;
    } 
    
    // left not the first
    if (right.length === 0 && operator.length == 0 && checks.isNumberOrDot(cur)) {
      left.push(cur);
      continue;
    }

    // operator
    if (left.length !== 0 && checks.isOperator(cur) && right.length === 0) {
      operator.push(cur);
      continue;
    }
    
    // right
    if (operator.length !== 0 && checks.isNumberOrDot(cur)) {
      right.push(cur);
      continue;
    }

    // extra operator -> when -+/* after right to trigger calculation
    if (operator.length !== 0 && right.length !== 0 && checks.isOperator(cur)) {
      extraOperator.push(cur);
      continue;
    }
  }
  return { left, right, operator, extraOperator };
}

export function prepareValuesForCount(values) {
  let left = prepareNumeric(values.left);
  let right = prepareNumeric(values.right);
  let operator = prepareOperator(values.operator);
  let extraOperator = prepareOperator(values.extraOperator);
    
  if (operator === "*-") {
    operator = "*";
    right.unshift("-");

  } else if (operator === "--" && right) {
    operator = "-";
    right = `-${right}`
  }  

  return { left, right, operator, extraOperator };
}

function prepareOperator(operatorValue) {
  if (checks.isArrayEmptyOrUndefined(operatorValue)) return undefined;

  let operator = operatorValue.join("");

  if (!operator || !checks.isValidOperator(operator)) return undefined;

  if (operator.length == 2) {
    operator = defineOperator(operator);
  }

  return operator;
}

function defineOperator(operator) {
  let operatorResult;

  switch (operator) {
    case "++": operatorResult = "+";
      break;
    case "+-": operatorResult = "-";
      break;
    case "--": operatorResult = "--"
      break;
    case "-+": operatorResult = "-";
      break;
    case "**": operatorResult = "**";
      break;
    case "*+": operatorResult = "*";
      break;
    case "*-": operatorResult = "*-";
      break;
    case "/+": operatorResult = "/";
      break;
    case "/-": operatorResult = "/";
      break;
  }
  return operatorResult;
}

function prepareNumeric(numeric) {
  if (checks.isArrayEmptyOrUndefined(numeric)) return undefined;

  if (checks.hasInvalidExtraDot(numeric)) return undefined;

  return numeric.join('');
}
