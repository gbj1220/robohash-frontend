import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useAuthenticationHooks from "../Hooks/useAuthentication";
import { NavLink } from "react-router-dom";

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
  const [checkToken, removeToken] = useAuthenticationHooks();

  const logoutFunc = () => {
    authContext.dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("jwtToken");
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <NavLink
              to='/auth-home'
              exact
              className='nav-link'
              activeClassName='active-nav-link'
              style={{ color: "white" }}
            >
              <Button color='inherit'>ROBOHASH</Button>
            </NavLink>
          </Typography>
          {authContext.state.isAuth ? (
            <>
              <NavLink
                to='/profile'
                exact
                className='nav-link'
                activeClassName='active-nav-link'
                style={{ color: "white" }}
              >
                <Button color='inherit'>Profile</Button>
              </NavLink>
              <NavLink
                to='login'
                exact
                className='nav-link'
                activeClassName='active-nav-link'
                style={{ color: "white" }}
              >
                <Button color='inherit' onClick={logoutFunc}>
                  Logout
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to='/sign-up'
                exact
                className='nav-link'
                activeClassName='active-nav-link'
                style={{ color: "white" }}
              >
                <Button color='inherit'>Sign Up</Button>
              </NavLink>
              <NavLink
                to='login'
                exact
                className='nav-link'
                activeClassName='active-nav-link'
                style={{ color: "white" }}
              >
                <Button color='inherit'>Sign In</Button>
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
