const allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "clear", ".", "delete"];


function isAllowedValue(val) {
  if (allowedValues.includes(val)) return true;
  return false;
}

function matchValue(val) {

}

export {isAllowedValue}