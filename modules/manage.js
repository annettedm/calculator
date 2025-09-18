import * as check from "./check.js"
import * as parse from './parse.js'
import * as count from './calculate.js'

export function manageValue(display, input) {
  let valueToProcess = display + input

  if (check.isAllowedFirstValue(valueToProcess)) return { result: valueToProcess }

  if (check.isForbiddenOperatorsAtStart(valueToProcess)) return {result: "Error"}

  if (check.isAnyOperator(input)) {
    let left
    let right
    let operator
    let extraOperator

    let parsedArrayedValues = parse.parseDisplayValue(valueToProcess)

    if (parsedArrayedValues.left.length !== 0 && parsedArrayedValues.operator.length !== 0
      && parsedArrayedValues.right.length !== 0) {
        
      let preparedForCalcValues = parse.prepareValuesForCount(parsedArrayedValues)

      left = preparedForCalcValues.left
      operator = preparedForCalcValues.operator
      right = preparedForCalcValues.right
      extraOperator = preparedForCalcValues.extraOperator

      if (left && operator && right && !extraOperator) {
        let result = count.calculate(left, operator, right)
        console.log(`before infinity check ${result}`)
        let calculated = true

        if (!Number.isFinite(Number(result))) {
          console.log(`infinity check ${result}`)
          result = 'Infinity'
        }
        
        return { result, calculated }
      }
      if (left && operator && right && extraOperator) {
        let result = count.calculate(left, operator, right)
        result = `${result}${extraOperator}`
        return { result }
      }

      if (left && operator && !right) return { result: valueToProcess }

      if (left && !operator && !right) return { result: left }
    } else {
      return { result: valueToProcess }
    }
  } else {
    return { result: valueToProcess }
  }
}
  
export function removeLastValue(value) {
  return value.slice(0, -1)
}