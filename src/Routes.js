import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import CreateTournament from "./containers/CreateTournament";
import TournamentsList from "./containers/TournamentsList"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/CreateTournament" exact component={CreateTournament} props={childProps} />
    <AppliedRoute path="/TournamentsList" exact component={TournamentsList} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />

    
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;