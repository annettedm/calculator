const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const operators = ["+", "-", "*", "/"]

const printableChars = numbers.concat(operators)
printableChars.push('.')

export function isAllowedFirstValue(val) {
  return isNumberOrDot(val) || val === "-" || Number.isFinite(Number(val))
}

export function isNumberOrOperatorOrDot(val) {
  return isNumberOrDot(val) || isAnyOperator(val)
}

export function isOperator(val) {
  return operators.includes(val)
}

export function isEqual(val) {
  return val === "="
}

export function isEnter(val) {
  return val === 'Enter'
}

export function isAnyOperator(val) {
  return isOperator(val) || isEnter(val) || isEqual(val)
}

export function isNumberOrDot(val) {
  return (numbers.includes(val) || val === ".")
}

export function hasInvalidExtraDot(arr) {
  if (typeof arr === "string") arr = arr.split('')

  let filtered = arr.filter((element) => element === ".")  

  return (filtered.length >= 2 || filtered === undefined)
}

export function isValidOperator(operator) {
  return (operator.length == 1 || (operator.length == 2 && includesAllowedOperators(operator)))
}

export function isArrayEmptyOrUndefined(arr) {
  return (arr === undefined || arr.length === 0)
}

export function isArrayNonEmpty(arr) {
  return arr.length > 0
}

export function isForbiddenOperatorsAtStart(value) {
  const unsuitableSignCombinationsAtStart = ['--', '-+', '-/', '-*', '.-', '.+', '.-', './', '.*', '..']
  return unsuitableSignCombinationsAtStart.includes(value)
}

export function isAllowedToDisplay(value) {
  if (value) { } {
    let allowed = Array.from(value).every((char) => printableChars.includes(char))
    return allowed
  }
}

export function isDisplayToClearOnFocus(display, calculated = false) {
  return (display === "Error" || display === 'Bad operation' || (calculated && Number.isFinite(Number(display))))
}

export function isDisplayToClear(display, input, calculated = false) {
  return ((display === "Error" || display === 'Bad operation' || (calculated && Number.isFinite(Number(display)))) && isNumberOrDot(input))
}

export function isToReturnDisplayValue(left, operator, right) {
  return (isArrayNonEmpty(left) && isArrayEmptyOrUndefined(operator)
    && isArrayEmptyOrUndefined(right)) || (isArrayNonEmpty(left) && isArrayNonEmpty(operator)
    && isArrayEmptyOrUndefined(right))
}

function includesAllowedOperators(operator) {
  let validOperators = ["++", "+-", "--", "-+", "**", "*+", "*-", "/+", "/-"]

  return validOperators.includes(operator)
}