export default class Parse {
  parseDisplayValue(displayValue) {
    let left = [];
    let operator = [];
    let right = [];
    let extraOperator;
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
        extraOperator.push(cur)
      }
    }
  
    // console.log(`inside parseDisplayValue: left ${left} right: ${right} operator: ${operator}`);
    return { left, right, operator, extraOperator };
  }
  
  prepareValuesForCount(values) {
    // console.log(`left ${values.left} oper ${values.operator} right ${values.right}`)
  
    if (checks.isArrayEmptyOrUndefined(values.left) || checks.isArrayEmptyOrUndefined(values.right)) return undefined;
  
    let left = values.left;
    let right = values.right;
    let operator = prepareOperator(values.operator);
      console.log(`left ${left} oper ${operator} right ${right}`)
  
    
    if (checks.hasInvalidExtraDot(left) || checks.hasInvalidExtraDot(right) || !operator) return undefined;
    
    if (operator === "*-") {
      operator = "*";
      right.unshift("-");
      console.log(`left ${left} oper ${operator} right ${right}`)
  
    } else if (operator === "--") {
      operator = "-";
      right.unshift("-");
    }
  
    left = left.join("");
    right = right.join("");
  
    console.log(`left ${left} oper ${operator} right ${right}`)
    
    return { left, right, operator };
  }
  
  prepareOperator(operatorValue) {
    // console.log(`prepare operator before ${operatorValue}`)
    let operator = operatorValue.join("");
  
    // console.log(`prepare operator after ${operator}`)
  
    if (!operator || !checks.isValidOperator(operator)) return undefined;
  
    if (operator.length == 2) {
      operator = defineOperator(operator);
      console.log(`prepare operator from define ${operator}`)
    }
    console.log(`prepare operator return ${operator}`)
  
    return operator;
  }
  
  defineOperator(operator) {
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
    // console.log(`define operator return ${operatorResult}`)
    return operatorResult;
  }
  
}