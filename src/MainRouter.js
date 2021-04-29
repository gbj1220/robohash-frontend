import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/home' component={Home} />
      </Switch>
    </>
  );
}

export default MainRouter;
