import React from "react";
import "./BorderButton.css";

const BorderButton = (props) => {
  return (
    <div className="BorderButton">
      <button className="btn">{props.title}</button>
    </div>
  );
};

export default BorderButton;
