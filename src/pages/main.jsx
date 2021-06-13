import React from "react";
import Sponsors from "./sponsors";
import Tracks from "./tracks";
import About from "./about";
import Home from "./home";
import Faq from "./faq";
import Events from "./events";
import Prizes from "./prizes";
import Schedule from "./schedule";
import { useEffect } from "react";

function Main() {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  })
  return (
    <div>
      <div id="home">
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
