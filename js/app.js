const blueprint = document.querySelector(".blueprint");

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

function getCoordinates() {
  let rooms = document.querySelectorAll(".room");
  for (let el of rooms) {
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const oldCoordinate = document.querySelector(".coordinate");
    console.log(oldCoordinate);
    const coordinate = document.createElement("p");
    coordinate.classList.add("coordinate");
    coordinate.append("x: " + centerX);
    coordinate.innerHTML += "<br />";
    coordinate.append("y: " + centerY);

      el.appendChild(coordinate);

    // el.append("<p class='coordinate'>x: " + centerX + "<br />y: " + centerY + "</p>");
  }
}


const addRoomBtn = document.getElementById("btn-add-room");
addRoomBtn.addEventListener("click", () => {
  createRoom();
  autoSizeGrid();
  getCoordinates();
}, false);


const deleteRoomBtn = document.getElementById("btn-delete-room");
deleteRoomBtn.addEventListener("click", () => {
  deleteRoom();
  autoSizeGrid();
  getCoordinates();
}, false);


const confirmRoomsBtn = document.getElementById("btn-confirm-rooms");
confirmRoomsBtn.addEventListener("click", () => {
  addRoomBtn.remove();
  deleteRoomBtn.remove();
  const editRoomsBtn = document.createElement("button");
  editRoomsBtn.id = "btn-edit-rooms";
  editRoomsBtn.append("Edit");
  editRoomsBtn.addEventListener("click", function () {
    editRooms(editRoomsBtn);
  });
  const calculateBtn = document.createElement("button");
  calculateBtn.id = "btn-calculate";
  calculateBtn.append("Calculate");
  calculateBtn.addEventListener("click", calculate);

  confirmRoomsBtn.remove();
  document.body.append(editRoomsBtn, calculateBtn);
})


function editRooms(editRoomsBtn) {
  document.body.append(addRoomBtn, deleteRoomBtn, confirmRoomsBtn);
  editRoomsBtn.remove();
}

function calculate() {

}

getCoordinates();