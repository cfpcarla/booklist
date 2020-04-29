import React from "react";
import BookCard from "../BookCard/BookCard";
import Grid from "@material-ui/core/Grid";

export default function NewBookCardList({ books }) {
  return (
    <Grid container spacing={3}>
      {books.map(book => (
        <Grid item xs={12} sm={6} md={4}>
          <BookCard
            title={book.volumeInfo.title}
            author={
              book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""
            }
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
