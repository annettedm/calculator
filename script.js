import * as checks from "./modules/check.js";
import * as showDisplay from "./modules/show.js";
import * as manageValues from "./modules/manage.js";

const display = document.querySelector("#display");
const btnsContainer = document.querySelector("#btns");
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
let calculated = false


btnsContainer.addEventListener("click", (event) => {
  processClickedBtn(event, true);
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
  processClickedBtn(event);
});

document.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === "Escape") display.value = ""
});

btnsContainer.addEventListener("mousedown", (event) => {
  event.target.classList.add("active");
})

btnsContainer.addEventListener("mouseup", (event) => {
  event.target.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  display.value = "";
})

display.addEventListener('focus', () => {
  if (checks.isDisplayToClearOnFocus(display.value, calculated)) {
    display.value = "";
  }
})

clearBtn.addEventListener('click', () => {
  display.value = ''
})

deleteBtn.addEventListener('click', manageLastValueRemoval)

function processClickedBtn(event, isButton = false) {
  let toDisplay
  let input
  let parsedResult
  
  input = event.target.id;
  
  if (!isButton && checks.isNumberOrOperatorOrDot(event.key)) {
    input = event.key;
  }
  
  if (checks.isDisplayToClear(display.value, input, calculated)) {
    display.value = "";
  }
  
  parsedResult = manageValues.manageValue(display.value, input);
  
  if (parsedResult) {
    console.log(`script parsed result ${parsedResult.result ? parsedResult.result : "undefined"}`)
    toDisplay = showDisplay.showAtDisplay(parsedResult.result) 
    calculated = parsedResult.calculated ? parsedResult.calculated : false
  }
  console.log(`to display ${toDisplay}`)

  if (toDisplay) display.value = toDisplay
  console.log(`-------------`)
}

function manageLastValueRemoval() {
  display.value = manageValues.removeLastValue(display.value)
}