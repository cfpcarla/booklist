import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "150%"
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function IndexPageBookCard(props) {
  const classes = useStyles();

  return (
    <div>
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
