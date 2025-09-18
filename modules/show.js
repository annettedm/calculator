import * as check from './check.js'

export function showAtDisplay(value) {
  if (value === 'Error') return "Error"
  if (value === 'Infinity') return "Bad operation"
  if (check.isAllowedToDisplay(value)) {
    return value
  }
}

