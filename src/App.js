import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Pages*/
import Home from "./pages/Home/home";
import Products from "./pages/Products/products";
import Kitchen from "./pages/Products/Kitchen/kitchen";
import LivingRoom from "./pages/Products/LivingRoom/livingRoom";
import Office from "./pages/Products/Office/office";
import Bedroom from "./pages/Products/Bedroom/bedroom";
import About from "./pages/About/about";
import News from "./pages/News/news";
import Contacts from "./pages/Contacts/contacts";
import ShowProduct from "./pages/Products/ShowProduct/showproduct";

/*Bootstrap*/
import "bootstrap/dist/css/bootstrap.min.css";

/*Custom Css*/
import "./App.css";

/*AOS*/
import AOS from "aos";
import "aos/dist/aos.css";

/*React Slider*/
import "react-slideshow-image/dist/styles.css";

const App = () => {
  AOS.init({ once: true });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/furniture/products" element={<Products />} />
          <Route
            exact
            path="/furniture/products_category/kitchen"
            element={<Kitchen title="Kitchen" />}
          />
          <Route
            exact
            path="/furniture/products_category/living-room"
            element={<LivingRoom title="Living Room" />}
          />
          <Route
            exact
            path="/furniture/products_category/office"
            element={<Office title="Office" />}
          />
          <Route
            exact
            path="/furniture/products_category/bedroom"
            element={<Bedroom title="Bedroom" />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/showproduct" element={<ShowProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
