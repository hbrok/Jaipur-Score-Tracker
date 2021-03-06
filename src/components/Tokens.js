import React, { Component } from "react";

import Diamond from "icons/Diamond";
import Cloth from "icons/Cloth";
import Gold from "icons/Gold";
import Leather from "icons/Leather";
import Spice from "icons/Spice";
import Silver from "icons/Silver";
import Bonus3 from "icons/Bonus3";
import Bonus4 from "icons/Bonus4";
import Bonus5 from "icons/Bonus5";
import Camel from "icons/Camel";

const components = {
  cloth: Cloth,
  gold: Gold,
  leather: Leather,
  spice: Spice,
  silver: Silver,
  diamond: Diamond,
  bonus3: Bonus3,
  bonus4: Bonus4,
  bonus5: Bonus5,
  camel: Camel
};

class Token extends Component {
  /**
   * Checks if the token is a bonus token.
   *
   * @param {string} name - Token name
   * @param {string|number} value - Token value
   */
  displayValue(name, value) {
    if (name === "bonus3" || name === "bonus4" || name === "bonus5") {
      return "?";
    } else {
      return value;
    }
  }

  renderTokens() {
    const { name, values, onClick } = this.props;

    return values.map((value, i) => {
      const displayValue = this.displayValue(name, value);

      return (
        <div key={i} className={`token -${name}`} onClick={onClick}>
          <div className="token-value">{displayValue}</div>
        </div>
      );
    });
  }

  render() {
    const { name, onClick } = this.props;
    const Icon = components[name];

    return (
      <div className={`token-wrapper -${name}`}>
        <Icon />
        {this.renderTokens()}
      </div>
    );
  }
}

export default Token;
