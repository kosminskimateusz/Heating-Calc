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
  // add input
  const label = document.createElement("label");
  label.setAttribute("for", "t" + number);
  label.classList.add("label-room-temperature");
  label.innerHTML = "Temp: ";
  newRoom.append(label);
  const input = document.createElement("input");
  input.type = "number";
  input.classList.add("temperature");
  input.id = "t" + number;
  input.required = true;
  input.placeholder="temp";
  newRoom.append(input);
  blueprint.insertBefore(newRoom, lastRoom);
};