import * as check from './check.js'

export function parseDisplayValue(displayValue) {
  let left = []
  let operator = []
  let right = []
  let extraOperator = []
  let cur;

  let rawArray = displayValue.split('')

  for (let i = 0; i < rawArray.length; i++) {
    cur = rawArray[i]
    // left for the first value including "-"
    if (i === 0 && check.isAllowedFirstValue(cur)) {
      left.push(cur)
      continue
    } 
    
    // left not the first
    if (right.length === 0 && operator.length == 0 && check.isNumberOrDot(cur)) {
      left.push(cur)
      continue
    }

    // operator
    if (left.length !== 0 && check.isOperator(cur) && right.length === 0) {
      operator.push(cur)
      continue
    }
    
    // right
    if (operator.length !== 0 && check.isNumberOrDot(cur)) {
      right.push(cur)
      continue
    }

    // extra operator -> when -+/* after right to trigger calculation
    if (operator.length !== 0 && right.length !== 0 && check.isOperator(cur)) {
      extraOperator.push(cur)
      continue
    }
  }
  console.log(`parse: left ${left} operator ${operator} right ${right} extra ${extraOperator}`)
  return { left, right, operator, extraOperator }
}

export function prepareValuesForCalculate(values) {
  let left = prepareNumeric(values.left)
  let right = prepareNumeric(values.right)
  let operator = prepareOperator(values.operator)
  let extraOperator = prepareOperator(values.extraOperator)
    
  if (operator === "*-" && right) {
    operator = "*"
    right = `-${right}`

  } else if (operator === "--" && right) {
    operator = "-"
    right = `-${right}`
  } else if (operator === "/-" && right) {
    operator = "/"
    right = `-${right}`
  }   


  console.log(`parse: left ${left} operator ${operator} right ${right} extra ${extraOperator}`)
  return { left, right, operator, extraOperator }
}

function prepareOperator(operatorValue) {
  if (check.isArrayEmptyOrUndefined(operatorValue)) return undefined

  let operator = operatorValue.join("")

  if (!operator || !check.isValidOperator(operator)) return undefined

  if (operator.length == 2) {
    operator = defineOperator(operator)
  }

  return operator
}

function prepareNumeric(numeric) {
  if (check.isArrayEmptyOrUndefined(numeric)) {
    return undefined
  } 
  
  if (check.hasInvalidExtraDot(numeric)) {
    return undefined
  } 
  
  return numeric.join('')
}

function defineOperator(operator) {
  let operatorResult

  switch (operator) {
    case "++": operatorResult = "+"
      break
    case "+-": operatorResult = "-"
      break
    case "--": operatorResult = "--"
      break
    case "-+": operatorResult = "-"
      break
    case "**": operatorResult = "**"
      break
    case "*+": operatorResult = "*"
      break
    case "*-": operatorResult = "*-"
      break
    case "/+": operatorResult = "/"
      break
    case "/-": operatorResult = "/-"
      break
  }
  return operatorResult
}