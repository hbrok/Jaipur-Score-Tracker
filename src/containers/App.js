import React, { Component } from "react";
import "./App.css";
import tokens from "../data/tokens";

import Tokens from "Tokens";
import Player from "Player";

class App extends Component {
  constructor() {
    super();

    const players = [
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 }
    ];

    this.state = {
      tokens,
      players,
      currentPlayer: null
    };
  }

  /**
   * Handles setting the active player.
   *
   * @param {number} playerIndex - Index of the current player
   */
  handlePlayerActionButton(playerIndex) {
    if (playerIndex === this.state.currentPlayer) {
      this.setState({ currentPlayer: null });
    } else {
      this.setState({ currentPlayer: playerIndex });
    }
  }

  /**
   * When a token group is clicked on, remove the top token and increase the player score.
   *
   * @param {string} tokenName - Key of the token
   */
  handleTokenButton(tokenName) {
    const currentPlayer = this.state.currentPlayer;

    // If there is no active player, we want to skip this function.
    if (currentPlayer === null) {
      return;
    }

    let players = Object.assign([], this.state.players);
    let tokens = Object.assign([], this.state.tokens);

    // Pop first token off of token stack & set state
    const tokenValue = tokens.goods[tokenName].pop();

    // Add token value to the active player's score.
    players[currentPlayer].score =
      players[currentPlayer].score + parseInt(tokenValue, 10);

    this.setState({ players });
    this.setState({ tokens });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jaipur Score Counter</h1>
        </header>

        <div className="tokens-container">
          {Object.keys(this.state.tokens.goods).map(tokenName => {
            return (
              <Tokens
                key={tokenName}
                name={tokenName}
                values={this.state.tokens.goods[tokenName]}
                onClick={() => this.handleTokenButton(tokenName)}
              />
            );
          })}
        </div>

        <div className="player-container">
          {this.state.players.map((player, i) => {
            return (
              <Player
                key={i}
                player={this.state.players[i]}
                playerCount={i}
                activePlayer={this.state.currentPlayer}
                onClick={() => this.handlePlayerActionButton(i)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
