export function createRoom() {
  const blueprint = document.querySelector(".blueprint");
  let rooms = document.querySelectorAll(".room");
  let lastRoom = rooms[rooms.length];
  if (rooms.length >= 12) {
    alert("12 is maximum number of rooms");
    return 0;
  }
  let newRoom = document.createElement("div");
  newRoom.classList.add("room");
  let number = rooms.length + 1;
  newRoom.id = "room" + number;
  newRoom.innerHTML = number;
  blueprint.insertBefore(newRoom, lastRoom);
};