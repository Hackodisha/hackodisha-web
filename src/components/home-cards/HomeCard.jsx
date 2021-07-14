import React, { useState } from "react";
import TracksCards from "./HomeCardElement";
import { Row, Col } from "react-grid-system";
import './HomeCard.css';


function TracksCard(){
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/health.webp").default}
                alt="health_track"
                style={{ width: '2.5em' }}
                trackname="HealthCare"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/education.webp").default}
                alt="education_track"
                style={{ width: '2.5em' }}
                trackname="Education"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/environment.webp").default}
                alt="environment_track"
                style={{ width: '2.5em' }}
                trackname="Environment"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/security.webp").default}
                alt="women_track"
                style={{ width: '2.5em' }}
                trackname="Women security"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/disaster.webp").default}
                alt="disaster_track"
                style={{ width: '2.5em' }}
                trackname="Disaster Management"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
              <TracksCards
                imgsrc={require("../../assets/icons/open.webp").default}
                alt="open_track"
                style={{ width: '2.5em' }}
                trackname="Open Innovation"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni molestiae quia, quibusdam corrupti pariatur? Quia officiis aliquid minima aliquam corporis molestias et facere, fugiat eligendi, accusamus odit labore. Et maxime placeat perferendis."
              />
        </Col>
      </Row>
    </div>
  );
}

export default TracksCard;
