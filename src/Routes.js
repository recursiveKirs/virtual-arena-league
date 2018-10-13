import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    { /* Finally, catch all unmatched routes */ }
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>;