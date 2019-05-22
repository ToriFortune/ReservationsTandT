const Reservation = require("./reservation");

const Restaurant = function () {
  this.reservations = [];

  this.addReservation = function (name, phoneNumber, email, id) {
    this.reservations.push (new Reservation(name, phoneNumber, email, id))
  }
}

module.exports = Restaurant;