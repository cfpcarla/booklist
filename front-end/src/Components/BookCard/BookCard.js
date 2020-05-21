import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddBookPage from "../AddBookPage/AddBookPage";
import BookCardList from "../BookCardList/BookCardList";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function BookCard(props) {
  const classes = useStyles();

  const addBook = body =>
    fetch("http://localhost:8080/books/create", {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(json => console.log(json));

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={
          props.image
            ? props.image
            : "https://s26162.pcdn.co/wp-content/uploads/2018/12/184224_1326895.794x1200_q95_crop-smart_upscale.jpg"
        }
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>{props.author}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addBook(props)}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
