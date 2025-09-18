import * as check from "./check.js"
import * as parse from './parse.js'
import * as calculate from './calculate.js'

export function manageValue(display, input) {
  let valueToProcess = removeEnter(display)

  if (!check.isEnter(input) && !check.isEqual(input)) {
    valueToProcess = valueToProcess + input
  }

  let left
  let right
  let operator
  let extraOperator
  let parsedArrayedValues
  let preparedForCalcValues

  if (check.isAllowedFirstValue(valueToProcess)) {
    return { result: valueToProcess }
  }
  
  if (check.isForbiddenOperatorsAtStart(valueToProcess)) {
    return {result: "Error"}
  } 

  if (check.isAnyOperator(input)) {

    if (check.isAllowedToPaste(valueToProcess)) {
      parsedArrayedValues = parse.parseDisplayValue(valueToProcess)
      preparedForCalcValues = parse.prepareValuesForCalculate(parsedArrayedValues)
      left = preparedForCalcValues.left
      operator = preparedForCalcValues.operator
      right = preparedForCalcValues.right
      extraOperator = preparedForCalcValues.extraOperator

      if (check.isToReturnDisplayValue(left, operator, right))  return { result: `${left}${operator ? operator : ""}` }


      if (check.isNonEmptyString(left) && check.isNonEmptyString(operator) && check.isNonEmptyString(right)) {

        if (left && operator && right && !extraOperator) {
          let result = calculate.calculate(left, operator, right)
          let calculated = true

          if (!Number.isFinite(Number(result))) {
            result = 'Infinity'
          }
          
          return { result, calculated }
        }

        if (left && operator && right && extraOperator) {
          let result = calculate.calculate(left, operator, right)
          result = `${result}${extraOperator}`
          return { result }
        }
        
        if (left && operator && !right) return { result: valueToProcess }

        if (left && !operator && !right) return { result: left }
      }
    } else {
       return {result: "Error"}
    }

  }

  if (check.isNumberOrDot(input)) return {result: valueToProcess}
}
  
export function removeLastValue(value) {
  return value.slice(0, -1)
}

function removeEnter(value) {
  let result 

  if (value.includes('Enter')) {
    result = value.replaceAll(/Enter/g, '')
    return result
  }

  return value
}
