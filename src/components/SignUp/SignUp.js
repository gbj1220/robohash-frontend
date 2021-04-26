import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
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

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl error={firstNameInputError}>
                <TextField
                  name='First Name'
                  id='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e)}
                  label='First Name'
                  autoComplete='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  autoFocus
                />
                <FormHelperText>
                  {lastNameInputError && lastNameInputErrorMessage}
                </FormHelperText>
                <FormHelperText>
                  {firstNameInputError && firstNameInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <TextField
                  name='Last Name'
                  id='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e)}
                  label='Last Name'
                  autoComplete='lastName'
                  variant='outlined'
                  required
                  fullWidth
                  autoFocus
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={emailInputError}>
                <TextField
                  name='Email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e)}
                  label='Email'
                  autoComplete='email'
                  variant='outlined'
                  required
                  fullWidth
                  autoFocus
                />
                <FormHelperText>
                  {emailInputError && emailInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl error={passwordInputErrorMessage}>
                <TextField
                  name='Password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e)}
                  label='Password'
                  autoComplete='password'
                  variant='outlined'
                  required
                  fullWidth
                  autoFocus
                />
                <FormHelperText>
                  {passwordInputError && passwordInputErrorMessage}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}></Grid>
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
      <Box mt={5}></Box>
    </Container>
  );
}

export default SignUp;
