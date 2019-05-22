const Reservation = require("./reservation");

const Restaurant = function () {
  this.reservations = [];

  this.addReservation = function (name, phoneNumber, email, id) {
    this.reservations.push (new Reservation(name, phoneNumber, email, id))
  }

  this.printReservations = function () {
    let html = "";
    for(let i = 0; i < this.reservations.length; i++) {
      html += `
      <li class='list-group-item mt-4'>
        <h2>Table #${i + 1}</h2>
        <hr>
        <h2>ID: ${this.reservations[i].id}</h2>
        <h2>Name: ${this.reservations[i].name}</h2>
        <h2>Email: ${this.reservations[i].email}</h2>
        <h2>Phone Number: ${this.reservations[i].phoneNumber}</h2>
      </li>`;
    }
    return html
  }
}

module.exports = Restaurant;