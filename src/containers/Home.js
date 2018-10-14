import React, { Component } from "react";
import { Jumbotron, Carousel, Button } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <img className="d-block w-100" src="./images/advertisement1.png" alt="First advertisement" />
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
          <Jumbotron id="fortnite_jumbotron">
            <div>
              <h1 class="game_information">Fortnite</h1>
            </div>
            <div>
              <p class="game_information"> A battle royal game</p>
            </div>
            <div>
              <p>
                <Button bsStyle="primary" class="game_button">Fortnite</Button>
              </p>
            </div>
          </Jumbotron>
          <Jumbotron id="league_jumbotron">
            <div>
              <h1 class="game_information">League of Legends</h1>
            </div>
            <div>
              <p class="game_information">A multiplayer online battle arena game</p>
            </div>
            <div>
              <p>
                <Button bsStyle="primary" class="game_button">League of Legends</Button>
              </p>
            </div>
          </Jumbotron>
          <Jumbotron id="csgo_jumbotron">
          <div>
              <h1 class="game_information">Counter Strike: Global Offensive</h1>
            </div>
            <div>
              <p class="game_information"> A first-person shooter game.</p>
            </div>
            <div>
              <p>
                <Button bsStyle="primary" class="game_button">CS:GO</Button>
              </p>
            </div>
          </Jumbotron>
          <Jumbotron id="dota2_jumbotron">
            <div>
              <h1 class="game_information">Dota 2</h1>
            </div>
            <div>
              <p class="game_information">A multiplayer online battle arena game</p>
            </div>
            <div>
              <p>
                <Button bsStyle="primary" class="game_button">Dota 2</Button>
              </p>
            </div>
          </Jumbotron>
          <Jumbotron id="starcraft2_jumbotron">
            <div>
              <h1 class="game_information">Startcraft II</h1>
            </div>
            <div>
              <p class="game_information">A real-time strategy game</p>
            </div>
            <div>
              <p>
                <Button bsStyle="primary" class="game_button">Starcraft II</Button>
              </p>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}