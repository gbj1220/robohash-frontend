import React, { useEffect, useContext } from "react";
import checkToken from "../Hooks/useAuthentication";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    let token = checkToken();
    if (token) {
      authContext.dispatch({ type: "LOGIN", user: token.email });
    } else {
    }
  }, []);

  return (
    <>
      <form className='profile'>
        <div className='container' style={{ textAlign: "center" }}>
          {authContext.state.user.email}
        </div>
      </form>
    </>
  );
};

export default Profile;
