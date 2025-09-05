const display = document.querySelector("#display");

function showValueAtDisplay(val) {
  display.value = `${display.value}${val}`; 

  return display.value;
}

export { showValueAtDisplay }
