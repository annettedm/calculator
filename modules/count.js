import * as parse from './parseValues2.js';
import * as basic from "./basicFunctions.js"

export function manageCalculations(displayValue) {
    let parsedValues = parse.parseDisplayValue(displayValue);
  
    // console.log(parsedValues)
    let preparedForCalcValues = parse.prepareValuesForCount(parsedValues);
    // console.log(`preparedForCalcValues left ${preparedForCalcValues.left} operator ${preparedForCalcValues.operator} right ${preparedForCalcValues.right}`);
  
    if (!preparedForCalcValues || !preparedForCalcValues.left || !preparedForCalcValues.operator || !preparedForCalcValues.right) return undefined;
    
    this.accumulator = basic.count(preparedForCalcValues.left, preparedForCalcValues.operator, preparedForCalcValues.right);
    this.counter++;
    // console.log(`inside manageCalc result: ${this.accumulator}`);
  
    return this.accumulator;
  }

  export function processEqualOrEnter(displayValue) {
    if (Number.isFinite(Number(displayValue))) return displayValue;
    else return this.manageCalculations(displayValue);
  }

  export function resetValues() {
    this.accumulator = undefined;
    this.left = undefined;
    this.operator = undefined;
    this.right = undefined;
    this.counter = 0; 
  }