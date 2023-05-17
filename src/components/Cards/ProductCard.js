import React from "react";
import "./ProductCard.css";

import { FiPlus } from "react-icons/fi";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <a href="/showproduct">
        <div className="img-holder">
          <div className="blackhover">
            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "350px",
              }}
            >
              <FiPlus size={50} color={"white"} />
            </div>
          </div>
          <img src={props.img} alt="img" />
        </div>
      </a>

      <a href="/showproduct">
        <h6>{props.title}</h6>
      </a>
    </div>
  );
};

export default ProductCard;
