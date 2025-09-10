

const display = document.querySelector("#display");

export function showValueAtDisplay(val) {
  display.value = `${display.value}${val}`; 

  return display.value;
}

export function showCalcAtDisplay(result) {
  if (result === undefined) display.value = "Error";
  else display.value = result;
}
