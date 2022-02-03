export function deleteCoordinates() {
  let rooms = document.querySelectorAll(".room");
  let num = 0;
  for (let room of rooms) {
    if ((room.children.length !== 0) && (room.children.item(room.children.length - 1).className === "coordinate")) {
      room.children.item(room.children.length - 1).remove();
    }
    num++;
  }
}