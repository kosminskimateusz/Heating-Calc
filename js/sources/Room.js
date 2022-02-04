export class Room {
  id;
  x;
  y;
  left;
  right;
  top;
  bottom;
  temperature = 20;

  constructor(id, temperature) {
    this.id = id;
    this.x = localStorage.getItem("x" + id);
    this.y = localStorage.getItem("y" + id);
    this.temperature = temperature;
  }

}