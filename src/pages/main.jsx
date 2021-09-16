import React from 'react';
import Sponsors from './sponsors';
import Tracks from './tracks';
import About from './about';
import Home from './home';
import Faq from './faq';
import Prizes from './prizes';
import Schedule from './schedule';
import { useEffect } from 'react';
import Events from './events';
import Team from './team';

function Main() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tracks">
        <Tracks />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      {/* <section id="speakers">
        <Speakers />
        </section>*/}
      <section id="prizes">
        <Prizes />
      </section>
      <section id="events">
        <Events/>
      </section>
      <section id= "team">
        <Team/>
      </section>
      <section id="faq">
        <Faq />
      </section>
      {/*<section id="calendly">
        <Calendly />
      </section>*/}
    </div>
  );
}

export default Main;
