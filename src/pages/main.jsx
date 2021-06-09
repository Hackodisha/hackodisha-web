import React from "react";
import Sponsors from "./sponsors2";
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
      <div id="tracks">
        <Tracks />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="faq">
        <Faq />
      </div>
    </div>
  );
}

export default Main;
