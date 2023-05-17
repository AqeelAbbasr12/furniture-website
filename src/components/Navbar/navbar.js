import React, { useState } from "react";
import "./navbar.css";
import { Button, Modal } from "react-bootstrap";

/*Icons*/
import {
  BsFillTelephoneFill,
  BsTwitter,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import Logo from "../../assets/logo/logo.svg";

const Navbar = (props) => {
  const [sideNav, setSideNav] = useState(false);
  const SideNav = () => {
    return (
      <div style={{ width: "57vw" }}>
        <a href="/">
          <p
            className="mx-4"
            style={{
              paddingBottom: "15px",
              color: `${props.navCheck === 1 ? "var(--yellow-color)" : ""}`,
            }}
          >
            Home
          </p>
        </a>
        <div className="dropdown">
          <a>
            <p
              className="mx-4 dropbtn"
              style={{
                paddingBottom: "15px",
                color: `${props.navCheck === 2 ? "var(--yellow-color)" : ""}`,
              }}
            >
              Products
            </p>
          </a>
          <div className="dropdown-content">
            <a
              href="/furniture/products_category/kitchen"
              style={{
                backgroundColor: `${
                  props.navCheck === 2.1 ? "var(--yellow-color)" : ""
                }`,
              }}
            >
              KITCHEN
            </a>
            <a
              href="/furniture/products_category/living-room"
              style={{
                backgroundColor: `${
                  props.navCheck === 2.2 ? "var(--yellow-color)" : ""
                }`,
              }}
            >
              LIVING ROOM
            </a>
            <a
              href="/furniture/products_category/office"
              style={{
                backgroundColor: `${
                  props.navCheck === 2.3 ? "var(--yellow-color)" : ""
                }`,
              }}
            >
              OFFICE
            </a>
            <a
              href="/furniture/products_category/bedroom"
              style={{
                backgroundColor: `${
                  props.navCheck === 2.4 ? "var(--yellow-color)" : ""
                }`,
              }}
            >
              BEDROOM
            </a>
          </div>
        </div>
        <a href="/about">
          <p
            className="mx-4"
            style={{
              paddingBottom: "15px",
              color: `${props.navCheck === 3 ? "var(--yellow-color)" : ""}`,
            }}
          >
            Company
          </p>
        </a>
        <a href="/news">
          <p
            className="mx-4"
            style={{
              paddingBottom: "15px",
              color: `${props.navCheck === 4 ? "var(--yellow-color)" : ""}`,
            }}
          >
            News
          </p>
        </a>

        <a href="/contacts">
          <p
            className="mx-4"
            style={{
              paddingBottom: "15px",
              color: `${props.navCheck === 5 ? "var(--yellow-color)" : ""}`,
            }}
          >
            Contacts
          </p>
        </a>
      </div>
    );
  };

  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-search-nav">
              search
            </button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="TheNavBar">
      <div
        className="top-top-bar container-fluied"
        style={{ backgroundColor: "#1F1F1F" }}
      >
        <div className="container d-flex py-2">
          <div className="col-6 d-flex" style={{ alignItems: "center" }}>
            <a href="/">
              <small>Have any Questions?</small>
            </a>
            <div style={{ marginLeft: "30px" }}>
              <BsFillTelephoneFill
                style={{ marginRight: "10px" }}
                width={15}
                color={"var(--grey-color)"}
              />
              <small>+1 376-336-3136</small>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <FiMail
                style={{ marginRight: "10px" }}
                width={15}
                color={"var(--grey-color)"}
              />
              <small>info@stylemixthemes.com</small>
            </div>
          </div>
          <div
            className="col-6  d-flex"
            style={{ flexDirection: "row-reverse", alignItems: "center" }}
          >
            <a href="/">
              <BsInstagram
                className="nav-icon"
                width={15}
                color={"var(--grey-color)"}
              />
            </a>
            <a href="/">
              <BsYoutube
                className="nav-icon"
                style={{ marginRight: "50px" }}
                width={15}
                color={"var(--grey-color)"}
              />
            </a>
            <a href="/">
              <BsTwitter
                className="nav-icon"
                style={{ marginRight: "50px" }}
                width={15}
                color={"var(--grey-color)"}
              />
            </a>
            <a href="/">
              <FaFacebookF
                className="nav-icon"
                style={{ marginRight: "50px" }}
                width={15}
                color={"var(--grey-color)"}
              />
            </a>

            <a href="/" style={{ marginRight: "50px" }}>
              <small>ENGLISH</small>
            </a>
          </div>
        </div>
      </div>

      <div className=" container  bottom-nav" style={{ marginTop: "25px" }}>
        <div className="col-4 logo-holder">
          <a href="/">
            <img className="logo" src={Logo} height={35} alt="img" />
          </a>

          <div
            className="bar-icon"
            style={{ display: "none" }}
            onClick={() => {
              sideNav === false ? setSideNav(true) : setSideNav(false);
            }}
          >
            <FaBars size={22} color={"white"} />
          </div>
        </div>
        <div
          className="nav-buttons col-8"
          style={{ flexDirection: "row-reverse" }}
        >
          <a href="/contacts">
            <p
              className="mx-4"
              style={{
                paddingBottom: "35px",
                color: `${props.navCheck === 5 ? "var(--yellow-color)" : ""}`,
              }}
            >
              Contacts
            </p>
          </a>
          <a href="/news">
            <p
              className="mx-4"
              style={{
                paddingBottom: "35px",
                color: `${props.navCheck === 4 ? "var(--yellow-color)" : ""}`,
              }}
            >
              News
            </p>
          </a>
          <a href="/about">
            <p
              className="mx-4"
              style={{
                paddingBottom: "35px",
                color: `${props.navCheck === 3 ? "var(--yellow-color)" : ""}`,
              }}
            >
              Company
            </p>
          </a>
          <div className="dropdown">
            <a href="/furniture/products">
              <p
                className="mx-4 dropbtn"
                style={{
                  paddingBottom: "35px",
                  color: `${props.navCheck === 2 ? "var(--yellow-color)" : ""}`,
                }}
              >
                Products
              </p>
            </a>
            <div className="dropdown-content">
              <a
                href="/furniture/products_category/kitchen"
                style={{
                  backgroundColor: `${
                    props.navCheck === 2.1 ? "var(--yellow-color)" : ""
                  }`,
                }}
              >
                KITCHEN
              </a>
              <a
                href="/furniture/products_category/living-room"
                style={{
                  backgroundColor: `${
                    props.navCheck === 2.2 ? "var(--yellow-color)" : ""
                  }`,
                }}
              >
                LIVING ROOM
              </a>
              <a
                href="/furniture/products_category/office"
                style={{
                  backgroundColor: `${
                    props.navCheck === 2.3 ? "var(--yellow-color)" : ""
                  }`,
                }}
              >
                OFFICE
              </a>
              <a
                href="/furniture/products_category/bedroom"
                style={{
                  backgroundColor: `${
                    props.navCheck === 2.4 ? "var(--yellow-color)" : ""
                  }`,
                }}
              >
                BEDROOM
              </a>
            </div>
          </div>

          <a href="/">
            <p
              className="mx-4"
              style={{
                paddingBottom: "35px",
                color: `${props.navCheck === 1 ? "var(--yellow-color)" : ""}`,
              }}
            >
              Home
            </p>
          </a>
        </div>
      </div>

      <div className="container mt-3">
        {sideNav === true ? <SideNav /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
