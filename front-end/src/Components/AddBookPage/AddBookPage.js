import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NewBookCardList from "../BookCardList/NewBookCardList";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  }
}));

export default function AddBookPage() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
  });
  const searchBook = term =>
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .then(response =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then(data => {
        setBooks(data.items);
      });

  return (
    <div>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                searchBook("pipoca");
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <br></br>
      <NewBookCardList books={books} />
    </div>
  );
}
