import React, { Component } from "react";
import "./App.css";
import tokens from "../data/tokens";

import Tokens from "Tokens";
import Button from "Button";
import Player from "Player";

class App extends Component {
  constructor() {
    super();

    this.handleTokenButton = this.handleTokenButton.bind(this);
    this.handleStartSellButton = this.handleStartSellButton.bind(this);

    const players = [
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 }
    ];

    const currentPlayer = false;

    this.state = {
      tokens,
      players,
      currentPlayer
    };
  }

  handleStartSellButton(playerIndex) {
    this.setState({ currentPlayer: playerIndex });
  }

  handleEndSellButton() {
    this.setState({ currentPlayer: false });
  }

  handleTokenButton(face) {
    const currentPlayer = this.state.currentPlayer;

    console.log(currentPlayer);

    if (currentPlayer !== 1 || currentPlayer !== 0) {
      const players = this.state.players;
      const goodsTokens = Array.from(this.tokens.goods);

      goodsTokens.forEach(token => {
        if (token.tokens.length > 0 && token.name === face) {
          players[this.state.currentPlayer].push(token.tokens.pop());
        }
      });

      this.setState({ players, goodsTokens });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="tokens-container">
          {Object.keys(this.state.tokens.goods).map(tokenName => {
            return (
              <Tokens
                key={tokenName}
                name={tokenName}
                values={this.state.tokens.goods[tokenName]}
                onClick={this.handleTokenButton}
              />
            );
          })}
        </div>

        {this.state.players.map((player, i) => {
          return (
            <Player player={this.state.players[i]}>
              {/* {`Player ${this.state.currentPlayer + 1} Selling`}<br /> */}
              <Button
                text={
                  this.state.currentPlayer === i ? "End Sell" : "Start Sell"
                }
                onClick={
                  this.state.currentPlayer === i
                    ? () => this.handleStartSellButton(i)
                    : () => this.handleEndSellButton()
                }
                disabled={this.state.currentPlayer === i}
              />
            </Player>
          );
        })}
      </div>
    );
  }
}

export default App;
