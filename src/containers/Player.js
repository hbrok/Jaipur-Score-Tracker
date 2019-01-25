import React, { Component } from "react";

import Button from "components/Button";
import Pencil from "icons/Pencil";

class Player extends Component {
  isActivePlayer() {
    const { playerCount, activePlayer } = this.props;
    return playerCount === activePlayer;
  }

  render() {
    const { player, showScore, onClick } = this.props;
    let score = "";

    if (showScore) {
      score = <div>{player.score} points</div>;
    }

    return (
      <div className="player">
        <div className="player-name" contentEditable>
          {player.name}
          <Pencil />
        </div>
        {score}
        <Button
          text={this.isActivePlayer() ? "End Sell" : "Sell"}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default Player;
