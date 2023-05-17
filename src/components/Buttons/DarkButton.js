import React from "react";
import "./DarkButton.css";

/*Icons*/
import { RiArrowRightSLine } from "react-icons/ri";

const DarkButton = (props) => {
  if (props.withBorder === true) {
    return (
      <div className="DarkButton">
        <button
          className="btn DarkButton-btn-border"
          style={{
            padding: "12px 24px",
            borderRadius: "0",
            backgroundColor: "var(--darkGrey-color)",
            color: "white",
          }}
        >
          {props.title}
          <RiArrowRightSLine
            className="DarkButtonIcon-border"
            style={{ marginLeft: "5px", marginBottom: "4px" }}
            size={23}
            color={"white"}
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="DarkButton">
        <button
          className="btn DarkButton-btn"
          style={{
            padding: "6px 20px",
            borderRadius: "0",
            backgroundColor: "var(--darkGrey-color)",
            color: "white",
          }}
        >
          {props.title}
          <RiArrowRightSLine
            className="DarkButtonIcon"
            style={{ marginLeft: "5px", marginBottom: "4px" }}
            size={23}
            color={"white"}
          />
        </button>
      </div>
    );
  }
};

export default DarkButton;
