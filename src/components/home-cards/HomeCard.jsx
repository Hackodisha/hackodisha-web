import React from "react";
import TracksCards from "./HomeCardElement";
import { Row, Col } from "react-grid-system";
import './HomeCard.css';


function TracksCard(){
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814916/Assets/Icons/health_cvcmoc.webp'}
                alt="health_track"
                style={{ width: '2.5em' }}
                trackname="HealthCare"
                description="The Healthcare track aims to create innovative projects that address various health-related issues. Today, we are faced with modern health challenges such as the COVID19 pandemic, mental health, obesity, cardiovascular diseases and many more. It is the perfect opportunity for hackers to come up with something that serves the health industry."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814918/Assets/Icons/education_bk2lfd.webp'}
                alt="education_track"
                style={{ width: '2.5em' }}
                trackname="Education"
                description="The Education track aims to create projects that connect and empower students from all aspects of life. Ever since the pandemic hit us, the education system had to adapt to the new normal. We, thus, encourage you to build something that modernizes education and makes it accessible for everyone"
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814918/Assets/Icons/environment_h376jc.webp'}
                alt="environment_track"
                style={{ width: '2.5em' }}
                trackname="Environment"
                description="This is the only planet we got; we have no planet B (at least not now, not as good as the one we got). Projects in the Environment track aim to a better and more sustainable environment. This is the opportunity to train people into acting more responsibly and create greener technologies for the coming future."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814918/Assets/Icons/security_nz146a.webp'}
                alt="women_track"
                style={{ width: '2.5em' }}
                trackname="Women security"
                description="It is a sad reality that women safety is in danger these days. It is our collective responsibility to create a safer tomorrow. Calling out hackers to bring forth ideas that will elevate women security with mind-blowing technologies."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814918/Assets/Icons/disaster_xnuswa.webp'}
                alt="disaster_track"
                style={{ width: '2.5em' }}
                trackname="Disaster Management"
                description="It is crucial now more than ever, with the shocking number of disasters we are faced with, to create technologies that can dampen the aftermath we suffer from these disasters. Feel that you can contribute towards the disaster management with cutting edge technologies? This is the right track for you."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814918/Assets/Icons/open_ku9tav.webp'}
                alt="open_track"
                style={{ width: '2.5em' }}
                trackname="Open Innovation"
                description="Have ideas that do not fall into any of the above tracks? Worry not. The best part is we encourage you to exercise your ideas and develop technologies that address a problem, without any restrictions."
              />
        </Col>
      </Row>
    </div>
  );
}

export default TracksCard;
