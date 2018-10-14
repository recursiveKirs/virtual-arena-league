import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./CreateTournament.css";

export default class CreateTournament extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: ""
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
  }

  render() {
    return (
      <div className="CreateTournament">  
        <div className="Lander">
            <h2>Create a Tournament</h2>
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="content">
                <FormControl
                    onChange={this.handleChange}
                    value={this.state.content}
                    componentClass="textarea"
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