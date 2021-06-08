import React from "react";
import Sponsors from "./sponsors";
import Tracks from "./tracks";
import About from "./about";
import Home from "./home";
import Faq from "./faq";
import Events from "./events";
import Prizes from "./prizes";
import Schedule from "./schedule";


function Main() {
  return (
    <div>
      <div id="home" className="container">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tracks" className="container">
        <Tracks />
      </div>
      <div id="sponsors" className="container">
        <Sponsors />
      </div>
      <div id="schedule" className="container">
        <Schedule />
      </div>
      <div id="events" className="container">
        <Events />
      </div>
      <div id="prizes" className="container">
        <Prizes />
      </div>
      <div id="faq" className="container">
        <Faq />
      </div>
    </div>
  );
}

export default Main;
