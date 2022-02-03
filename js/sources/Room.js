export class Room {
  id;
  x;
  y;
  left;
  right;
  top;
  bottom;

  constructor(id) {
    this.id = id;
    this.x = localStorage.getItem("x" + id);
    this.y = localStorage.getItem("y" + id);
  }

}