import { add, divide, multiply, subtract } from "./modules/basic_functions.js";
import { isAllowedValue } from "./modules/checks.js";

const display = document.querySelector("#display");
const btnsContainer = document.querySelector("#btns")


function operate(a, op, b) {
  let firstValue = a;
  let operator = op;
  let secondValue = b;
  let result;

  switch (operator) {
    case "+": result = add(firstValue, secondValue);
      break;
    case "-": result = subtract(firstValue, secondValue);
      break;
    case "*": result = multiply(firstValue, secondValue);
      break;
    case "/": result = divide(firstValue, secondValue);
      break;
  }

  return result;
}


function start() {
  display.value = "0";
}


// mousedown and mouseup
/*
  get container element first
  learn how to add event listener to container
  loop through container child elements to get id
  get id from child element -> if more than 1 id?
  add style values on mousedown and mouseup
  match element id to value
  the same with keydown 

  check if value is allowed with array.include 

  if allowed, show at display input
*/

btnsContainer.addEventListener("click", getClickedBtn);

function getClickedBtn(event) {
  let allowed = isAllowedValue(event.target.id);
  console.log(event.target.id);
  console.log(allowed);
}

btnsContainer.addEventListener("mousedown", (event) => {
  event.target.classList.add("active");
})

btnsContainer.addEventListener("mouseup", (event) => {
  event.target.classList.remove("active");
});


start();

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }
