import React, { Component } from "react";
import "./Tokens.css";

import Diamond from "./../icons/Diamond";
import Cloth from "./../icons/Cloth";
import Gold from "./../icons/Gold";
import Leather from "./../icons/Leather";
import Spice from "./../icons/Spice";
import Silver from "./../icons/Silver";

const components = {
  cloth: Cloth,
  gold: Gold,
  leather: Leather,
  spice: Spice,
  silver: Silver,
  diamond: Diamond
};

class Token extends Component {
  renderTokens() {
    const { name, values, onClick } = this.props;
    const Icon = components[name];

    return values.map((value, i) => {
      return (
        <div key={i} className={`token -${name}`} onClick={onClick}>
          <Icon />

          <div className="token-value -right">{value}</div>
          <div className="token-value -left">{value}</div>
          <div className="token-value -top">{value}</div>
          <div className="token-value -bottom">{value}</div>
        </div>
      );
    });
  }

  render() {
    const { onClick } = this.props;

    return <div className={`token-wrapper`}>{this.renderTokens()}</div>;
  }
}

export default Token;
