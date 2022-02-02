export function autoSizeGrid() {
  const blueprint = document.querySelector(".blueprint");
  let rooms = document.querySelectorAll(".room");
  let size = rooms.length;
  (size === 3) ? blueprint.style.gridTemplateColumns = `repeat(2, minmax(150px, 1fr))` : blueprint.style.gridTemplateColumns = `repeat(${Math.ceil(size / 3)}, minmax(150px, 1fr))`;
}