import React from 'react';
import './Button.css';

const Button = (props) => (
    <button
        className={`button ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.text}
    </button>
);

export default Button;
