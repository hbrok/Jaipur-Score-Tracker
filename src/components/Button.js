import React from "react";
import "./Button.css";

const Button = props => (
  <button
    className={props.className ? props.className : `button`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
    {props.text}
  </button>
);

export default Button;
