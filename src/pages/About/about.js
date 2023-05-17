import React, { useState } from "react";
import "./about.css";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

/*Images*/
import image1 from "../../assets/images/about1.jpg";
import image2 from "../../assets/images/14years.jpg";
import award1 from "../../assets/images/award1.jpg";
import award2 from "../../assets/images/award2.jpg";
import award3 from "../../assets/images/award3.jpg";
import about3 from "../../assets/images/about3.jpg";

/*Icons*/
import { AiFillSetting } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";
import { MdLeaderboard, MdGroups } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";

const About = (props) => {
  const [sliderCheck, setSliderCheck] = useState(1);
  const AwardSlider = () => {
    return (
      <div className="about-slider-img">
        {sliderCheck === 1 ? (
          <img
            src={award1}
            alt="img"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        ) : (
          ""
        )}
        {sliderCheck === 2 ? (
          <img
            src={award2}
            alt="img"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        ) : (
          ""
        )}
        {sliderCheck === 3 ? (
          <img
            src={award3}
            alt="img"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        ) : (
          ""
        )}

        <div
          className="d-flex"
          style={{ justifyContent: "center", marginTop: "40px" }}
        >
          <div
            className="circle-slider-btn"
            onClick={() => setSliderCheck(1)}
            style={{
              backgroundColor: `${
                sliderCheck === 1 ? "var(--yellow-color)" : ""
              }`,
              border: `${
                sliderCheck === 1 ? "" : "1px solid var(--darkGrey-color)"
              }`,
            }}
          ></div>
          <div
            className="circle-slider-btn mx-1"
            onClick={() => setSliderCheck(2)}
            style={{
              backgroundColor: `${
                sliderCheck === 2 ? "var(--yellow-color)" : ""
              }`,
              border: `${
                sliderCheck === 2 ? "" : "1px solid var(--darkGrey-color)"
              }`,
            }}
          ></div>
          <div
            className="circle-slider-btn"
            onClick={() => setSliderCheck(3)}
            style={{
              backgroundColor: `${
                sliderCheck === 3 ? "var(--yellow-color)" : ""
              }`,
              border: `${
                sliderCheck === 3 ? "" : "1px solid var(--darkGrey-color)"
              }`,
            }}
          ></div>
        </div>
      </div>
    );
  };
  return (
    <div className="about container-fluied">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={3} />
      </div>
      <div
        className="container-fluied header d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="container ">
          <div className="text-white text-center">
            <h1>About</h1>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/*Body*/}
      <div className="container-fluied about-body">
        <div className="container section d-flex">
          <div className="col-6 left">
            <h3 style={{ marginBottom: "35px" }}>Welcome to Pearl Furniture</h3>
            <p className="col-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
              <br />
              <br />
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
            </p>
          </div>
          <div className="col-6 right">
            <img src={image1} alt="img" />
          </div>
        </div>

        <div className="container-fluied section-grey ">
          <div className="container d-flex">
            <div className="col-6">
              <img src={image2} alt="img" />
            </div>
            <div className="col-6 right">
              <h3 style={{ marginBottom: "35px" }}>14 Years of Experience</h3>
              <p className="col-10">
                <b>
                  Laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </b>
                <br />
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>

        {/*Why choose us*/}
        <div className="container-fluied chooseUs">
          <div className="container">
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Why Our Products Are Better?
              </h3>
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
                className="d-flex"
                style={{ width: "400px", marginBottom: "60px" }}
              >
                <div>
                  <i className="chooseUS-icon">
                    <DiTechcrunch size={50} color={"white"} />
                  </i>
                </div>

                <div className="ourTech" style={{ marginLeft: "20px" }}>
                  <h5>Our technology</h5>
                  <p className="col-11 mt-2">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <div
                className="d-flex"
                style={{ width: "400px", marginBottom: "60px" }}
              >
                <div style={{ marginTop: "4px" }}>
                  <i className="chooseUS-icon">
                    <FaIndustry size={30} color={"white"} />
                  </i>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <h5>Industry expertise</h5>
                  <p className="col-11 mt-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>

              <div
                className="d-flex"
                style={{ width: "400px", marginBottom: "60px" }}
              >
                <div style={{ marginTop: "4px" }}>
                  <i className="chooseUS-icon">
                    <MdLeaderboard size={30} color={"white"} />
                  </i>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <h5>Top leaders</h5>
                  <p className="col-11 mt-2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="d-flex" style={{ width: "400px" }}>
                <div style={{ marginTop: "4px" }}>
                  <i className="chooseUS-icon">
                    <AiFillSetting size={30} color={"white"} />
                  </i>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <h5>Innovation</h5>
                  <p className="col-11 mt-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>

              <div className="d-flex" style={{ width: "400px" }}>
                <div style={{ marginTop: "4px" }}>
                  <i className="chooseUS-icon">
                    <MdGroups size={30} color={"white"} />
                  </i>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <h5>Sales partners</h5>
                  <p className="col-11 mt-2">
                    Lorem ipsum dolor sit , consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="d-flex" style={{ width: "400px" }}>
                <div style={{ marginTop: "4px" }}>
                  <i className="chooseUS-icon">
                    <BsAwardFill size={30} color={"white"} />
                  </i>
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <h5>Certified product</h5>
                  <p className="col-11 mt-2">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Why choose us end*/}

        <div className="container section section-awards d-flex">
          <div className="col-7">
            <h3 style={{ marginBottom: "35px" }}>Our Mission</h3>
            <p className="col-10">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
              <br />
              <br />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  pariatur. Excepteur
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
                <li>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi
                </li>
              </ul>
            </p>
          </div>
          <div className="col-5">
            <div
              className="text-center award-img-holder"
              style={{
                padding: "35px 0px",
                border: "1px solid black",
                width: "450px",
              }}
            >
              <div style={{ marginBottom: "40px" }}>
                <p>
                  CERTIFICATE OF
                  <br />
                  ACHIEVEMENT
                </p>
              </div>

              <AwardSlider />
            </div>
          </div>
        </div>

        <div className="container section d-flex">
          <div className="col-6">
            <img src={about3} alt="img" />
          </div>
          <div className="col-6">
            <h3 style={{ marginBottom: "35px" }}>Benefits and Rewards</h3>
            <p className="col-10">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non
              <br />
              <br />
              Numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

        <div
          className="container-fluied map d-flex"
          style={{ jsutifyContent: "center", alignItems: "center" }}
        >
          <div className="container">
            <h3 className="col-8">
              Our products have been exported to more than 30 countries, such as
              the USA, Canada, Brazil, Mexico, Europe
            </h3>
            <div>
              <button className="btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>

      {/*Body end*/}

      {/*Footer*/}
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default About;
