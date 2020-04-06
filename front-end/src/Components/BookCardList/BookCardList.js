import React from 'react';
import BookCard from '../BookCard/BookCard'
import Grid from '@material-ui/core/Grid';
import Async from 'react-async';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const loadBooks = () =>
  fetch("http://localhost:8080/books")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export default function BookCardList() {
  const classes = useStyles();
  return (
    <Async promiseFn={loadBooks}>
      <Async.Loading>Loading...</Async.Loading>
      <Async.Fulfilled>
        {data => {
          return (
            <div>
              {data.books.map(bookCard => (
                <Grid item key={bookCard.id} xs={12} sm={6} md={4}>
                  <BookCard
                  title={bookCard.title}
                  author={bookCard.author} />
                </Grid>
              ))}
            </div>
          )
        }}
      </Async.Fulfilled>
      <Async.Rejected>
        {error => `Something went wrong: ${error.message}`}
      </Async.Rejected>
    </Async>
  );
}