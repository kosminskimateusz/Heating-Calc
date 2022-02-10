export function checkTemperatures(temperatures) {
  let check;
  for (let temp in temperatures) {
    if (typeof temp === 'string') {
      check = false;
    } else {
      check = true;
    }
    if (check === false) return false;
  }
  return check;
}