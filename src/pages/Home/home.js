import React, { useState } from "react";
import "./home.css";

/*Packages*/
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import FillButton from "../../components/Buttons/FillButton";
import BorderButton from "../../components/Buttons/BorderButton";
import DarkButton from "../../components/Buttons/DarkButton";
import LongCard from "../../components/Cards/LongCard";
import ProductCard from "../../components/Cards/ProductCard";
import DarkBorderButton from "../../components/Buttons/DarkBorderButton";
import Footer from "../../components/Footer/footer";

/*Icons*/
import { RiArrowRightSLine } from "react-icons/ri";
import { IoDiamondOutline, IoLeafOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { BsTruck } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";

/*Images*/
import image1 from "../../assets/images/7.jpg";
import image2 from "../../assets/images/1.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import chair1 from "../../assets/images/chair.jpg";
import chair2 from "../../assets/images/chair2.jpg";
import chair3 from "../../assets/images/chair3.jpg";
import chair4 from "../../assets/images/chair4.jpg";
import chair5 from "../../assets/images/chair5.jpg";
import chair6 from "../../assets/images/chair6.jpg";
import chair7 from "../../assets/images/chair7.jpg";
import chair8 from "../../assets/images/chair8.jpg";
import chair9 from "../../assets/images/chair9.jpg";
import c_chair from "../../assets/images/c_chair.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";

/*Cards Data*/
const LongCardsLoopData = [
  {
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative.",
    img: image1,
    title: "Bedroom",
    link: "/furniture/products_category/bedroom",
  },
  {
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative.",
    img: image2,
    title: "Office",
    link: "/furniture/products_category/office",
  },
  {
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative.",
    img: image3,
    title: "Kitchen",
    link: "/furniture/products_category/kitchen",
  },
  {
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative.",
    img: image4,
    title: "Living Room",
    link: "/furniture/products_category/living-room",
  },
];

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

/*Functions*/
const LongCardsLoop = () => {
  return (
    <div
      className="LongCardsLoop d-flex flex-wrap"
      style={{ justifyContent: "space-between" }}
    >
      {LongCardsLoopData.map((items, index) => (
        <a href={items.link} style={{ textDecoration: "none" }}>
          <LongCard
            title={items.title}
            text={items.text}
            img={items.img}
            key={items.title.toString()}
          />
        </a>
      ))}
    </div>
  );
};

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

const Home = () => {
  const [ourPCheck, setOurPCheck] = useState(1);
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <div className="home container-fluied">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={1} />
      </div>
      {/*Navbar end*/}

      {/*Header Section*/}
      <div
        className="container-fluied section1 d-flex"
        style={{ alignItems: "center" }}
      >
        <div className="container ">
          <div className="col-7">
            <h1
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <span>Furniture</span> Solutions<span>.</span> <br /> Affordable
              Prices<span>.</span>
            </h1>
            <div className="col-9" style={{ marginTop: "50px" }}>
              <p data-aos="fade-right" data-aos-duration="1000">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy.
              </p>
            </div>
            <div
              className="d-flex header-buttons"
              style={{ marginTop: "45px" }}
            >
              <div style={{ marginRight: "20px" }}>
                <a href="/furniture/products">
                  <FillButton title="VIEW PRODUCTS" />
                </a>
              </div>
              <a href="/contacts">
                <BorderButton title="REQUEST QUOTE" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Header Section end*/}

      {/*What we produce*/}
      <div
        className="container-fluied section-one"
        style={{ paddingBottom: "100px" }}
      >
        <div className="container">
          <div
            className="py-2 px-5 d-flex"
            style={{
              backgroundColor: "var(--yellow-color)",
              alignItems: "center",
            }}
          >
            <div className="col-6">
              <h5>Affordable is Not Just A Name, It’s A Promise!</h5>
            </div>
            <div
              className="col-6 d-flex"
              style={{ flexDirection: "row-reverse" }}
            >
              <DarkButton title="GET A QUOTE" />
            </div>
          </div>
        </div>

        <div
          className="container what-we-produce"
          style={{ marginTop: "60px", marginBottom: "30px" }}
        >
          <div className="col-8">
            <h2 style={{ fontWeight: "bold" }}>What we produce</h2>
            <hr className="bottomLine" />
          </div>
          <div className="col-4">
            <small
              style={{ color: "var(--dimGrey-color)", lineHeight: "35px" }}
            >
              Nanotechnology immersion along the information highway will close
              the loop on focusing solely on the bottom line.
            </small>
          </div>
        </div>

        <div className="container lng-card">
          <LongCardsLoop />
        </div>
      </div>
      {/*What we produce end*/}

      {/*Our Products*/}
      <div className="container-fluied ourProducts">
        <div
          className="container d-flex"
          style={{
            flexDirection: "column",
            alignItems: "center",
            height: "140px",
          }}
        >
          <div className="d-flex flex-column" style={{ alignItems: "center" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "var(--darkGrey-color)",
              }}
            >
              Our products
            </h2>
            <div className="hr-line" style={{ marginTop: "10px" }}>
              <hr className="bottomLine" />
            </div>
          </div>
          <div
            className="d-flex ourProduct-buttons"
            style={{ marginTop: "7px" }}
          >
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

        <div className="text-center" style={{ marginTop: "40px" }}>
          <a href="/furniture/products">
            <DarkBorderButton title="ALL PRODUCTS" />
          </a>
        </div>
      </div>
      {/*Our Products end*/}

      {/*Promo Section*/}
      <div
        className="container-fluied my-2 py-4 promo-section "
        style={{ backgroundColor: "var(--yellow-color)" }}
      >
        <div className="container promo-section-data">
          <div
            className="col-6 promo-section-img"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <img src={c_chair} alt="img" />
          </div>
          <div
            className="col-6 promo-section-text"
            style={{ padding: "70px 0px 0px 60px" }}
          >
            <div className="col-8">
              <h2 style={{ fontWeight: "bold", color: "black" }}>
                Save Money. Live Better.
              </h2>
              <div
                className="hr-line"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <hr
                  className="bottomLine"
                  style={{ border: "2px solid black" }}
                />
              </div>

              <p style={{ color: "black" }}>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration.
              </p>
            </div>
            <div className="promo-btn" style={{ marginTop: "30px" }}>
              <a href="/contacts">
                <DarkButton withBorder={true} title="Learn More" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Promo Section end*/}

      {/*Why choose us*/}
      <div className="container-fluied py-5 chooseUs">
        <div className="container">
          <div className="d-flex flex-column" style={{ alignItems: "center" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "var(--darkGrey-color)",
              }}
            >
              Why choose us?
            </h2>
            <div style={{ marginTop: "10px" }}>
              <hr className="bottomLine" />
            </div>
          </div>

          <div
            className="container d-flex flex-wrap"
            style={{
              color: "black",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            <div
              className="why-chooseUs-data "
              style={{ width: "400px", marginBottom: "60px" }}
            >
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <IoDiamondOutline size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>EXCLUSIVE NOSTRUD</h5>
                <p className="col-11 mt-2">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
              </div>
            </div>

            <div
              className="why-chooseUs-data"
              style={{ width: "400px", marginBottom: "60px" }}
            >
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <GrUserWorker size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>SPECIALISTS DOLORE</h5>
                <p className="col-11 mt-2">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity.
                </p>
              </div>
            </div>

            <div
              className="why-chooseUs-data"
              style={{ width: "400px", marginBottom: "60px" }}
            >
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <IoDiamondOutline size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>BEST MINIM VENIAM</h5>
                <p className="col-11 mt-2">
                  At the end of the day, going forward, a new normal that has
                  evolved from generation X.
                </p>
              </div>
            </div>

            <div className="why-chooseUs-data" style={{ width: "400px" }}>
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <IoLeafOutline size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>ECO EIUSMOD MAGNA</h5>
                <p className="col-11 mt-2">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test and override.
                </p>
              </div>
            </div>

            <div className="why-chooseUs-data" style={{ width: "400px" }}>
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <BsTruck size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>DELIVERY TEMPOR</h5>
                <p className="col-11 mt-2">
                  Nanotechnology immersion along the information highway will
                  close the loop on focusing solely.
                </p>
              </div>
            </div>

            <div className="why-chooseUs-data" style={{ width: "400px" }}>
              <div style={{ marginTop: "12px" }}>
                <i className="chooseUS-icon">
                  <TiPencil size={30} />
                </i>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <h5>DESIGN ALIQUA</h5>
                <p className="col-11 mt-2">
                  Podcasting operational change management inside of workflows
                  to establish a framework and taking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Why choose us end*/}

      {/*Counter Section */}
      <div className="container-fluied counter my-5">
        <div className="container d-flex">
          <div className="vl"></div>
          <div
            className="d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <CountUp
              start={viewPortEntered ? null : 0}
              end={74440}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  active={!viewPortEntered}
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Finished projects</p>
          </div>

          <div className="vl"></div>
          <div
            className="d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <CountUp
              start={viewPortEntered ? null : 0}
              end={6340}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  active={!viewPortEntered}
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Satisfied customers</p>
          </div>
          <div className="vl"></div>
          <div
            className="d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <CountUp
              start={viewPortEntered ? null : 0}
              end={2120}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  active={!viewPortEntered}
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Employees</p>
          </div>
          <div className="vl"></div>
          <div
            className="d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <CountUp
              start={viewPortEntered ? null : 0}
              end={20}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  active={!viewPortEntered}
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall
                >
                  <div className="d-flex plus" style={{ alignItems: "center" }}>
                    <span ref={countUpRef} />
                    <h5>+</h5>
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      {/*Counter Section end*/}

      {/*Our Story */}
      <div className="container-fluied my-5 ourStory">
        <div className="container">
          <div className="d-flex flex-column" style={{ alignItems: "center" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "var(--darkGrey-color)",
              }}
            >
              Our Story
            </h2>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <hr className="bottomLine" />
            </div>
            <div className="col-10 text-center">
              <p>
                Pearl Furniture 1955 Collaboratively administrate empowered
                markets via plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits. Dramatically visualize
                customer directed convergence without revolutionary ROI.
              </p>
            </div>
          </div>

          <div
            className="contaienr d-flex"
            style={{ marginTop: "60px", marginBottom: "70px" }}
          >
            <div
              className="col-6 partners-left-img"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={image3} alt="img" height={315} />
            </div>
            <div className="col-6 ">
              <h4 style={{ marginBottom: "30px" }}>Partners</h4>
              <div className="d-flex flex-wrap col-12">
                <img
                  src={partner1}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
                <img
                  src={partner2}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
                <img
                  src={partner3}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
                <img
                  src={partner4}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
                <img
                  src={partner5}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
                <img
                  src={partner6}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Our Story */}

      {/*Footer*/}
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default Home;
