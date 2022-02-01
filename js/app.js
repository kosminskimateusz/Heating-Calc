const blueprint = document.querySelector(".blueprint");
const addRoomBtn = document.getElementById("btn-add-room");
const deleteRoomBtn = document.getElementById("btn-delete-room");

function createRoom() {
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

function deleteRoom() {
  let rooms = document.querySelectorAll(".room");
  let num = rooms.length - 1;
  if (rooms[num] !== undefined && num > 0) {
    rooms[num].remove();
  }
}

function autoSizeGrid() {
  let rooms = document.querySelectorAll(".room");
  let size = rooms.length;
  (size === 3) ? blueprint.style.gridTemplateColumns = `repeat(2, minmax(150px, 1fr))` : blueprint.style.gridTemplateColumns = `repeat(${Math.ceil(size / 3)}, minmax(150px, 1fr))`;
}

addRoomBtn.addEventListener("click", () => {
  createRoom();
  autoSizeGrid();
  getCoordinates();
}, false);

deleteRoomBtn.addEventListener("click", () => {
  deleteRoom();
  autoSizeGrid();
  getCoordinates();
}, false);

function getCoordinates() {
  let rooms = document.querySelectorAll(".room");
  for (let el of rooms) {
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    el.innerHTML = ("<p class='coordinate'>x: " + centerX + "<br />y: " + centerY + "</p>");
  }
}

getCoordinates();