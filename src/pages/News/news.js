import React, { useState, useEffect } from "react";
import "./news.css";

/*Components*/
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

/*Images*/
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import news5 from "../../assets/images/news5.jpg";
import news6 from "../../assets/images/news6.jpg";
import testi1 from "../../assets/images/testi1.jpg";
import testi2 from "../../assets/images/testi2.jpg";
import testi3 from "../../assets/images/testi3.jpg";
import chair1 from "../../assets/images/chair.jpg";
import chair2 from "../../assets/images/chair2.jpg";

/*Icons*/
import { FiClock } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";

const News = (props) => {
  const BlogCardData = [
    {
      text: "Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod tempor",
      date: "Jan 10, 2020",
      image: news1,
    },
    {
      text: "Wusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      date: "Jan 10, 2020",
      image: news2,
    },
    {
      text: "Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod tempor",
      date: "Jan 10, 2020",
      image: news3,
    },
    {
      text: "Appointment of Rob Limroth and Keith Sullivan to Solais Sales Team",
      date: "Jan 10, 2020",
      image: news4,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      date: "Jan 10, 2020",
      image: news5,
    },
    {
      text: "Glitter International will participate in Serigrafia 2017 Tradeshow",
      date: "Jan 10, 2020",
      image: news6,
    },
  ];

  const BlogCard = (props) => {
    return (
      <div class="card blogCard" style={{ width: "27rem" }}>
        <div class="card-body">
          <img className="blog-img" src={props.image} alt="img" />
          <p>{props.text}</p>
          <div className="d-flex " style={{ alignItems: "center" }}>
            <FiClock color={"var(--yellow-color)"} />
            <small style={{ marginLeft: "5px" }}>{props.date}</small>
          </div>
        </div>
      </div>
    );
  };

  const BlogCardLoop = () => {
    return (
      <div className="d-flex flex-wrap">
        {BlogCardData.map((items, index) => {
          return (
            <div key={index}>
              <BlogCard
                image={items.image}
                text={items.text}
                date={items.date}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const [sliderCheck, setSliderCheck] = useState(1);

  useEffect(() => {
    setTimeout(function () {
      if (sliderCheck < 3) setSliderCheck(sliderCheck + 1);
      else setSliderCheck(1);
    }, 5000);
  }, [sliderCheck]);

  const TestimonialSlider = () => {
    return (
      <div className="testimonial-slider">
        {sliderCheck === 1 ? (
          <div data-aos="fade-left" data-aos-duration="1000">
            <div
              style={{
                backgroundColor: "#f7f7f7",
                height: "150px",
                width: "300px",
                padding: "10px 12px",
              }}
            >
              <p>
                "When you are in the financial industry you know the image you
                have to project to people. You have to be agile and
                authoritative; Go for financial institutions"
              </p>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "20px", justifyContent: "center" }}
            >
              <div style={{ marginRight: "20px" }}>
                <img src={testi1} alt="img" style={{ borderRadius: "50%" }} />
              </div>
              <div>
                <h2 style={{ textTransform: "uppercase" }}>Mary J.</h2>
                <small>Founder</small>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {sliderCheck === 2 ? (
          <div data-aos="fade-left" data-aos-duration="1000">
            <div
              style={{
                backgroundColor: "#f7f7f7",
                height: "150px",
                width: "300px",
                padding: "10px 12px",
              }}
            >
              <p>
                "When you are in the financial industry you know the image you
                have to project to people. You have to be agile and
                authoritative; Go for financial institutions"
              </p>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "20px", justifyContent: "center" }}
            >
              <div style={{ marginRight: "20px" }}>
                <img src={testi2} alt="img" style={{ borderRadius: "50%" }} />
              </div>
              <div>
                <h2 className="col-8" style={{ textTransform: "uppercase" }}>
                  Victoria Porter
                </h2>
                <small>CTO at Smarty PTY</small>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {sliderCheck === 3 ? (
          <div data-aos="fade-left" data-aos-duration="1000">
            <div
              style={{
                backgroundColor: "#f7f7f7",
                height: "150px",
                width: "300px",
                padding: "10px 12px",
              }}
            >
              <p>
                "When you are in the financial industry you know the image you
                have to project to people. You have to be agile and
                authoritative; Go for financial institutions"
              </p>
            </div>
            <div
              className="d-flex"
              style={{ marginTop: "20px", justifyContent: "center" }}
            >
              <div style={{ marginRight: "20px" }}>
                <img src={testi3} alt="img" style={{ borderRadius: "50%" }} />
              </div>
              <div>
                <h2 style={{ textTransform: "uppercase" }}>John S. Gates</h2>
                <small>Founder, The Building Co</small>
              </div>
            </div>
          </div>
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

  const NButton = (props) => {
    return (
      <div>
        <button className="btn NButton"> {props.title} </button>
      </div>
    );
  };

  return (
    <div className="news container-fluied">
      {/*Navbar*/}
      <div className="container-fluied bg-black pb-3">
        <Navbar navCheck={4} />
      </div>
      <div
        className="container-fluied header d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="container ">
          <div className="text-white text-center">
            <h1>News</h1>
          </div>
        </div>
      </div>
      {/*Navbar end*/}

      {/*Body*/}
      <div className="container-fluied">
        <div className="container d-flex  py-5">
          {/*Blog*/}
          <div className="news-blog " style={{ width: "950px" }}>
            <BlogCardLoop />

            <hr style={{ marginRight: "64px" }} />

            <div
              className="d-flex"
              style={{ alignItems: "center", marginTop: "25px" }}
            >
              <button
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
          {/*Blog end*/}

          <div className="news-side">
            <div className="feature-products">
              <div className="my-4">
                <small>
                  <b>FEATURED PRODUCTS</b>
                </small>
              </div>

              <a className="d-flex" href="/">
                <img
                  src={chair1}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                  height={90}
                />
                <div style={{ padding: "3px 15px" }}>
                  <p>Abbotsly Chair</p>
                  <small style={{ color: "var(--yellow-color)" }}>
                    <span>LIVING ROOM</span>
                  </small>
                </div>
              </a>

              <hr style={{ marginTop: "50px", marginBottom: "30px" }} />

              <a className="d-flex" href="/">
                <img
                  src={chair2}
                  alt="img"
                  style={{ border: "1px solid var(--lightGrey-color)" }}
                  height={90}
                />
                <div style={{ padding: "3px 15px" }}>
                  <p>Barney Chenille Sofa</p>
                  <small style={{ color: "var(--yellow-color)" }}>
                    <span>LIVING ROOM</span>
                  </small>
                </div>
              </a>
            </div>

            <div className="testimonials my-5">
              <TestimonialSlider />
            </div>

            <div className="ourGallery py-5 " style={{ width: "340px" }}>
              <h3 className="mb-4">Our Gallery</h3>
              <div
                className="d-flex flex-wrap"
                style={{ justifyContent: "space-between" }}
              >
                <img
                  src={news1}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
                <img
                  src={news2}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
                <img
                  src={news3}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
                <img
                  src={news4}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
                <img
                  src={news5}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
                <img
                  src={news6}
                  height={70}
                  alt="img"
                  style={{ marginBottom: "20px" }}
                />
              </div>
            </div>

            <div className="tags py-5" style={{ width: "240px" }}>
              <h3
                className="mb-4"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Tags
              </h3>

              <div className=" d-flex flex-wrap">
                <NButton title="Awards" />
                <NButton title="Best Building" />
                <NButton title="Building" />
                <NButton title="Construction" />
                <NButton title="Culture" />
                <NButton title="Fashion" />
                <NButton title="Management" />
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

export default News;
