export default class Check {
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  operators = ["+", "-", "*", "/"];
  otherOperators = ["clear", ".", "delete", "="];

  isNumberOrOperatorOrDot(val) {
    return this.isNumberOrDot(val) || this.operators.includes(val);
  }

  isEqual(val) {
    return val === "=";
}

  isNumberOrDot(val) {
    return (this.numbers.includes(val) || val === ".");
  }

  isEnter(val) {
    return val === "Enter";
  }

  isOperator(val) {
    return this.operators.includes(val);
  }
}