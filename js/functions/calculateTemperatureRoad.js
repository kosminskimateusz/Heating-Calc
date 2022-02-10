import { createRoomObjects } from "./calculateRoomsFunctions/createRoomObjects.js";
import { setRoomsNeighborhood } from "./calculateRoomsFunctions/setRoomsNeighborhood.js";
import { Outside } from "../sources/Outside.js";
import { fillOutsideRooms } from "./calculateRoomsFunctions/fillOutsideToRooms.js";
import { checkTemperatures } from "./calculateRoomsFunctions/checkTemperatures.js";

export function calculateTemperatureRoad() {

  // const temperatures = collect array from inputs
  // const outsideTemperature = get from last record of array
  // cut temperatures last record of array
  const roomsObjects = createRoomObjects();
  setRoomsNeighborhood(roomsObjects);
  const outsideTemperature = parseInt(document.getElementById("t0").value, 10);
  const temperatureInputs = document.querySelectorAll(".temperature");
  const temperatures = new Array();
  for (let input of temperatureInputs) {
    if (typeof input.value !== 'string' && input.value != "") {
      temperatures.push(parseInt(input.value, 10));
    } else {
      input.value = 0;
      temperatures.push('0');
    }
  }
  
  let correctTemperatures = checkTemperatures(temperatures);
  console.log(temperatures, correctTemperatures);
  if (outsideTemperature !== NaN && outsideTemperature < 25 && outsideTemperature > -30 && correctTemperatures === true)  {
    const outside = new Outside(outsideTemperature);
    fillOutsideRooms(roomsObjects, outside);
    
    if (roomsObjects.length === temperatures.length) {
      let i = 0;
      for (const room of roomsObjects) {
        room.temperature = temperatures[i++];
      }
    }
  }
  // I haven't to check null properties for top, right, bottom and left, because fillOutsideRooms function make me sure that isn't empty
  
  console.log(roomsObjects);
}

