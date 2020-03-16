require("dotenv").config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
// const axios = require("axios");
// const db = require("./lib/db.js");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//home
app.get("/http://localhost:8080/", (request, response) => {
response.send("HEllO");
});

//PORT
app.listen(PORT, () => {
console.log(`Example app listening on port ${PORT}`);
});

//GET books from the API and send to the database
app.get("/http://localhost:8080/", (request, response) => {
  books.googleapis.com
});
//POST book in the screen with axios
