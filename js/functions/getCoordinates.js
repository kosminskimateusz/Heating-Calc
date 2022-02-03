export function getCoordinates() {
  let rooms = document.querySelectorAll(".room");
  let num = 1;
  for (let room of rooms) {
    const { left, top, width, height } = room.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const coordinate = document.createElement("p");
    coordinate.classList.add("coordinate");
    coordinate.append("x: " + centerX);
    coordinate.innerHTML += "<br />";
    coordinate.append("y: " + centerY);

    room.appendChild(coordinate);
    localStorage.setItem("x" + num, centerX);
    localStorage.setItem("y" + num, centerY);
    num++;
  }
}