import React, { Component } from "react";
import "./Player.css";

import Button from "Button";

class Player extends Component {
  render() {
    const { player, playerCount } = this.props;

    return (
      <div className="player-container">
        {/* {this.props.children}

        <div className="player-tokens">
          {player.map(token => {
            return (
              <div className={`token -small -${token.face}`}>{token.value}</div>
            );
          })}
        </div> */}

        {/* {`Player ${this.state.currentPlayer + 1} Selling`}<br /> */}
        <Button
          text={
            this.state.currentPlayer === playerCount ? "End Sell" : "Start Sell"
          }
          onClick={
            this.state.currentPlayer === playerCount
              ? () => this.handleStartSellButton(playerCount)
              : () => this.handleEndSellButton()
          }
          disabled={this.state.currentPlayer === playerCount}
        />
      </div>
    );
  }
}

export default Player;
