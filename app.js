const express = require("express");
const app = express();
const path = require("path");
const Restaurant = require("./restaurant");

const PORT = process.env.PORT || 3000;

const restaurant = new Restaurant();

restaurant.addReservation("Tori", "234-2343", "asdklj@asdlk", 42);

console.log(restaurant.reservations);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT : http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Suha is cranky!!!</h1>");
});