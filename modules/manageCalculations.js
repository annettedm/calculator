import * as parse from "./parseValues.js"
import * as basic from "./basicFunctions.js"

export function manageCalculations(displayValue) {
  let parsedValues = parse.parseDisplayValue(displayValue);

  // console.log(parsedValues)
  let preparedForCalcValues = parse.prepareValuesForCount(parsedValues);
  // console.log(preparedForCalcValues)

  if (!preparedForCalcValues || !preparedForCalcValues.left || !preparedForCalcValues.operator || !preparedForCalcValues.right) return undefined;
  
  let result = basic.count(preparedForCalcValues.left, preparedForCalcValues.operator, preparedForCalcValues.right)
  console.log(`inside manageCalc result: ${result}`);

  return result;
}