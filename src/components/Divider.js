import React from "react";

const Divider = props => (
  <div className="Divider">
    <span>{props.children}</span>
    <span className="Divider-bar" />
  </div>
);

export default Divider;
