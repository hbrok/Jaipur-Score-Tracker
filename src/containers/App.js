import React, { Component } from "react";
import "./App.css";
import tokens from "../data/tokens";
import shuffle from "lodash/shuffle";

import Button from "Button";
import Tokens from "Tokens";
import Player from "Player";
import Trophy from "./../icons/Trophy";

class App extends Component {
  constructor() {
    super();

    const players = [
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 }
    ];

    // Randomize bonus tokens.
    tokens.bonus.bonus3 = shuffle(tokens.bonus.bonus3);
    tokens.bonus.bonus4 = shuffle(tokens.bonus.bonus4);
    tokens.bonus.bonus5 = shuffle(tokens.bonus.bonus5);

    this.state = {
      tokens,
      players,
      currentPlayer: null,
      showScore: false
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
  handleTokenButton(tokensKey, tokenName) {
    const currentPlayer = this.state.currentPlayer;

    // If there is no active player, we want to skip this function.
    if (currentPlayer === null) {
      return;
    }

    let players = Object.assign([], this.state.players);
    let tokensObj = Object.assign([], this.state.tokens);
    let tokens = tokensObj[tokensKey];

    // Pop first token off of token stack & set state
    const tokenValue = tokens[tokenName].pop();

    // Add token value to the active player's score.
    players[currentPlayer].score =
      players[currentPlayer].score + parseInt(tokenValue, 10);

    this.setState({ players });
    this.setState({ tokensObj });
  }

  calculateScore() {
    this.setState({ showScore: !this.state.showScore });
  }

  /**
   * Renders a row of tokens.
   *
   * @param {string} tokenType - Name of token type that matches the key in this.state.tokes
   */
  renderTokensRow(tokenType) {
    return Object.keys(this.state.tokens[tokenType]).map(tokenName => {
      return (
        <Tokens
          key={tokenName}
          name={tokenName}
          values={this.state.tokens[tokenType][tokenName]}
          onClick={() => this.handleTokenButton(tokenType, tokenName)}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jaipur Score Counter</h1>
        </header>

        <div className="tokens-container">
          <div className="tokens-goods">{this.renderTokensRow("goods")}</div>

          <div className="tokens-bonus">
            {this.renderTokensRow("bonus")}
            {this.renderTokensRow("camel")}
          </div>
        </div>

        <div className="player-container">
          {this.state.players.map((player, i) => {
            return (
              <Player
                key={i}
                player={this.state.players[i]}
                playerCount={i}
                activePlayer={this.state.currentPlayer}
                showScore={this.state.showScore}
                onClick={() => this.handlePlayerActionButton(i)}
              />
            );
          })}
        </div>

        <div className="App-toolbar">
          <Button onClick={() => this.calculateScore()}>
            <Trophy />
            {this.state.showScore ? "Hide Scores" : "Scores"}
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
