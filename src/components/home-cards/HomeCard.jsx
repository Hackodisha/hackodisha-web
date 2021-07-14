import React, { useState } from "react";
import { TracksCards, CardIcon, Tracksh4 } from "./HomeCardElement";
import { Row, Col } from "react-grid-system";
import './HomeCard.css';
// import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function TracksCard(){

  {/*const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);*/}

  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/health.webp").default}
                alt="health_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Healthcare</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore" >Know More</button>
            </div>
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/education.webp").default}
                alt="education_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Education</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore">Know More</button>
            </div>
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/environment.webp").default}
                alt="environment_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Environment</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore">Know More</button>
            </div>
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/security.webp").default}
                alt="women_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Women Security</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore" >Know More</button>
            </div>
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/disaster.webp").default}
                alt="disaster_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Disaster Management</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore" >Know More</button>
            </div>
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon className="card_icon">
              <img
                src={require("../../assets/icons/open.webp").default}
                alt="open_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Open Innovation</Tracksh4>
            <div className="button-container">
               <button className="btn-knowmore" >Know More</button>
            </div>
          </TracksCards>
        </Col>
      </Row>
    </div>
  );
}

export default TracksCard;
