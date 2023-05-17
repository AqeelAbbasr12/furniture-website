import React from "react";
import "./FillButton.css";

const FillButton = (props) => {
  return (
    <div className="FillButton">
      <button className="btn">{props.title}</button>
    </div>
  );
};

export default FillButton;
