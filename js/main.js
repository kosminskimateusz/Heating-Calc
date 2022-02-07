import { createRoom } from './functions/createRoom.js';
import { deleteRoom } from './functions/deleteRoom.js';
import { getCoordinates } from './functions/getCoordinates.js';
import { autoSizeGrid } from './functions/autoSizeGrid.js';
import { editRooms } from './functions/editRooms.js';
import { deleteCoordinates } from './functions/deleteCoordinates.js';
import { createBtn } from './functions/createBtn.js';
import { calculateTemperatureRoad } from './functions/calculateTemperatureRoad.js';

const blueprint = document.querySelector(".blueprint");

const addRoomBtn = document.getElementById("btn-add-room");
addRoomBtn.addEventListener("click", () => {
  createRoom();
  autoSizeGrid();
  // getCoordinates();
}, false);


const deleteRoomBtn = document.getElementById("btn-delete-room");
deleteRoomBtn.addEventListener("click", () => {
  deleteRoom();
  autoSizeGrid();
}, false);


const confirmRoomsBtn = document.getElementById("btn-confirm-rooms");
confirmRoomsBtn.addEventListener("click", () => {
  addRoomBtn.remove();
  deleteRoomBtn.remove();
  const editRoomsBtn = createBtn("Edit", "btn-edit-rooms");
  editRoomsBtn.addEventListener("click", function () {
    editRooms(addRoomBtn, deleteRoomBtn, confirmRoomsBtn, calculateBtn, editRoomsBtn);
    deleteCoordinates();
  });
  const calculateBtn = createBtn("Calculate", "btn-calculate");
  calculateBtn.addEventListener("click", () => {
    getCoordinates();
    calculateTemperatureRoad();
  }, { once: true });

  confirmRoomsBtn.remove();
  document.body.append(editRoomsBtn, calculateBtn);
})


console.log(-200 < -310 < 200);