import * as checks from "./modules/checks.js";
import * as showDisplay from "./modules/showAtDisplay.js";
import * as manageValues from "./modules/manageValues.js";

const display = document.querySelector("#display");
const btnsContainer = document.querySelector("#btns");
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
let calculated = false


btnsContainer.addEventListener("click", (event) => {
  getClickedBtn(event, true);
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
  getClickedBtn(event);
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

clearBtn.addEventListener('click', () => {
  display.value = ''
})

deleteBtn.addEventListener('click', manageLastValueRemoval)

function getClickedBtn(event, isButton = false) {
  let toDisplay
  let input
  let parsedResult
  
  input = event.target.id;

  if (!isButton && checks.isNumberOrOperatorOrDot(event.key)) {
    input = event.key;
  }

  if (display.value === "Error" || display.value === 'Zero division' || (calculated && Number.isFinite(Number(input)))) {
    display.value = "";
  }
  
  parsedResult = manageValues.manageValue(display.value, input);

  if (parsedResult && parsedResult.result) {
    toDisplay = showDisplay.showAtDisplay(parsedResult.result) 
  }
  if (parsedResult) {
    calculated = parsedResult.calculated ? parsedResult.calculated : false
  }

  if (toDisplay) display.value = toDisplay
}

function manageLastValueRemoval() {
  display.value = manageValues.removeLastValue(display.value)
}