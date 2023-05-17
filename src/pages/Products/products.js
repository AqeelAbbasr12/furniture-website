import React, { useState } from "react";
import "./products.css";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import ProductCard from "../../components/Cards/ProductCard";

/*Icons*/
import { RiArrowRightSLine } from "react-icons/ri";

/*Image Data*/
import chair1 from "../../assets/images/chair.jpg";
import chair2 from "../../assets/images/chair2.jpg";
import chair3 from "../../assets/images/chair3.jpg";
import chair4 from "../../assets/images/chair4.jpg";
import chair5 from "../../assets/images/chair5.jpg";
import chair6 from "../../assets/images/chair6.jpg";
import chair7 from "../../assets/images/chair7.jpg";
import chair8 from "../../assets/images/chair8.jpg";
import chair9 from "../../assets/images/chair9.jpg";

const Products = () => {
  const ProductCardLoopData = [
    {
      id: 1,
      img: chair1,
      title: "ABBOTSLY CHAIR",
      productTypeid: 1,
    },
    {
      id: 2,
      img: chair2,
      title: "BARNEY CHENILLE SOFA",
      productTypeid: 1,
    },
    {
      id: 3,
      img: chair3,
      title: "SCAPE SOFA GREY",
      productTypeid: 3,
    },
    {
      id: 4,
      img: chair4,
      title: "SAN MARINO OCCASIONAL CHAIR",
      productTypeid: 2,
    },
    {
      id: 5,
      img: chair5,
      title: "ABBEYDALE KING BED",
      productTypeid: 2,
    },
    {
      id: 6,
      img: chair6,
      title: "INSPIRED BY U SOFA",
      productTypeid: 4,
    },
    {
      id: 7,
      img: chair7,
      title: "SCAPE SOFA GREY",
      productTypeid: 4,
    },
    {
      id: 8,
      img: chair8,
      title: "STOCKDALE OTTOMAN",
      productTypeid: 1,
    },
    {
      id: 9,
      img: chair9,
      title: "AVENUE FULL SLEIGH BED",
      productTypeid: 1,
    },
  ];

  const ProductCardLoop = (props) => {
    return (
      <div className="ProductCardLoop d-flex flex-wrap">
        {ProductCardLoopData.map((items, index) =>
          items.productTypeid === props.check ? (
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
          ) : (
            ""
          )
        )}
      </div>
    );
  };
  const [ourPCheck, setOurPCheck] = useState(1);

  return (
    <div className="productsPage container-fluied">
      {/*Navbar*/}
      <div className="container-fluied header">
        <div className="container-fluied bg-black pb-3">
          <Navbar navCheck={2} />
        </div>
        <div className="container">
          <div
            className="text-white text-center d-flex"
            style={{ justifyContent: "center", marginTop: "100px" }}
          >
            <h3 className="col-9">
              Over the past 10-plus years, we have grown from a regional company
              into a global technology
            </h3>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/*Products */}
      <div className="container-fluied ourProducts">
        <div
          className="container d-flex"
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "70px",
          }}
        >
          <div className="d-flex flex-column" style={{ alignItems: "center" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "var(--darkGrey-color)",
              }}
            >
              Products
            </h2>
            <div style={{ marginTop: "10px" }}>
              <hr className="bottomLine" />
            </div>
          </div>
          <div className="d-flex" style={{ marginTop: "7px" }}>
            <small
              style={{
                marginRight: "25px",
                border: `${
                  ourPCheck === 1 ? "1px solid var(--yellow-color)" : ""
                }`,
              }}
              onClick={() => setOurPCheck(1)}
            >
              Kitchen
            </small>
            <RiArrowRightSLine
              size={16}
              style={{ marginRight: "25px" }}
              color={"var(--yellow-color)"}
            />
            <small
              onClick={() => setOurPCheck(2)}
              style={{
                marginRight: "25px",
                border: `${
                  ourPCheck === 2 ? "1px solid var(--yellow-color)" : ""
                }`,
              }}
            >
              Living room
            </small>
            <RiArrowRightSLine
              style={{ marginRight: "25px" }}
              size={16}
              color={"var(--yellow-color)"}
            />
            <small
              onClick={() => setOurPCheck(3)}
              style={{
                marginRight: "25px",
                border: `${
                  ourPCheck === 3 ? "1px solid var(--yellow-color)" : ""
                }`,
              }}
            >
              office
            </small>
            <RiArrowRightSLine
              style={{ marginRight: "25px" }}
              size={16}
              color={"var(--yellow-color)"}
            />
            <small
              onClick={() => setOurPCheck(4)}
              style={{
                border: `${
                  ourPCheck === 4 ? "1px solid var(--yellow-color)" : ""
                }`,
              }}
            >
              bedroom
            </small>
          </div>
        </div>

        <div className="container ourProducts-items">
          <ProductCardLoop check={ourPCheck} />
        </div>
      </div>
      {/*Products ends*/}

      {/*Footer*/}
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default Products;
