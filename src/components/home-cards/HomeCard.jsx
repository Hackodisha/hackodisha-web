import React, { useState } from "react";
import { TracksCards, CardIcon, Tracksh4 } from "./HomeCardElement";
import { Row, Col } from "react-grid-system";

function TracksCard() {

  {/*const [showDetailsPopUp, setShowDetailsPopUp] = useState(false);

  function handleDetails() {
    setShowDetailsPopUp(true);
    setShowDetailsPopUp(!showDetailsPopUp);
  }*/}

  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/health.svg").default}
                alt="health_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Healthcare</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/education.svg").default}
                alt="education_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Education</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/environment.svg").default}
                alt="environment_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Environment</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/security.svg").default}
                alt="women_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Women Security</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon>
              <img
                src={require("../../assets/icons/disaster.svg").default}
                alt="disaster_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Disaster Management</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <TracksCards>
            <CardIcon className="card_icon">
              <img
                src={require("../../assets/icons/open.svg").default}
                alt="open_track"
                style={{ width: '2.5em' }}
              />
            </CardIcon>
            <Tracksh4>Open Innovation</Tracksh4>
            {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </TracksCards>
        </Col>
      </Row>
    </div>
  );
}

export default TracksCard;
