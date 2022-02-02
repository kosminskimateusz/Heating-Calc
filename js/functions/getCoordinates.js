
export function getCoordinates() {
  let rooms = document.querySelectorAll(".room");
  for (let el of rooms) {
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;


    // const oldCoordinate = document.querySelector(".coordinate");
    // console.log(oldCoordinate);
    // const coordinate = document.createElement("p");
    // coordinate.classList.add("coordinate");
    // coordinate.append("x: " + centerX);
    // coordinate.innerHTML += "<br />";
    // coordinate.append("y: " + centerY);

    // el.appendChild(coordinate);
    if (el.lastChild.nodeName == "P") {
      console.log("tak");
    } else {
      el.innerHTML = ("<p class='coordinate'>x: " + centerX + "<br />y: " + centerY + "</p>");
    }
  }
}