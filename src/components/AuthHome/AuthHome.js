import React, { useEffect, useContext } from "react";
import useAuthenticationHooks from "../Hooks/useAuthentication";
import { AuthContext } from "../context/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function AuthHome(props) {
  var axios = require("axios").default;

  const CallApi = async () => {
    var options = {
      method: "GET",
      url: "https://robohash.p.rapidapi.com/index.php",
      params: { text: "kawasaki" },
      headers: {
        "x-rapidapi-key": "5f2310c1a5mshfe87a4d13294ae6p1224cbjsn998d0ac7748c",
        "x-rapidapi-host": "robohash.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [checkToken] = useAuthenticationHooks();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    let token = checkToken();
    if (token) {
      CallApi();
      authContext.dispatch({ type: "LOGIN", user: token.email });
      props.history.push("/auth-home");
    } else {
      props.history.push("/login");
    }
  }, []);

  return <></>;
}

export default AuthHome;
