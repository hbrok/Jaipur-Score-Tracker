import React, { Component } from "react";
import "./Player.css";

import Button from "Button";

class Player extends Component {
  isActivePlayer() {
    const { playerCount, activePlayer } = this.props;
    return playerCount === activePlayer;
  }

  render() {
    const { player, onClick } = this.props;

    return (
      <div className="player">
        <div>{player.name}</div>
        <div>Score: {player.score}</div>
        <Button
          text={this.isActivePlayer() ? "End Sell" : "Sell"}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default Player;
