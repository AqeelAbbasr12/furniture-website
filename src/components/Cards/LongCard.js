import React from "react";
import "./LongCard.css";

const LongCard = (props) => {
  return (
    <div className="LongCard">
      <div id="imageDiv">
        <img className="LongCardImage" src={props.img} alt="img" />
      </div>

      <div className="longCard-data" style={{ padding: "40px 80px" }}>
        <p>{props.title}</p>
        <small>{props.text}</small>
      </div>
    </div>
  );
};

export default LongCard;
