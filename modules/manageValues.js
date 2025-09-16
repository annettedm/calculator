import * as checks from "./checks.js";
import * as parse from './parse.js';
import * as count from './basicFunctions.js';

export default class Manage {
  manageValue(display, input) {
    let valueToProcess = display + input;

    console.log(`dot`)

    if (checks.isAllowedFirstValue(valueToProcess)) return valueToProcess;

    if (checks.isForbiddenOperatorsAtStart(valueToProcess)) return undefined

    if (checks.isAnyOperator(input)) {
      let left;
      let right;
      let operator;
      let extraOperator;

      let parsedArrayedValues = parse.parseDisplayValue(valueToProcess);

      let preparedForCalcValues = parse.prepareValuesForCount(parsedArrayedValues);
      left = preparedForCalcValues.left;
      operator = preparedForCalcValues.operator;
      right = preparedForCalcValues.right;
      extraOperator = preparedForCalcValues.extraOperator;

      if (left && operator && right && !extraOperator) {
        // console.log(` count result ${count.count(left, operator, right)}`)
        return count.count(left, operator, right);
      }

      if (left && operator && right && extraOperator) {
        let result = count.count(left, operator, right);
        return `${result}${extraOperator}`
      }

      if (left && operator && !right) return valueToProcess;

      if (left && !operator && !right) return left
    } else {
      return valueToProcess;  
    }
  }
}