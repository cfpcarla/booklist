import React from "react";
import BookCard from "../BookCard/BookCard";
import Grid from "@material-ui/core/Grid";
import Async from "react-async";

const loadBooks = () =>
  fetch("http://localhost:8080/books")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

// const useStyles = makeStyles(theme => ({
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column"
//   },
//   cardMedia: {
//     paddingTop: "56.25%" // 16:9
//   },
//   cardContent: {
//     flexGrow: 1
//   }
// }));

export default function BookCardList() {
  // const classes = useStyles();

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
                    <BookCard title={bookCard.title} author={bookCard.author} />
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
