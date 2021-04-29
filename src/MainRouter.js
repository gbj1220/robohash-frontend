import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const AuthHome = React.lazy(() => import("./components/AuthHome/AuthHome"));

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path='/auth-home' component={AuthHome} />
        <PrivateRoute path='/login' component={Login} />
        <PrivateRoute path='/sign-up' component={SignUp} />
        <PrivateRoute path='/' component={Home} />
      </Switch>
    </>
  );
}

export default MainRouter;
