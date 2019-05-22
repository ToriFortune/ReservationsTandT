const express = require("express");
const app = express();
const path = require("path");
const Restaurant = require("./restaurant");

const PORT = process.env.PORT || 3000;

const restaurant = new Restaurant();
const waitlist = new Restaurant();

restaurant.addReservation("Tori", "234-2343", "wife@boss.net", 42);
restaurant.addReservation("Suha", "234-2343", "grumpy@suha.grumps", 16);
restaurant.addReservation("Trey", "234-2343", "Meany@trey.grumps", 21);
restaurant.addReservation("Greg", "234-2343", "Silent@greg.dev", 1);

console.log(restaurant.reservations);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT : http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", (req, res) => {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/currentres", (req, res) => {
  res.sendFile(path.join(__dirname, "currentres.html"));
});

app.post("/tables", (req, res) => {
  const name = req.newReservation.name;
  const phoneNumber = req.newReservation.phoneNumber;
  const email = req.newReservation.email;
  const id = req.newReservation.id;
  restaurant.addReservation(name, phoneNumber, email, id);
})

app.get("/tables", (req, res) => {
  res.json(restaurant.reservations);
});

app.get("/waitlst", (req, res) => {
  res.json(waitlist.reservations); 
});