import React, { Component } from "react";
import { Jumbotron, Carousel, Button, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1 id="home_main_header">Virtual Arena League</h1>
          <p>A platform for discovering and organizing competitive eSports Tournaments for everyone.</p>
          <Carousel id="home_carousel">
            <Carousel.Item>
              <a href="https://www.epicgames.com/fortnite/en-US/fall-skirmish">
              <div id="carousel_image1">
              </div>
              </a>
            </Carousel.Item>
            
            <Carousel.Item>
              <a href="https://www.lolesports.com/en_US/worlds">
              <div id="carousel_image2">
              </div>
              </a>
            </Carousel.Item>
            
            <Carousel.Item>
              <a href="https://pro.eslgaming.com/csgo/proleague/">
              <div id="carousel_image3">
              </div>
              </a>
            </Carousel.Item>
          </Carousel>
 
          <LinkContainer key="new" to="/Fortnite">
          <Jumbotron id="fortnite_jumbotron" >
          </Jumbotron>
          </LinkContainer>

          <LinkContainer key="new" to="/Fortnite">
          <Jumbotron id="league_jumbotron">
          </Jumbotron>
          </LinkContainer>

          <LinkContainer key="new" to="/Fortnite">
          <Jumbotron id="starcraft2_jumbotron">
          </Jumbotron>
          </LinkContainer>

          <LinkContainer key="new" to="/Fortnite">
          <Jumbotron id="dota2_jumbotron">
          </Jumbotron>
          </LinkContainer>

          <LinkContainer key="new" to="/Fortnite">
          <Jumbotron id="csgo_jumbotron">
          </Jumbotron>
          </LinkContainer>
        </div>
      </div>
    );
  }
}