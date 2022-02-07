export function setRoomsNeighborhood(roomsObjects, enviroment) {

  console.log(roomsObjects, enviroment);
  for (let room of roomsObjects) {
    // console.log(room.id);
    // console.log(room.x);
    let diffX;
    let diffY;
    for (let r of roomsObjects) {
      if (r === room) {

      } else {
        diffX = Math.round(room.x - r.x);
        diffY = Math.round(room.y - r.y);
        // console.log("diffX: ", diffX);
        if ((-200 < diffX && diffX < 200) && diffY === 0) {
          (diffX < 0) ? room.right = r : room.right = enviroment;
          (diffX > 0) ? room.left = r : room.left = enviroment;
        }
        if ((-200 < diffY && diffY < 200) && diffX === 0) {
          (diffY < 0) ? room.bottom = r : room.bottom = enviroment;
          (diffY > 0) ? room.top = r : room.top = enviroment;
        }
      }
    }
  }
}