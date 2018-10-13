import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
// import CreateTournament from "./containers/CreateTournament";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    {/* <AppliedRoute path="/notes/new" exact component={CreateTournament} props={childProps} /> */}
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;