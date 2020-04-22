import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import BookCardList from "./Components/BookCardList/BookCardList";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import MenuBook from "@material-ui/icons/MenuBook";
import Toolbar from "@material-ui/core/Toolbar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Avatar className={classes.avatar}>
            <MenuBook />
          </Avatar>
          <Typography variant="h5" color="inherit" noWrap>
            BookList
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              “I do believe something very magical can happen when you read a
              book.” – J.K. Rowling
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center"></Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <BookCardList />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

// axios({
//   method: "get",
//   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${request.body.address}&key=${apiKey}`,
//   responseType: "json"
// }).then((locationResponse) => {
//   console.log("gmap response", locationResponse.data);
//   const { lat, lng } = locationResponse.data.results[0].geometry.location;
//   db.createPost(
//     request.body.title,
//     request.body.autor,
//     request.body.isbn,
//   )
//     .then(({ rows: newPosts }) => {
//       response.json(newPosts);
//     })
//     .catch(error => console.log(error));
// });

// useEffect(() => {
//   setUser(JSON.parse(localStorage.getItem('user')));
//   getPosts();
// }, []); //make a function to get called after a new post
