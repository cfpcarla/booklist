import React from "react";
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
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AddBookPage from "./Components/AddBookPage/AddBookPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
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
  textField: {
    width: "100%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Avatar className={classes.avatar}>
            <MenuBook />
          </Avatar>
          <Typography variant="h5" color="inherit" noWrap>
            BookList
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Library" {...a11yProps(0)} />
            <Tab label="Add a new book" {...a11yProps(1)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <main>
        <TabPanel value={value} index={0}>
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
            <BookCardList />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddBookPage />
        </TabPanel>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* End footer */}
        <Typography variant="body1" color="textSecondary" align="center">
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/carla-fabricia-medeiros/?locale=en_US"
          >
            Linkedin
          </Link>
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center">
          <Link color="inherit" href="https://github.com/cfpcarla">
            Github
          </Link>
        </Typography>
      </footer>
    </div>
  );
}
