
function add(a, b) {
  return +a + +b
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
  console.log(Math.pow(a, b))
  return Math.pow(a, b)
}

export function calculate(left, operator, right) {
  let result

  switch (operator) {
    case "+": result = add(left, right)
      break
    case "-": result = subtract(left, right)
      break
    case "*": result = multiply(left, right)
      break
    case "/": result = divide(left, right)
      break
    case "**": result = power(left, right)
      break
  }
  console.log(result)
  return cutDecimals(result)
}

function cutDecimals(number) {
  let stringNumber = String(number)
  let arr = stringNumber.split('.')
  let whole = arr[0]
  
  if (arr[1]) {
    let secondPart = arr[1]
    if (secondPart.includes('e') || secondPart.length <= 6) return number
    
    let decimal = secondPart.slice(0, 6)

    let precision = secondPart.slice(6, 7)
    const precisionNumbers = ['5', '6', '7', '8', '9']

    if (precisionNumbers.includes(precision)) {
      decimal = +decimal
      decimal += 1
      decimal = String(decimal)
    }
    
    let result = `${whole}.${decimal}`
    return +result
  }

  return number
}