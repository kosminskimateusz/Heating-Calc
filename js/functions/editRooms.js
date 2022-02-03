export function editRooms(addRoomBtn, deleteRoomBtn, confirmRoomsBtn, calculateBtn,editRoomsBtn) {
  document.body.append(addRoomBtn, deleteRoomBtn, confirmRoomsBtn);
  editRoomsBtn.remove();
  calculateBtn.remove();
  localStorage.clear();
}