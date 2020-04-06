import React from 'react';
import BookCard from '../BookCard/BookCard'
import Grid from '@material-ui/core/Grid';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BookCardList() {

  //   function handleSubmit(e) {
//     e.preventDefault();
//   axios({
//     method: "get",
//     url: "http://localhost:8080/books",
//     responseType: "json"
//   }).then((books) => {
//     console.log(books)
//   }).catch(error => console.log(error));
// }

  return (
    <React.Fragment >
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <BookCard />
        </Grid>
      ))}
    </React.Fragment >
  );
 }