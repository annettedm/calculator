import * as basic from "./modules/basicFunctions.js";
import * as checks from "./modules/checks.js";
import * as showDisplay from "./modules/showAtDisplay.js";
import * as parse from "./modules/parseValues.js";
import * as manageCalc from "./modules/manageCalculations.js";

export const display = document.querySelector("#display");
export const btnsContainer = document.querySelector("#btns")

btnsContainer.addEventListener("click", getClickedBtn);
display.addEventListener("keypress", (event) => {
  event.preventDefault();
  getClickedBtn(event);
});

function getClickedBtn(event) {
  if (display.value === "Error") display.value = "";
  //debugger;  
  let value = event.target.id;
  console.log(`target id ${value} ${event.key}`);

  if (value === display.id && checks.isNumberOrOperatorOrDot(event.key)) {
    console.log(`key ${event.key}`);
    value = event.key;
  }

  if (checks.isEqual(value)) {
    let calculationResult = manageCalc.manageCalculations(display.value);

    showDisplay.showCalcAtDisplay(calculationResult);
  }

  if ((display.value === "" && checks.isAllowedFirstValue(value)) || (display.value !== "" && checks.isNumberOrOperatorOrDot(value)))  {
    showDisplay.showValueAtDisplay(value);
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
  Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

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


