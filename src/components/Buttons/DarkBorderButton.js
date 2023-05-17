import React from "react";
import "./DarkBorderButton.css";

const DarkBorderButton = (props) => {
  return (
    <div className="DarkBorderButton">
      <button className="btn">{props.title}</button>
    </div>
  );
};

export default DarkBorderButton;
