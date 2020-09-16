import React, { Component } from "react";
import * as math from "mathjs";
import Display from "../Display/Display";
import Button from "../Button/Button";
import ClearButton from "../ClearButton/ClearButton";

import classes from "./Calculator.module.css";

class Calculator extends Component {
  state = {
    currentNumber: "0",
  };

  handleInput = (e) => {
    if (e.value !== "=") {
      if (this.state.currentNumber !== "0") {
        this.setState({ currentNumber: this.state.currentNumber + e.value });
      } else {
        let currentNumber = "" + e.value;
        this.setState({ currentNumber });
      }
    }

    if (e.value === "=") {
      try {
        this.setState({
          currentNumber: math.evaluate(this.state.currentNumber),
        });
      } catch (error) {
        this.setState({ currentNumber: "0" });
      }
    }
  };

  handleZero = (e) => {
    let pattern = /^0/;
    if (!pattern.test(this.state.currentNumber)) {
      this.setState({ currentNumber: this.state.currentNumber + e.value });
    }
  };

  handleDot = (e) => {
    if (!/\./.test(this.state.currentNumber)) {
      this.setState({ currentNumber: this.state.currentNumber + e.value });
    }
  };

  handleOperator = (e) => {
    /*
    let index = this.state.currentNumber.length - 1;
    if (
      isNaN(this.state.currentNumber[index]) &&
      this.state.currentNumber[index] !== "." &&
      this.state.currentNumber[index] !== "="
    ) {
      let lastOper = this.state.currentNumber[index];
      this.setState({ currentNumber: this.state.currentNumber + lastOper });
    }*/

    this.setState({ currentNumber: this.state.currentNumber + e.value });
  };

  handleClear = () => {
    this.setState({
      currentNumber: "0",
    });
  };

  /*displayValues = () => {
    if (this.state.currentNumber.length > 1) {
      return this.state.currentNumber.match(/[^0]/g).join("");
    }
    return this.state.currentNumber;
  };*/

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <Display value={this.state.currentNumber} />
        </div>
        <div className={classes.row}>
          <Button value="1" onInput={() => this.handleInput({ value: 1 })} />
          <Button value="2" onInput={() => this.handleInput({ value: 2 })} />
          <Button value="3" onInput={() => this.handleInput({ value: 3 })} />
          <Button
            value="+"
            onInput={() => this.handleOperator({ value: "+" })}
          />
        </div>
        <div className={classes.row}>
          <Button value="4" onInput={() => this.handleInput({ value: 4 })} />
          <Button value="5" onInput={() => this.handleInput({ value: 5 })} />
          <Button value="6" onInput={() => this.handleInput({ value: 6 })} />
          <Button
            value="-"
            onInput={() => this.handleOperator({ value: "-" })}
          />
        </div>
        <div className={classes.row}>
          <Button value="7" onInput={() => this.handleInput({ value: 7 })} />
          <Button value="8" onInput={() => this.handleInput({ value: 8 })} />
          <Button value="9" onInput={() => this.handleInput({ value: 9 })} />
          <Button
            value="x"
            onInput={() => this.handleOperator({ value: "*" })}
          />
        </div>
        <div className={classes.row}>
          <Button value="." onInput={() => this.handleDot({ value: "." })} />
          <Button value="0" onInput={() => this.handleZero({ value: 0 })} />
          <Button value="=" onInput={() => this.handleInput({ value: "=" })} />
          <Button
            value="/"
            onInput={() => this.handleOperator({ value: "/" })}
          />
        </div>
        <div className={classes.row}>
          <ClearButton value="CLEAR" onClear={() => this.handleClear()} />
        </div>
      </div>
    );
  }
}

export default Calculator;
