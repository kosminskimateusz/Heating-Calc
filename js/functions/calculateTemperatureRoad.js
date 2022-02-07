import { createRoomObjects } from "./calculateRoomsFunctions/createRoomObjects.js";
import { setRoomsNeighborhood } from "./calculateRoomsFunctions/setRoomsNeighborhood.js";
import { Outside } from "../sources/Outside.js";
import { fillOutsideRooms } from "./calculateRoomsFunctions/fillOutsideToRooms.js";

export function calculateTemperatureRoad() {

  // const temperatures = collect array from inputs
  // const outsideTemperature = get from last record of array
  // cut temperatures last record of array
  const roomsObjects = createRoomObjects();
  const outside = new Outside(-5);
  setRoomsNeighborhood(roomsObjects);
  fillOutsideRooms(roomsObjects, outside);
  console.log(roomsObjects);
  for (const room of roomsObjects) {
    if (room.top != null || room.right != null || room.bottom != null || room.left != null) {
      // calculate heat going
    } else {
      // do nothing
    }
  }
}

