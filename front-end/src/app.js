import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SimpleModal from './Components/Modal/SimpleModal';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://s3.amazonaws.com/cdn.leiturinha.com.br/blog/uploads/2017/10/hist%C3%B3ria-do-livro.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();

  axios({
    method: "get",
    url: "http://localhost:8080/books",
    responseType: "json"
  }).then((books) => {
    console.log(books)
  }).catch(error => console.log(error));


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


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={5} className={classes.image} />
      <Grid item xs={12} sm={10} md={7} component={Paper} elevation={6} square>

        <SimpleModal />

      </Grid>
    </Grid>
  );
}