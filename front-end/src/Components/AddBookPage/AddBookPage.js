import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  }
}));

export default function AddBookPage() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
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
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
