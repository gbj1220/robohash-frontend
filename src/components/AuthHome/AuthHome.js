import React, { useEffect, useContext, useState } from "react";
import useAuthenticationHooks from "../Hooks/useAuthentication";
import { AuthContext } from "../context/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
require("dotenv").config();

function AuthHome(props) {
  const [searchValue, setSearchValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const callApi = () => {
    var options = {
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts/random",
    };

    axios
      .request(options)
      .then(function (response) {
        setApiResponse(response.data.text);
        return apiResponse;
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  const [checkToken] = useAuthenticationHooks();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    callApi();
    let token = checkToken();
    if (token) {
      authContext.dispatch({ type: "LOGIN", user: token.email });
      props.history.push("/auth-home");
    } else {
      props.history.push("/login");
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div
        className='input-group mb-3'
        style={{
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <form className='main-form' onSubmit={handleOnSubmit}>
          <div
            className='card text-center'
            style={{ width: "40rem", height: "20rem", border: "none" }}
          >
            <div className='card-body' style={{ border: "none" }}>
              <h5 className='card-title'>Cat Fact</h5>
              <p className='card-text'>{apiResponse}</p>
              <button
                type='button'
                className='btn btn-info'
                onClick={() => callApi()}
                style={{ alignItems: "center", marginTop: "150px" }}
              >
                Get Fact
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AuthHome;
