//const uuidv5 = require('uuid/v5');

const Reservation = function ( name, phoneNumber, email, id ) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.id = id;
}

module.exports = Reservation;