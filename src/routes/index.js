import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SingIn from "../pages/SingIn";
import SignUp from "../pages/SingUp";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
