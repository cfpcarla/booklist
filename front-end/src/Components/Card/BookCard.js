import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    padding: theme.spacing(2, 3, 4),

  }
}));

export default function BookCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png"
          title="Making things happen"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Making things happen
    </Typography>
          <Typography variant="body2" component="h3">
            Elizabet
    </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
    </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
