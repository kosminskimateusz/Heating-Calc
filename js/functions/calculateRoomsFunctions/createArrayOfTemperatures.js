export function createArrayOfTemperatures(inputsTemperature) {
  if (inputsTemperature instanceof Error) {
    console.log("Temperatures ERROR");
    alert("Temperatures ERROR");
    return new Error("Temperatures error");
  }
  
  const temperatures = new Array();
  for (let input in inputsTemperature) {
    if (typeof input.value == 'string' && input.value != '') {
      temperatures.push(parseInt(input, 10));
      console.log(input);
    } else {
      alert("Error in inputs Temperatures");
      return new Error("Fill all values");
    }
    return temperatures;
  }
}