import React from "react";
import BookCard from "../BookCard/BookCard";
import Grid from "@material-ui/core/Grid";

export default function NewBookCardList({ books }) {
  return (
    <Grid container spacing={3}>
      {books.map(book => (
        <Grid
          key={book.volumeInfo.industryIdentifiers[0].identifier}
          item
          xs={12}
          sm={8}
          md={4}
        >
          <BookCard
            title={book.volumeInfo.title}
            author={
              book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""
            }
            isbn={book.volumeInfo.industryIdentifiers[0].identifier}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : null
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}
