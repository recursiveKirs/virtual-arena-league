import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Tournaments.css";

export default class Tournaments extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      isDeleting: null,  
      tournament: null,
      tournamentName: "",
      game: "",
      content: "",
      prizes: "",
      participants: [],
      attachmentURL: null
    };
  }

  async componentDidMount() {
    try {
      let attachmentURL;
      const tournament = await this.getTournament();
      const { tournamentName, game, content, prizes, participants, attachment } = tournament;

      if (attachment) {
        attachmentURL = await Storage.vault.get(attachment);
      }

      this.setState({
        tournament,
        tournamentName,
        game,
        content,
        prizes,
        participants,
        attachmentURL
      });
    } catch (e) {
      alert(e);
    }
  }

  getTournament() {
    return API.get("tournaments", `/tournaments/${this.props.match.params.id}`);
  }

  validateForm() {
    return this.state.content.length > 0;
  }
  
  formatFilename(str) {
    return str.replace(/^\w+-/, "");
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
  }
  
  handleDelete = async event => {
    event.preventDefault();
  
    const confirmed = window.confirm(
      "Are you sure you want to delete this tournament?"
    );
  
    if (!confirmed) {
      return;
    }
  
    this.setState({ isDeleting: true });
  }
  
  render() {
    return (
      <div className="Tournaments">
        {this.state.tournament &&
        <div>
            <div>{this.state.content}</div>
            <div>{this.state.tournamentName}</div>
        </div>
        }
      </div>
    );
  }
}