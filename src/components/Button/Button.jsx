import React, { Component } from "react";
import classes from "./Button.module.css";

class Button extends Component {
  render() {
    const { value, onInput } = this.props;
    let buttonStyle =
      isNaN(value) && value !== "."
        ? `${classes.btn} ${classes.oper}`
        : `${classes.btn}`;

    return (
      <button className={buttonStyle} onClick={onInput}>
        {value}
      </button>
    );
  }
}

export default Button;
