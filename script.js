import * as checks from "./modules/checks.js";
import * as showDisplay from "./modules/showAtDisplay.js";
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
  if (display.value === "Error" || display.value === 'Zero division') {
    display.value = "";
  }
 
  let input = event.target.id;

  if (!isButton && checks.isNumberOrOperatorOrDot(event.key)) {
    input = event.key;
  }
  
  
  let parsedResult = manage.manageValue(display.value, input);
  console.log(`parsed result ${parsedResult}`)
  display.value = showDisplay.showAtDisplay(parsedResult);

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


