export function getOutsideTemperature() {
  let outsideTemperature = document.getElementById("t0").value;
  if (typeof outsideTemperature == 'string' && outsideTemperature != '') {
    return parseInt(outsideTemperature, 10);
  } else {
    alert("Error in outside temperature");
    console.log("Error in outside temperature");
    return new Error("Fill all values");
  }
}