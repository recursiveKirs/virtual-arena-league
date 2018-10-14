import React, { Component } from "react";
import { Carousel, Jumbotron, Button } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Virtual Arena League</h1>
          <p>A platform for discovering and organizing competitive eSports Tournaments for everyone.</p>
          <Carousel>
            <Carousel.Item>
              <img alt="advertisement 1" src="advertisement1.png" />
              <Carousel.Caption>
                <h3>First advertisement</h3>
                <p>Making money from first advertisement.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="advertisement 2" src="advertisement2.png" />
              <Carousel.Caption>
                <h3>Second Advertisement</h3>
                <p>Making money from second advertisement</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="advertisement 3" src="advertisement3.png" />
              <Carousel.Caption>
                <h3>Third advertisement</h3>
                <p>Making money from third advertisement.</p>
              </Carousel.Caption>
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