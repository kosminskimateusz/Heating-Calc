export function createBtn(name, id) {
  const editRoomsBtn = document.createElement("button");
  editRoomsBtn.id = id;
  editRoomsBtn.append(name);
  return editRoomsBtn;
}