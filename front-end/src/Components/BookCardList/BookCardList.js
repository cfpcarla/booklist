import React from "react";
import IndexPageBookCard from "../BookCard/IndexPageBookCard";
import Grid from "@material-ui/core/Grid";
import Async from "react-async";

const loadBooks = () =>
  fetch("http://localhost:8080/books")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export default function BookCardList() {
  return (
    <Async promiseFn={loadBooks}>
      <Async.Loading>Loading...</Async.Loading>
      <Async.Fulfilled>
        {data => {
          return (
            <div>
              <Grid container spacing={3}>
                {data.books.map(bookCard => (
                  <Grid item key={bookCard.id} xs={12} sm={6} md={4}>
                    <IndexPageBookCard
                      title={bookCard.title}
                      author={bookCard.author}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          );
        }}
      </Async.Fulfilled>
      <Async.Rejected>
        {error => `Something went wrong: ${error.message}`}
      </Async.Rejected>
    </Async>
  );
}
