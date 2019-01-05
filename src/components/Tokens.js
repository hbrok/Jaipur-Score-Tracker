import React, { Component } from "react";
import "./Tokens.css";
import Diamond from "icons/Diamond";

class Token extends Component {
  renderTokens() {
    const { name, values, onClick } = this.props;

    return values.map((value, i) => {
      return (
        <div key={i} className={`token -${name}`} onClick={onClick}>
          {name}

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
