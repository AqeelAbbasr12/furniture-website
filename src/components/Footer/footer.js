import React from "react";
import "./footer.css";

import { useMediaQuery } from "react-responsive";

/*Icons*/
import {
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsArrowRight,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import Logo from "../../assets/logo/logo.svg";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <div className="footer container-fluied">
      <div
        className="container-fluied"
        style={{
          backgroundColor: "var(--footer-bg)",
        }}
      >
        <div
          className="top-footer container d-flex"
          style={{
            paddingTop: "110px",
            paddingBottom: "80px",
          }}
        >
          <div className="col-3">
            <img
              src={Logo}
              alt="img"
              height={30}
              style={{ marginBottom: "25px" }}
            />
            <div style={{ marginBottom: "25px" }}>
              <p className="col-9" style={{ color: "white" }}>
                Fusce interdum ipsum egestas urna amet fringilla.
              </p>
            </div>

            <div className="d-flex">
              <a href="/">
                <FaFacebookF
                  className="nav-icon"
                  style={{ marginRight: "50px" }}
                  size={15}
                  color={"var(--grey-color)"}
                />
              </a>
              <a href="/">
                <BsTwitter
                  className="nav-icon"
                  style={{ marginRight: "50px" }}
                  size={15}
                  color={"var(--grey-color)"}
                />
              </a>

              <a href="/">
                <BsInstagram
                  className="nav-icon"
                  style={{ marginRight: "50px" }}
                  size={15}
                  color={"var(--grey-color)"}
                />
              </a>
              <a href="/">
                <BsYoutube
                  className="nav-icon"
                  size={15}
                  color={"var(--grey-color)"}
                />
              </a>
            </div>
          </div>

          <div
            className="col-2 d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <a href="/">
              <p>Buttons</p>
            </a>
            <a href="/">
              <p>About</p>
            </a>
            <a href="/">
              <p>Recent posts</p>
            </a>
            <a href="/">
              <p>News</p>
            </a>
            <a href="/">
              <p>Vacancies</p>
            </a>
          </div>

          {isMobile ? (
            <div
              className="col-2 d-flex flex-column"
              style={{ justifyContent: "space-between" }}
            >
              <a href="/">
                <p>Separator</p>
              </a>
              <a href="/">
                <p>Infobox</p>
              </a>
              <a href="/">
                <p>Pricing plans</p>
              </a>
              <a href="/">
                <p>Google map</p>
              </a>
              <a href="/">
                <p>Contact page</p>
              </a>
            </div>
          ) : (
            ""
          )}

          <div
            className="col-2 d-flex flex-column"
            style={{ justifyContent: "space-between" }}
          >
            <a href="/">
              <p>Address: 1024 Infinity Ave</p>
            </a>
            <a href="/">
              <p>Sacramento, California</p>
            </a>
            <a href="/">
              <p>95014, United States</p>
            </a>
            <a href="/">
              <p> </p>
            </a>
            <a href="/">
              <div className="d-flex view-map" style={{ alignItems: "center" }}>
                <p className="view">View on map</p>
                <BsArrowRight
                  style={{ marginLeft: "8px" }}
                  color={"var(--yellow-color)"}
                />
              </div>
            </a>
          </div>

          <div
            className="col-3 d-flex flex-column email-sub"
            style={{ justifyContent: "space-between" }}
          >
            <h3>Newsletter</h3>
            <div>
              <p className="text-white">Excepteur sint occaecat</p>
            </div>

            <div className="d-flex">
              <input placeholder="Email" />
              <button className="btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied bottom-footer">
        <div className="container py-3">
          <small style={{ color: "var(--darkGrey-color)" }}>
            Pearl Multipurpose WordPress Theme by StylemixThemes.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
