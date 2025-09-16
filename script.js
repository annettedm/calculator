import * as basic from "./modules/basicFunctions.js";
import * as checks from "./modules/checks.js";
import * as showDisplay from "./modules/showAtDisplay.js";
import * as parse from "./modules/parseValues2.js";
import * as count from './modules/count.js';
import Manage from "./modules/manageValues.js";

const display = document.querySelector("#display");
const btnsContainer = document.querySelector("#btns");
const manage = new Manage();

btnsContainer.addEventListener("click", (event) => {
  getClickedBtn(event, true);
});
document.addEventListener("keypress", (event) => {
  event.preventDefault();
  getClickedBtn(event);
});

function getClickedBtn(event, isButton = false) {
  if (display.value === "Error") {
    display.value = "";
  }
 
  let input = event.target.id;

  if (!isButton && checks.isNumberOrOperatorOrDot(event.key)) {
    input = event.key;
  }

  let parsedResult = manage.manageValue(display.value, input);

  if ((display.value === "" && checks.isAllowedFirstValue(input)) || (display.value !== "" && checks.isNumberOrOperatorOrDotForDisplay(input)) || Number.isFinite(parsedResult)) {
    display.value = showDisplay.showAtDisplay(parsedResult);
  }
}

btnsContainer.addEventListener("mousedown", (event) => {
  event.target.classList.add("active");
})

btnsContainer.addEventListener("mouseup", (event) => {
  event.target.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  display.value = "";
})



// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide
// }

/*
 1. need an operatorCounter to check if an operator for the first time or not
 2. counter should be available at count fn
 3. need get count and set count fn 

    Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.

        You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.

        This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.


       
        -+/*1 --> error 
        .. -> not allowed
        = without any data or 0 -> no action 
        -1 --> allowed 
        -.1 --> allowed
        .1 --> allowed
        1--1 -> as many minuses between are allowed, taking into account even or odd number of minuses is 
        1-+1 -> allowed 
        1++1 -> allowed 
        0.1  -> allowed 
        ---
        if = -> parse and show result or error
        if 1 + 1 - -> at minus count and show result 
        -> if = or *, /, +, - --> start counting. if has at least 1 digit, start parsing 

        need to store entered values somewhere 

*/


