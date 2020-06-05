import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "178%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  alert: {
    width: "100%"
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function BookCard(props) {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const addBook = body =>
    fetch("http://localhost:8080/books/create", {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(json => {
        console.log(json);
        setOpenAlert(true);
      });

  return (
    <div>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Book added!
        </Alert>
      </Snackbar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
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
              <Button
                size="small"
                color="primary"
                onClick={() => addBook(props)}
              >
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
