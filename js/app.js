const blueprint = document.querySelector(".blueprint");
const addRoomBtn = document.getElementById("btn-add-room");

function createRoom() {
  let rooms = document.querySelectorAll(".room");
  let lastRoom = rooms[rooms.length];
  if (rooms.length >= 12) {
    alert("12 is maximum number of rooms");
    return 0;
  }
  let newRoom = document.createElement("div");
  newRoom.classList.add("room");
  newRoom.innerHTML = "5";
  blueprint.insertBefore(newRoom, lastRoom);
};

function autoSizeGrid() {
  let rooms = document.querySelectorAll(".room");
  let size = rooms.length;
  blueprint.style.gridTemplateColumns = `repeat(${Math.ceil(size/3)}, minmax(150px, 1fr))`;
  console.log("Length: ", size);
  console.dir(Math.ceil(size/3));
}

addRoomBtn.addEventListener("click", () => {
  createRoom();
  autoSizeGrid();
}, false);


