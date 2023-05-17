import React, { useState } from "react";
import "./kitchen.css";

/*Components*/
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";
import ProductCard from "../../../components/Cards/ProductCard";

/*Icons*/
import { RiArrowRightSLine } from "react-icons/ri";

/*Image Data*/
import chair1 from "../../../assets/images/chair.jpg";
import chair2 from "../../../assets/images/chair2.jpg";
import chair3 from "../../../assets/images/chair3.jpg";
import chair4 from "../../../assets/images/chair4.jpg";
import chair5 from "../../../assets/images/chair5.jpg";
import chair6 from "../../../assets/images/chair6.jpg";
import chair7 from "../../../assets/images/chair7.jpg";
import chair8 from "../../../assets/images/chair8.jpg";
import chair9 from "../../../assets/images/chair9.jpg";

const Kitchen = (props) => {
  const ProductCardLoopData = [
    {
      id: 1,
      img: chair1,
      title: "ABBOTSLY CHAIR",
    },
    {
      id: 2,
      img: chair2,
      title: "BARNEY CHENILLE SOFA",
    },
    {
      id: 3,
      img: chair3,
      title: "SCAPE SOFA GREY",
    },
    {
      id: 4,
      img: chair4,
      title: "SAN MARINO OCCASIONAL CHAIR",
    },
    {
      id: 5,
      img: chair5,
      title: "ABBEYDALE KING BED",
    },
    {
      id: 1,
      img: chair9,
      title: "ABBOTSLY CHAIR",
    },
  ];

  const arrayLength = ProductCardLoopData.length;

  const ProductCardLoop = (props) => {
    return (
      <div className="ProductCardLoop d-flex flex-wrap">
        {ProductCardLoopData.map((items, index) => (
          <div
            style={{ marginLeft: "50px" }}
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <ProductCard
              title={items.title}
              img={items.img}
              key={items.id.toString()}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="kitchen container-fluied">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={2.1} />
      </div>
      <div
        className="container-fluied header d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="container ">
          <div className="text-white text-center">
            <h1>Kitchen</h1>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/*Products */}
      <div className="container-fluied ourProducts">
        <div
          className="container ourProject-data"
          style={{
            marginBottom: "120px",
            paddingLeft: "45px",
          }}
        >
          <div>
            <a href="/">
              <small className="pearl_link">Pearl Furniture</small>
            </a>
            <RiArrowRightSLine
              className="mx-2"
              size={16}
              color={"var(--grey-color)"}
            />
            <small className="title">{props.title}</small>
          </div>

          <hr style={{ marginRight: "80px" }} />
        </div>

        <div className="container ourProducts-items">
          <ProductCardLoop />
        </div>

        <div
          className="container "
          style={{
            marginBottom: "120px",
            paddingLeft: "45px",
          }}
        >
          <hr style={{ marginRight: "80px" }} />

          <div
            className="d-flex"
            style={{ alignItems: "center", marginTop: "25px" }}
          >
            <button
              onClick={() => console.log(arrayLength)}
              type="button"
              class="btn btn-circle btn-lg btn-active"
              style={{ marginRight: "10px" }}
            >
              1
            </button>
            <button type="button" class="btn btn-circle btn-lg">
              2
            </button>
            <RiArrowRightSLine
              className="mx-2"
              size={22}
              color={"var(--grey-color)"}
            />
          </div>
        </div>
      </div>
      {/*Products ends*/}

      {/*Footer*/}
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default Kitchen;
