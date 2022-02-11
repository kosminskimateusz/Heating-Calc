import { createRoomObjects } from "./calculateRoomsFunctions/createRoomObjects.js";
import { setRoomsNeighborhood } from "./calculateRoomsFunctions/setRoomsNeighborhood.js";
import { Outside } from "../sources/Outside.js";
import { fillOutsideRooms } from "./calculateRoomsFunctions/fillOutsideToRooms.js";
import { checkTemperatures } from "./calculateRoomsFunctions/checkTemperatures.js";
import { getOutsideTemperature } from "./calculateRoomsFunctions/getOutsideTemperature.js";
import { getInputsTemperature } from "./calculateRoomsFunctions/getInputsTemperature.js";
import { createArrayOfTemperatures } from "./calculateRoomsFunctions/createArrayOfTemperatures.js";

export function calculateTemperatureRoad() {

  // const temperatures = collect array from inputs
  // const outsideTemperature = get from last record of array
  // cut temperatures last record of array
  const roomsObjects = createRoomObjects();
  setRoomsNeighborhood(roomsObjects);
  const outsideTemperature = getOutsideTemperature();
  const inputsTemperature = getInputsTemperature();
  const temperatures = createArrayOfTemperatures(inputsTemperature);
  console.log("Temperatures: ", temperatures);


  console.log("Work!!!");

  let correctTemperatures = checkTemperatures(temperatures);
  console.log(temperatures, correctTemperatures);
  if (outsideTemperature !== NaN && outsideTemperature < 25 && outsideTemperature > -30 && correctTemperatures === true) {
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

