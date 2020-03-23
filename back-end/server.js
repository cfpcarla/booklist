require("dotenv").config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const axios = require("axios");
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

//GET
app.get("/books", (request, response) => {
  const showBooks = () => {
    return db.query(
      `SELECT * FROM books;`)
  }
  .then(data => {
    const newBook = data.rows[0];
  response.json({showBooks: newBook});
  })
});


//PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


//Post books from the API and send to the database
app.post("/books/create", (request, response) => {
  const titleBook = request.body.title;
  const autorBook = request.body.autor;
  const isbnBook = request.body.isbn;

  //if()
  db.query(`INSERT INTO books(title, autor, isbn) VALUES($1,$2,$3) RETURNING *;`,
    [request.body.title, request.body.autor, request.body.isbn])
    .then(data => {
      const newbook = data.rows[0];
      response.json({ book: newbook });
    })
    .catch((error) => {
      console.log({ error });
      response.status(500).json({ error });

    })

});


