import { createRoomObjects } from "./calculateRoomsFunctions/createRoomObjects.js";
import { setRoomsNeighborhood } from "./calculateRoomsFunctions/setRoomsNeighborhood.js";
import { Outside } from "../sources/Outside.js";
import { fillOutsideRooms } from "./calculateRoomsFunctions/fillOutsideToRooms.js";

export function calculateTemperatureRoad() {

  // const temperatures = collect array from inputs
  // const outsideTemperature = get from last record of array
  // cut temperatures last record of array
  const roomsObjects = createRoomObjects();
  const outsideTemperature = document.getElementById("t0").value;
  const outside = new Outside(parseInt(outsideTemperature, 10));
  setRoomsNeighborhood(roomsObjects);
  fillOutsideRooms(roomsObjects, outside);
  // I haven't to check null properties for top, right, bottom and left, because fillOutsideRooms function make me sure that isn't empty
  const temperatureInputs = document.querySelectorAll(".temperature");
  const temperatures = new Array();
  for (let input of temperatureInputs) {
    temperatures.push(parseInt(input.value, 10));
  }

  if (roomsObjects.length === temperatures.length) {
    let i = 0;
    for (const room of roomsObjects) {
      room.temperature = temperatures[i++];
    }
  }
  console.log(roomsObjects);
}

