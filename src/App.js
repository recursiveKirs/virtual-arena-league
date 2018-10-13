import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* ------- Navbar ------- */}
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">Virtual Arena League</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="/tournaments">Tournaments</NavItem>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>

        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
