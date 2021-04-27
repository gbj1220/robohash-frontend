import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useInputHooks from "../Hooks/useInputHooks";
import useEmailHooks from "../Hooks/useEmailHooks";
import usePasswordHooks from "../Hooks/usePasswordHooks";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const [
    firstName,
    setFirstName,
    firstNameInputError,
    firstNameInputErrorMessage,
  ] = useInputHooks();

  const [
    lastName,
    setLastName,
    lastNameInputError,
    lastNameInputErrorMessage,
  ] = useInputHooks();

  const [
    email,
    setEmail,
    emailInputError,
    emailInputErrorMessage,
  ] = useEmailHooks();

  const [
    password,
    setPassword,
    passwordInputError,
    passwordInputErrorMessage,
  ] = usePasswordHooks();

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.post("http://localhost:3001/users/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleOnSubmit}
          href='/login'
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl error={firstNameInputError}>
                <TextField
                  name='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e)}
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoComplete='fname'
                  autoFocus
                />
                <FormHelperText>
                  {firstNameInputError && firstNameInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl error={lastNameInputError}>
                <TextField
                  name='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e)}
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  autoComplete='lname'
                  autoFocus
                />
                <FormHelperText>
                  {lastNameInputError && lastNameInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={emailInputError}>
                <TextField
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e)}
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  type='email'
                  autoComplete='email'
                  autoFocus
                />
                <FormHelperText>
                  {emailInputError && emailInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={passwordInputError}>
                <TextField
                  name='Password'
                  value={password}
                  onChange={(e) => setPassword(e)}
                  variant='outlined'
                  required
                  fullWidth
                  id='password'
                  label='Password'
                  type='password'
                  autoComplete='password'
                  autoFocus
                />
                <FormHelperText>
                  {passwordInputError && passwordInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp;
