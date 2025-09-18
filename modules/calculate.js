
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
  console.log(`power ${Math.pow(a, b)}`)
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
  let res = cutDecimals(result)
  console.log(`after decimal ${res}`)

  return res
}


function cutDecimals(number) {
  let result = number.toLocaleString('fullwide', { maximumFractionDigits: 6 })

  if (result.includes(',')) {
    result = result.replace(/,/g, '')
  }
  result = Number(result)
  console.log(`decimal type ${typeof result} value ${result}`)
  
  return result
}
