import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const authContext = useContext(AuthContext);

  console.log(authContext.state.user);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Button style={{ color: "white" }} href='home'>
              ROBOHASH
            </Button>
          </Typography>

          <Button color='inherit'>
            {authContext.state.user ? authContext.state.user.email : "Sign Up"}
          </Button>

          <Button color='inherit'>
            {authContext.state.user ? "LOGOUT" : "LOGIN"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
