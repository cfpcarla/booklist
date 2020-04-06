import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BookCard() {
  const classes = useStyles();

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
      <Card className={classes.card} >
      {/* <form onSubmit={handleSubmit}> */}
        <CardMedia
          className={classes.cardMedia}
          image="https://s26162.pcdn.co/wp-content/uploads/2018/12/184224_1326895.794x1200_q95_crop-smart_upscale.jpg"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Title
   </Typography>
          <Typography>
            This is a media card. You can use this section to describe the content.
   </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
   </Button>
        </CardActions>
        {/* </form> */}
      </Card>
    </React.Fragment>
  )
}