import React, { useState, useEffect } from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
// import axios from "axios";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  paper: {
    height: "100%",
    width: "100%",
    textAlign: "left",
  }
}));

export default function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [show, popupState] = useState(false);
  const [classicModal, setClassicModal] = useState(false);
  //const [mode, setMode] = useState('view')
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  // const getPosts = () => {
  //   axios.get(`/api/posts`)
  //     .then(res => {
  //       setPosts(res.data);
  //     });
  // }

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('user')));
  //   getPosts();
  // }, []); //make a function to get called after a new post

  function SideColumn() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <div className={classes.paper}>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
          </div>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div background="black">
      <header>
        <NavBar
          user={user}
          setUser={setUser}
          setClassicModal={setClassicModal}
          popupState={popupState} />
      </header>
      {/*=======================================================*/}
      {/* <div>
        <PopupLogin
          user={user}
          setUser={setUser}
          error={error}
          setError={setError}
          classicModal={classicModal}
          setClassicModal={setClassicModal}
          show={show}/>
      </div> */}
      {/*=======================================================*/}

      <Container className={classes.root} >
        <Grid
          container
          direction="row"
          justify="flex-start" //try justify
          alignItems="stretch">
          <Container item maxWidth="sm" padding="0">
          </Container>
          <Container item xs={6} maxWidth="sm">
            <SideColumn />
          </Container>
        </Grid>
      </Container>
    </div>
  );
}