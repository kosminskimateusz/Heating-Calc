import { Room } from "../sources/Room.js";

export function calculate() {
  const rooms = document.querySelectorAll(".room");
  let roomsObject = new Array();
  let id = 0;
  // const temperatures = collect array from inputs
  // const outsideTemperature = get from last array record
  // cut temperatures last record
  const temperature = 20;

  for (let el of rooms) {
    roomsObject.push(new Room(id, temperature));
    id++;
  }
  console.log(roomsObject);
  for (let room of roomsObject) {
    // console.log(room.id);
    // console.log(room.x);
    let diffX;
    let diffY;
    for (let r of roomsObject) {
      if (r === room) {

      } else {
        diffX = room.x - r.x;
        diffY = room.y - r.y;
        // console.log("diffX: ", diffX);
        if ((-200 < diffX < 200) && diffY === 0) {
          diffX < 0 ? room.right = r : null;
          diffX > 0 ? room.left = r : null;
        }
        if ((-200 < diffY < 200) && diffX === 0) {
          diffY < 0 ? room.bottom = r : null;
          diffY > 0 ? room.top = r : null;
        }
      }
    }
  }
}