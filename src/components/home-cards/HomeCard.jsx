import React, { useState } from "react";
import "../../pages/style.css";
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
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/health.svg").default}
                alt="health_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Healthcare</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/education.svg").default}
                alt="education_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Education</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/environment.svg").default}
                alt="environment_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Environment</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/security.svg").default}
                alt="women_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Women Security</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/disaster.svg").default}
                alt="disaster_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Disaster Management</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <div className="tracks_card">
            <div className="card_icon">
              <img
                src={require("../../assets/icons/open.svg").default}
                alt="open_track"
                className="tracks_icon"
              />
            </div>
            <h4 className="tracks_h4">Open Innovation</h4>
              {/*<div>
               <button className="btn-knowmore" onClick={handleDetails}>Know More</button>
                   {showDetailsPopUp && <Details
                      overview= "This is sooooooo Awesome"
                      handleClose={handleDetails}
                  />}
              </div>*/}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TracksCard;
