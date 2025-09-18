import * as check from "./check.js"
import * as parse from './parse.js'
import * as calculate from './calculate.js'

export function manageValue(display, input) {
  let valueToProcess = display + input
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

    parsedArrayedValues = parse.parseDisplayValue(valueToProcess)
    left = parsedArrayedValues.left
    operator = parsedArrayedValues.operator
    right = parsedArrayedValues.right
    extraOperator = parsedArrayedValues.extraOperator

    if (check.isToReturnDisplayValue(left, operator, right)) return { result: valueToProcess }

    if (check.isArrayNonEmpty(left) && check.isArrayNonEmpty(operator) && check.isArrayNonEmpty(right)) {
      preparedForCalcValues = parse.prepareValuesForCalculate(parsedArrayedValues)

      left = preparedForCalcValues.left
      operator = preparedForCalcValues.operator
      right = preparedForCalcValues.right
      extraOperator = preparedForCalcValues.extraOperator

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
  }

  if (check.isNumberOrDot(input)) return {result: valueToProcess}
}
  
export function removeLastValue(value) {
  return value.slice(0, -1)
}

