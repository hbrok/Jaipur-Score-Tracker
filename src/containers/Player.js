import React, { Component } from "react";

import Button from "components/Button";

class Player extends Component {
  isActivePlayer() {
    const { playerCount, activePlayer } = this.props;
    return playerCount === activePlayer;
  }

  render() {
    const { player, showScore, onClick } = this.props;
    let score = "";

    if (showScore) {
      score = <div>Score: {player.score}</div>;
    }

    return (
      <div className="player">
        <div>{player.name}</div>
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
