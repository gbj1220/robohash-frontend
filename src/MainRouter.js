import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Home = React.lazy(() => import("./components/AuthHome/AuthHome"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const FriendsList = React.lazy(() =>
  import("./components/FriendsList/FriendsList")
);
const AuthHome = React.lazy(() => import("./components/AuthHome/AuthHome"));

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/auth-home' component={AuthHome} />
        <PrivateRoute exact path='/friends-list' component={FriendsList} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={Login} />
      </Switch>
    </>
  );
}

export default MainRouter;
