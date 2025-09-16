import * as checks from "./checks.js";
import * as parse from './parse.js';
import * as count from './basicFunctions.js';

export default class Manage {
  manageValue(display, input) {
    let valueToProcess = display + input;
    console.log(`inside manage value, value to process is ${valueToProcess}`)
    console.log(`inside manage value, input is ${input}`)

    if (valueToProcess === '-') return valueToProcess;

    if (checks.isAnyOperator(input)) {
      console.log(`inside operator`);

      let left;
      let right;
      let operator;
      let extraOperator;
      let resultToDisplay;

      let parsedArrayedValues = parse.parseDisplayValue(valueToProcess);
      // console.log(`parsed values ${parsedArrayedValues.left}`);

      let preparedForCalcValues = parse.prepareValuesForCount(parsedArrayedValues);
      left = preparedForCalcValues.left;
      operator = preparedForCalcValues.operator;
      right = preparedForCalcValues.right;
      extraOperator = preparedForCalcValues.extraOperator;

      if (left && operator && right && !extraOperator) {
        console.log(` count result ${count.count(left, operator, right)}`)
        return count.count(left, operator, right);
      }

      if (left && operator && right && extraOperator) {
        let result = count.count(left, operator, right);
        return `${result}${extraOperator}`
      }

      if (left && operator && !right) return valueToProcess;

      // if left only - no calc, show left at display
      // if left and operator only - no calc, show left and operator as one string at display
      // if left, operator and right only - calculate and show result of calculation
      // if left, operator, right and extra - calculate with left, operator, right and attach extra at display
      // if  
    } else {
      return valueToProcess;  
    }
  }
}