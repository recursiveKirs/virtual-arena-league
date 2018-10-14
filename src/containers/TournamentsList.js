import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./TournamentsList.css";

export default class TournamentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      tournaments: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const tournaments = await this.Tournaments();
      this.setState({ tournaments });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }
  
  Tournaments() {
    // Returns notes from aws-amplify
    // return API.get("notes", "/notes"); 
    return []
  }

  renderTournamentsList(tournaments) {
    return [{}].concat(tournaments).map(
        (tournament, i) =>
          i !== 0
            ? <LinkContainer
                key={tournament.tournamentId}
                to={`/tournaments/${tournament.tournamentId}`}
              >
                <ListGroupItem header={tournament.content.trim().split("\n")[0]}>
                  {"Created: " + new Date(tournament.createdAt).toLocaleString()}
                </ListGroupItem>
              </LinkContainer>
            : <LinkContainer
                key="new"
                to="/CreateTournament"
              >
                <ListGroupItem>
                  <h4>
                    <b>{"\uFF0B"}</b> Create a new tournament
                  </h4>
                </ListGroupItem>
              </LinkContainer>
      );
  }

  handleTournamentClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Tournaments</h1>
      </div>
    );
  }

  renderTournaments() {
    return (
      <div className="tournaments">
        <PageHeader>Your Tournaments</PageHeader>
        <ListGroup>
          {this.renderTournamentsList(this.state.tournaments)}
          {/* {!this.state.isLoading && this.renderTournamentsList(this.state.tournaments)} */}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="TournamentsList">
        {this.renderTournaments()}
        {/* {this.props.isAuthenticated ? this.renderTournaments() : this.renderLander()} */}
      </div>
    );
  }
}