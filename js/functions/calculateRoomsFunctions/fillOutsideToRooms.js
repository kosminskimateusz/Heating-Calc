export function fillOutsideRooms(roomsObjects, outside) {
  for (let room of roomsObjects) {
    room.top === undefined ? room.top = outside : null;
    room.right === undefined ? room.right = outside : null;
    room.bottom === undefined ? room.bottom = outside : null;
    room.left === undefined ? room.left = outside : null;
  }
}