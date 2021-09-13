import React from "react";
import "./Button.css";

const Button = (props) => {
    const {buttonText, buttonClass} = props
    return (
        <button className={buttonClass}>{buttonText}</button>
    )
}

export default Button;