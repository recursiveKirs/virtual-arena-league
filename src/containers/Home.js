import React, { Component } from "react";
import { Jumbotron, Carousel, Button, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Virtual Arena League</h1>
          <p>A platform for discovering and organizing competitive eSports Tournaments for everyone.</p>
          <Carousel id="home_carousel">
            <Carousel.Item>
              <div id="carousel_image1">
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="carousel_image2">
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="carousel_image3">
              </div>
            </Carousel.Item>
          </Carousel>
 
          <LinkContainer
                  key="new"
                  to="/Fortnite"
                >
          <Jumbotron id="fortnite_jumbotron" >
          </Jumbotron>
          </LinkContainer>

          <Jumbotron id="league_jumbotron">
          </Jumbotron>

          <Jumbotron id="csgo_jumbotron">
          </Jumbotron>

          <Jumbotron id="dota2_jumbotron">
          </Jumbotron>

          <Jumbotron id="starcraft2_jumbotron">
          </Jumbotron>
          
        </div>
      </div>
    );
  }
}