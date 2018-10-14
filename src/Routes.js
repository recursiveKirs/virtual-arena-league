import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import NewTournament from "./containers/NewTournament";
import TournamentsList from "./containers/TournamentsList"
import Fortnite from "./containers/Fortnite"


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/NewTournament" exact component={NewTournament} props={childProps} />
    <AppliedRoute path="/TournamentsList" exact component={TournamentsList} props={childProps} />
    <AppliedRoute path="/Fortnite" exact component={Fortnite} props={childProps} />
    
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;