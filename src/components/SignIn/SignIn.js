import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import usePasswordHooks from "../Hooks/usePasswordHooks";
import useEmailHooks from "../Hooks/useEmailHooks";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";
import useAuthenticationHooks from "../Hooks/useAuthentication";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const [email, setEmail, emailError, emailErrorMessage] = useEmailHooks();

  const [checkToken] = useAuthenticationHooks();

  const authContext = useContext(AuthContext);

  const [
    password,
    setPassword,
    passwordError,
    passwordErrorMessage,
  ] = usePasswordHooks();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      localStorage.setItem("jwtToken", result.data.jwtToken);

      const decodedToken = jwtDecode(result.data.jwtToken);
      authContext.dispatch({ type: "LOGIN", user: decodedToken.email });

      props.history.push("/auth-home");
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    let token = checkToken();
    if (token) {
      authContext.dispatch({ type: "LOGIN", user: token.email });
      props.history.push("/auth-home");
    } else {
      props.history.push("/login");
    }
    console.log(token);
  }, []);

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
            <FormControl error={emailError}>
              <TextField
                name='email'
                value={email}
                onChange={(e) => setEmail(e)}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                autoFocus
              />
              <FormHelperText>{emailError && emailErrorMessage}</FormHelperText>
            </FormControl>
            <FormControl error={passwordError}>
              <TextField
                name='password'
                value={password}
                onChange={(e) => setPassword(e)}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormHelperText>
                {passwordError && passwordErrorMessage}
              </FormHelperText>
            </FormControl>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              // disabled={isButtonDisabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/sign-up' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
