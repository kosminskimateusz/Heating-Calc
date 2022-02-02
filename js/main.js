import { createRoom } from './functions/createRoom.js';
import { deleteRoom } from './functions/deleteRoom.js';
import { getCoordinates } from './functions/getCoordinates.js';
import { autoSizeGrid } from './functions/autoSizeGrid.js';
import { editRooms } from './functions/editRooms.js';


const blueprint = document.querySelector(".blueprint");

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
    editRooms(addRoomBtn, deleteRoomBtn, confirmRoomsBtn, calculateBtn,editRoomsBtn);
  });
  const calculateBtn = document.createElement("button");
  calculateBtn.id = "btn-calculate";
  calculateBtn.append("Calculate");
  calculateBtn.addEventListener("click", calculate);

  confirmRoomsBtn.remove();
  document.body.append(editRoomsBtn, calculateBtn);
})




function calculate() {

}

getCoordinates();