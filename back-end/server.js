require("dotenv").config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev")); // logger
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

//GET
app.get("/books", (request, response) => {
  db.query("SELECT * FROM books;").then(data => {
    const books = data.rows;
    response.json({ books });
  });
});

//PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//Post books from the API and send to the database
app.post("/books/create", (request, response) => {
  const { title, author, isbn, image } = request.body;

  if (title && author && isbn) {
    db.query(
      `INSERT INTO books(title, author, isbn, image_url) VALUES($1,$2,$3,$4) RETURNING *;`,
      [title, author, isbn, image]
    )
      .then(data => {
        const newbook = data.rows[0];
        response.json({ book: newbook });
      })
      .catch(error => {
        console.log({ error });
        response.status(500).json({ error });
      });
  } else {
    return response.status(400).json({
      error:
        "Bad Request. Missing attribute. Title, Author and ISBN are required."
    });
  }
});
