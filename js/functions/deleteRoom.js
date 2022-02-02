export function deleteRoom() {
  let rooms = document.querySelectorAll(".room");
  let num = rooms.length - 1;
  if (rooms[num] !== undefined && num > 0) {
    rooms[num].remove();
  }
}