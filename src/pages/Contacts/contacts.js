import React from "react";
import "./contacts.css";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

/*Images*/
import image1 from "../../assets/images/contact1.jpg";
import image2 from "../../assets/images/contact2.jpg";

/*Icons*/
import { MdEmail } from "react-icons/md";
import { BsBuilding, BsFillTelephoneFill } from "react-icons/bs";
import { GiFactory } from "react-icons/gi";

const Contacts = (props) => {
  return (
    <div className="contacts container-fluied">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={5} />
      </div>
      <div
        className="container-fluied header d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="container ">
          <div className="text-white text-center">
            <h1>Contacts</h1>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/*Body*/}
      <div className="container-fluied">
        <div className="container my-5">
          <div
            className="text-center my-5 d-flex"
            style={{ justifyContent: "center" }}
          >
            <h3 className="col-7 contacts-text">
              Over the past 10-plus years, we have grown from a regional company
              into a global technology
            </h3>
          </div>

          <div className="container  contacts-detailss">
            <div
              className="col-6 d-flex"
              style={{ flexDirection: "row-reverse" }}
            >
              <img src={image1} height={360} alt="img" />
            </div>
            <div className="col-6" style={{ paddingLeft: "40px" }}>
              <div
                className="contact-details "
                style={{
                  height: "360px",
                  width: "550px",
                  paddingLeft: "75px",
                  paddingTop: "50px",
                }}
              >
                <h4 className="mb-4">Office contacts</h4>

                <div
                  style={{ alignItems: "center" }}
                  className=" mb-4 contact-items"
                >
                  <BsBuilding size={25} color={"var(--yellow-color)"} />
                  <small className="col-6">
                    350 Flatbush ave New York, NY 10018 USA.
                  </small>
                </div>
                <div
                  style={{ alignItems: "center" }}
                  className=" mb-4 contact-items"
                >
                  <BsFillTelephoneFill
                    size={20}
                    color={"var(--yellow-color)"}
                  />
                  <small className="col-6">212 386 5575; 212 386 5575</small>
                </div>
                <div
                  style={{ alignItems: "center" }}
                  className=" contact-items"
                >
                  <MdEmail size={22} color={"var(--yellow-color)"} />
                  <small className="col-6">info@stylemixthemes.com</small>
                </div>
              </div>
            </div>
          </div>

          <div className="container  mt-5 contacts-detailss">
            <div
              className="col-6 d-flex"
              style={{ flexDirection: "row-reverse" }}
            >
              <img src={image2} height={360} alt="img" />
            </div>
            <div className="col-6" style={{ paddingLeft: "40px" }}>
              <div
                className="contact-details "
                style={{
                  height: "360px",
                  width: "550px",
                  paddingLeft: "75px",
                  paddingTop: "50px",
                }}
              >
                <h4 className="mb-4">Factory Contacts</h4>

                <div
                  style={{ alignItems: "center" }}
                  className="contact-items mb-4"
                >
                  <GiFactory size={25} color={"var(--yellow-color)"} />
                  <small className="col-6">
                    350 Flatbush ave New York, NY 10018 USA.
                  </small>
                </div>
                <div
                  style={{ alignItems: "center" }}
                  className="contact-items mb-4"
                >
                  <BsFillTelephoneFill
                    size={20}
                    color={"var(--yellow-color)"}
                  />
                  <small className="col-6">212 386 5575; 212 386 5575</small>
                </div>
                <div style={{ alignItems: "center" }} className="contact-items">
                  <MdEmail size={22} color={"var(--yellow-color)"} />
                  <small className="col-6">info@stylemixthemes.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluied form">
          <div className="container">
            <h3>Feedback form</h3>

            <div className="mt-5 ">
              <div className="row ">
                <div className="col-4">
                  <small>Name</small>
                  <div>
                    <input />
                  </div>
                </div>
                <div className="col-4">
                  <small>Email*</small>
                  <div>
                    <input />
                  </div>
                </div>
                <div className="col-4">
                  <small>Phone</small>
                  <div>
                    <input />
                  </div>
                </div>
              </div>
              <div className="mt-5 col-12">
                <small>Message*</small>
                <div>
                  <textarea />
                </div>
              </div>

              <div className="feedback-btn">
                <button className="btn send-form">send</button>
              </div>
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

export default Contacts;
