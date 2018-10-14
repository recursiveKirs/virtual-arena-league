import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewTournament.css";
import { API } from "aws-amplify";

export default class NewTournament extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      tournamentName: "",
      game: "",
      content: "",
      prizes: "",
      participants: []
    };
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      const attachment = this.file
        ? await s3Upload(this.file)
        : null;
  
      await this.createTournament({
        attachment,
        content: this.state.content
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  createTournament(tournament) {
    return API.post("tournaments", "/tournaments", {
      body: tournament
    });
  }

  render() {
    return (
      <div className="NewTournament">  
        <div className="Lander">
            <h2>Create a Tournament</h2>
            <form onSubmit={this.handleSubmit}>

                

                <FormGroup controlId="tournamentName">
                  <FormControl
                      onChange={this.handleChange}
                      value={this.state.tournamentName}
                      placeholder="Enter Tournament Name"
                      componentClass="input"
                  />
                </FormGroup>

                <FormGroup controlId="game">
                  <ControlLabel>Select a game</ControlLabel>
                  <FormControl 
                      onChange={this.handleChange}
                      value={this.state.game}
                      componentClass="select" 
                      placeholder="select">
                    <option value="select">select</option>
                    <option value="fortnite">Fortnite</option>
                    <option value="league_of_legends">League of Legends</option>
                    <option value="counter_strike">Counter Strike: Global Offensive</option>
                    <option value="dota_2">Dota 2s</option>
                    <option value="starcraft_2">Starcraft II</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="content">
                  <ControlLabel>Content</ControlLabel>
                  <FormControl
                      onChange={this.handleChange}
                      value={this.state.content}
                      componentClass="textarea"
                  />
                </FormGroup>

                <FormGroup controlId="prizes">
                  <FormControl
                      onChange={this.handleChange}
                      value={this.state.prizes}
                      placeholder="Enter prizes"
                      componentClass="input"
                  />
                </FormGroup>

                <FormGroup controlId="file">
                <ControlLabel>Attachment</ControlLabel>
                <FormControl onChange={this.handleFileChange} type="file" />
                </FormGroup>

                <LoaderButton
                block
                bsStyle="primary"
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                isLoading={this.state.isLoading}
                text="Create"
                loadingText="Creating…"
                />
            </form>
        </div>
      </div>  
    );
  }
}