import React from "react";
import Sponsors from "./sponsors";
import Tracks from "./tracks";
import About from "./about";
import Home from "./home";
import Faq from "./faq";

function Main() {
  return (
    <div>
      <div id="home" className="container">
        <Home />
      </div>
      <div id="about" className="container">
        <About />
      </div>
      <div id="tracks" className="container">
        <Tracks />
      </div>
      <div id="sponsors" className="container">
        <Sponsors />
      </div>
      <div id="faq" className="container">
        <Faq />
      </div>
    </div>
  );
}

export default Main;
