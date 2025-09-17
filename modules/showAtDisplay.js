import * as checks from './checks.js'

export function showAtDisplay(value) {
  if (value === undefined) return "Error";
  if (value === Infinity) return "Zero division"

  if (checks.isAllowedToDisplay(value)) {
    return value;
  }
}

