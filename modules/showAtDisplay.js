export function showAtDisplay(value) {
  if (value === undefined) return "Error";
  if (value === Infinity) return "Zero division"
  return value;
}

