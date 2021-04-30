import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const AuthHome = React.lazy(() => import("./components/AuthHome/AuthHome"));

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/auth-home' component={AuthHome} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/login' component={Login} />
        <PrivateRoute exact path='/sign-up' component={SignUp} />
        <PrivateRoute exact path='/' component={Login} />
      </Switch>
    </>
  );
}

export default MainRouter;
