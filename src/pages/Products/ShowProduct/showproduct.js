import React, { useState } from "react";
import "./showproduct.css";

/*Components*/
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/footer";

/*Images*/
import image1 from "../../../assets/images/chair.png";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
import image6 from "../../../assets/images/6.jpg";
import image7 from "../../../assets/images/7.jpg";
import image8 from "../../../assets/images/8.jpg";
import image9 from "../../../assets/images/1.jpg";

/*Icons*/
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { BsCheckCircleFill, BsShareFill, BsTwitter } from "react-icons/bs";

const ShowProduct = () => {
  const [btnCheck, setBtnCheck] = useState(1);
  return (
    <div className="showProduct">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={10} />
      </div>
      {/*Navbar end*/}

      {/*Body*/}
      <div className="container-fluied">
        <div
          className="container-fluied pt-3"
          style={{ backgroundColor: "var(--lightGrey-color)" }}
        >
          <div className="container path">
            <div className="showP-top-bar d-flex">
              <a href="/">
                <small style={{ color: "var(--darlGrey-color)" }}>
                  Pearl Furniture
                </small>
              </a>
              <RiArrowRightSLine
                size={16}
                className="mx-3"
                color={"var(--darlGrey-color)"}
              />
              <a href="/">
                <small style={{ color: "var(--darkGrey-color)" }}>
                  Kitchen
                </small>
              </a>
              <RiArrowRightSLine
                className="mx-3"
                size={16}
                color={"var(--darkGrey-color)"}
              />
              <small style={{ color: "var(--darlGrey-color)" }}>
                Althea Slipper Chair
              </small>
            </div>
            <hr />
          </div>

          <div className="container  image-show" style={{ paddingTop: "60px" }}>
            <div
              className="col-6 d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="Ptitle">
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "var(--darkGrey-color)",
                  }}
                >
                  Althea Slipper Chair
                </h2>
                <ul style={{ marginTop: "35px" }}>
                  <li>Handmade in Britain</li>
                  <li>Dimensions (H x D x W): 90 x 90 x 189 cm</li>
                  <li>Soft fibre filled seat and back cushions</li>
                  <li>Comfortably seats three people</li>
                  <li>10-year frame guarantee</li>
                </ul>
              </div>
            </div>
            <div className="col-6 ">
              <img src={image1} alt="img" />
            </div>
          </div>

          <div class="container">
            <div class="row social-icons" style={{ paddingBottom: "60px" }}>
              <div class="col-1">
                <a
                  href="/"
                  className="social-button"
                  style={{ backgroundColor: "#95d03b" }}
                >
                  <BsShareFill size={20} color={"white"} />
                </a>
              </div>
              <div class="col-1">
                <a
                  href="/"
                  className="social-button"
                  style={{ backgroundColor: "#CB2027" }}
                >
                  <FaPinterest size={20} color={"white"} />
                </a>
              </div>
              <div class="col-1">
                <a
                  href="/"
                  className="social-button"
                  style={{ backgroundColor: "#55ACEE" }}
                >
                  <BsTwitter size={20} color={"white"} />
                </a>
              </div>
              <div class="col-1">
                <a
                  href="/"
                  className="social-button"
                  style={{ backgroundColor: "#4267B2" }}
                >
                  <FaFacebookF size={20} color={"white"} />
                </a>
              </div>
            </div>
          </div>

          <div className="container buttons bg-black d-flex p-0">
            <button
              className="btn"
              style={{
                backgroundColor: `${btnCheck === 1 ? "white" : "black"}`,
                color: `${btnCheck === 1 ? "black" : "white"}`,
              }}
              onClick={() => setBtnCheck(1)}
            >
              Product Details
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: `${btnCheck === 2 ? "white" : "black"}`,
                color: `${btnCheck === 2 ? "black" : "white"}`,
              }}
              onClick={() => setBtnCheck(2)}
            >
              Images Gallery
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: `${btnCheck === 3 ? "white" : "black"}`,
                color: `${btnCheck === 3 ? "black" : "white"}`,
              }}
              onClick={() => setBtnCheck(3)}
            >
              Enquiry
            </button>
          </div>
        </div>
        <div className="showProduct-details container-fluied">
          {btnCheck === 1 ? (
            <div className="container py-5 pdetails">
              <div className="col-6 left-section">
                <div className="overview">
                  <h3>Overview</h3>
                  <p className="col-10">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="my-5 features-details">
                  <h3>Features</h3>
                  <div className="d-flex features">
                    <BsCheckCircleFill
                      className="check-icon"
                      style={{ marginRight: "10px" }}
                      size={25}
                      color={"var(--yellow-color)"}
                    />
                    <p className="col-10">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="d-flex features my-3">
                    <BsCheckCircleFill
                      className="check-icon"
                      style={{ marginRight: "10px" }}
                      size={25}
                      color={"var(--yellow-color)"}
                    />
                    <p className="col-10">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="d-flex features my-3">
                    <BsCheckCircleFill
                      className="check-icon"
                      style={{ marginRight: "10px" }}
                      size={25}
                      color={"var(--yellow-color)"}
                    />
                    <p className="col-10">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="d-flex features">
                    <BsCheckCircleFill
                      className="check-icon"
                      style={{ marginRight: "10px" }}
                      size={25}
                      color={"var(--yellow-color)"}
                    />
                    <p className="col-10">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
                <div className="ship-section">
                  <h3>Shipping + returns</h3>
                  <p className="col-10">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="col-6 dimentions">
                <h3>Details + dimentions</h3>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <b>Overall product dimensions:</b>
                      </td>
                      <td className="float-right">
                        37.5"w x 34.75"d x 35.6"h.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Seat depth:</b>
                      </td>
                      <td className="float-right">22.8".</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Seat height:</b>
                      </td>
                      <td className="float-right">21.6".</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Back height from the top of the seat:</b>
                      </td>
                      <td className="float-right">24.4".</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Clearance:</b>
                      </td>
                      <td className="float-right">9.4".</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Shipping package:</b>
                      </td>
                      <td className="float-right">40.75"w x 38"d x 25.5"h</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Packaged weight:</b>
                      </td>
                      <td className="float-right">77.2 lbs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            ""
          )}

          {btnCheck === 2 ? (
            <div className="image-gallery container-fluied py-5">
              <div className="container ">
                <h3>Image gallery</h3>

                <div className="mt-4">
                  <div className="image-holder">
                    <img src={image2} height={260} alt="img" />
                    <img src={image3} height={260} alt="img" />
                    <img src={image4} height={260} alt="img" />
                  </div>
                  <div className="my-4 image-holder">
                    <img src={image5} height={260} alt="img" />
                    <img src={image6} height={260} alt="img" />
                    <img src={image7} height={260} alt="img" />
                  </div>
                  <div className="image-holder">
                    <img src={image8} height={260} alt="img" />
                    <img src={image9} height={260} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {btnCheck === 3 ? (
            <div className="enquiry container py-5">
              <div
                className="mb-4 input-data"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p>
                    <b>NAME</b>
                  </p>
                  <div>
                    <input placeholder="Enter your name..." />
                  </div>
                </div>
                <div>
                  <p>
                    <b>Company</b>
                  </p>
                  <div>
                    <input placeholder="Your company..." />
                  </div>
                </div>
              </div>

              <div
                className="my-4 input-data"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p>
                    <b>Email</b>
                  </p>
                  <div>
                    <input placeholder="Enter your email..." />
                  </div>
                </div>
                <div>
                  <p>
                    <b>Company</b>
                  </p>
                  <div>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        — Select Country —
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="/">
                            Afganistan
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            Pakistan
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/">
                            China
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mb-4 message-section"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p>
                    <b>MESSAGE *</b>
                  </p>
                  <div>
                    <textarea placeholder="Message..." />
                  </div>
                </div>
                <div
                  className="d-flex flex-column"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="phonee">
                    <p>
                      <b>PHONES</b>
                    </p>
                    <div className="input-data">
                      <input placeholder="Your phone..." />
                    </div>
                  </div>

                  <div>
                    <p>
                      <b>Business</b>
                    </p>

                    <div className="check-boxes">
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Manufacturer
                        </label>
                      </div>
                      <div
                        class="form-check distributor-check"
                        style={{ marginLeft: "40px", marginRight: "40px" }}
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault2"
                        />
                        <label class="form-check-label" for="flexCheckDefault2">
                          Distributor
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Retailer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="submit-button-btn">
                <button className="submit-button">SUBMIT</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/*Body end*/}

      {/*Footer*/}
      <Footer />
      {/*Footer end*/}
    </div>
  );
};

export default ShowProduct;
