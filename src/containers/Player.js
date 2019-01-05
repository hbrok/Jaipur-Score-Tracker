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
        {player.name}
        <br />
        Score: {player.score}
        <br />
        <Button
          text={this.isActivePlayer() ? "End Sell" : "Sell"}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default Player;
