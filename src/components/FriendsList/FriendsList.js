import React, { useEffect, useContext, useState } from "react";
import checkToken from "../Hooks/useAuthentication";
import { AuthContext } from "../context/AuthContext";
import useAuthenticationHooks from "../Hooks/useAuthentication";
import useInputHooks from "../Hooks/useInputHooks";
import useEmailHooks from "../Hooks/useEmailHooks";
import axios from "axios";
import jwtDecode from "jwt-decode";

const FriendsList = (props) => {
  const authContext = useContext(AuthContext);

  const [friendsArray, setFriendsArray] = useState([]);

  const [firstName, setFirstName] = useInputHooks();
  const [lastName, setLastName] = useInputHooks();
  const [email, setEmail] = useEmailHooks();
  const [checkToken] = useAuthenticationHooks();

  useEffect(async () => {
    let token = checkToken();
    if (token) {
      authContext.dispatch({ type: "LOGIN", user: token.email });
    } else {
      props.history.push("/login");
    }
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    addFriend();
    getFriendsList();
  };

  const addFriend = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    try {
      const payload = await axios.post(
        "http://localhost:3001/friends/create-friend",
        {
          firstName,
          lastName,
          email,
        },
        {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log(payload.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getFriendsList = async () => {
    try {
      let getFriendArray = await axios.get(
        "http://localhost:3001/friends/get-friends-list"
      );
      setFriendsArray(getFriendArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form className='friends-list' onSubmit={handleOnSubmit}>
        <div className='container' style={{ textAlign: "center" }}>
          <input
            type='text'
            value={firstName}
            className='form-control'
            placeholder='First Name'
            onChange={(e) => setFirstName(e)}
          />
          <input
            type='text'
            value={lastName}
            className='form-control'
            placeholder='Last Name'
            onChange={(e) => setLastName(e)}
          />
          <input
            type='email'
            value={email}
            className='form-control'
            placeholder='Email Address'
            onChange={(e) => setEmail(e)}
          />
          <div>
            <div>
              <img src='' />
            </div>
            <button className='btn btn-info' type='submit'>
              Submit
            </button>
            <div className='card text-center' style={{ width: "18rem" }}>
              <div className='card-body'>
                <h5 className='card-title'>Contact</h5>
                <p className='card-text'>
                  {friendsArray.map((item, index) => {
                    console.log(item);
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FriendsList;
