import React from "react";
import classes from "./ClearButton.module.css";

const ClearButton = ({ value, onClear }) => {
  return (
    <button className={classes.clear} onClick={onClear}>
      {value}
    </button>
  );
};

export default ClearButton;
