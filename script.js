import * as checks from "./modules/checks.js";
import * as showDisplay from "./modules/showAtDisplay.js";
import Manage from "./modules/manageValues.js";

const display = document.querySelector("#display");
const btnsContainer = document.querySelector("#btns");
const manage = new Manage();
let calculated = false


btnsContainer.addEventListener("click", (event) => {
  getClickedBtn(event, true);
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
  getClickedBtn(event);
});

function getClickedBtn(event, isButton = false) {
  let toDisplay
 
  let input = event.target.id;

  if (!isButton && checks.isNumberOrOperatorOrDot(event.key)) {
    input = event.key;
  }

  if (display.value === "Error" || display.value === 'Zero division' || (calculated && Number.isFinite(Number(input)))) {
    display.value = "";
  }
  
  
  let parsedResult = manage.manageValue(display.value, input);

  if (parsedResult && parsedResult.result) {
    toDisplay = showDisplay.showAtDisplay(parsedResult.result) 
  }
  if (parsedResult) {
    calculated = parsedResult.calculated ? parsedResult.calculated : false
  }

  
  if (toDisplay) display.value = toDisplay

  // if (checks.isAllowedToDisplay(display.value, input, parsedResult)) {
  //   display.value = showDisplay.showAtDisplay(parsedResult);
  // }
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


