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

  const callApi = async () => {
    try {
      const fetchData = await axios.get(
        `https://robohash.p.rapidapi.com/index.php?text=${searchValue}`,
        {
          headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "robohash.p.rapidapi.com",
          },
        }
      );
      setApiResponse(fetchData);
      console.log(apiResponse);
      return apiResponse;
    } catch (e) {
      console.log(e);
    }
  };

  const [checkToken] = useAuthenticationHooks();
  const authContext = useContext(AuthContext);

  useEffect(() => {
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
    console.log(searchValue);
  };

  return (
    <div className='input-group mb-3' style={{ marginLeft: "500px" }}>
      <form className='main-form' onSubmit={handleOnSubmit}>
        <img src={apiResponse} />
        <input
          type='text'
          className='form-control'
          placeholder='Create a robot'
          aria-label='robot-creation-input'
          onChange={(e) => handleOnChange(e)}
        />
        <button
          type='button'
          className='btn btn-info'
          onClick={() => callApi()}
        >
          Get Robot
        </button>
      </form>
    </div>
  );
}

export default AuthHome;
