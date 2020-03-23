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
console.log(dbParams.database)
const db = new Pool(dbParams);
db.connect();

//GET
app.get("/books", (request, response) => {
  db.query('SELECT * FROM books;')
    .then(data => {
      const books = data.rows;
      response.json({ books });
    })
});


//PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


//Post books from the API and send to the database
app.post("/books/create", (request, response) => {
  const { title, author, isbn } = request.body;
  console.log(request.body)

  //if()
  db.query(`INSERT INTO books(title, author, isbn) VALUES($1,$2,$3) RETURNING *;`,
    [title, author, isbn])
    .then(data => {
      const newbook = data.rows[0];
      response.json({ book: newbook });
    })
    .catch((error) => {
      console.log({ error });
      response.status(500).json({ error });
    })
});


