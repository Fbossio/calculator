import React from "react";
import classes from "./Display.module.css";

const Display = ({ value }) => {
  return (
    <div className={classes.display}>
      <p className={classes.numbers}>{value}</p>
    </div>
  );
};

export default Display;
