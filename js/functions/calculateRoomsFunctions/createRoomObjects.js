import { Room } from "../../sources/Room.js";

export function createRoomObjects() {
  const rooms = document.querySelectorAll(".room");
  const temperatures = document.querySelectorAll(".room .temperature");
  // GET temperatures from input
  const temperature = 20;

  let roomsObject = new Array();
  let id = 0;
  for (let el of rooms) {
    roomsObject.push(new Room(id, temperature));
    id++;
  }
  
  return roomsObject;
}