import React from "react";
import Raisebox from "../components/raisebox/raisebox.js";
import TracksCard from "../components/home-cards/HomeCard.jsx";
import { Container, Row, Col } from "react-grid-system";

function home2() {
  return (
    <>
      <meta name="description" content="Lets solve the problems of Odisha" />
      <Raisebox>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="about_heading">
                <h1 className="about_h1">
                  Let's <span style={{ color: "#ff0000" }}> solve </span> the
                  problems of Odisha
                </h1>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <TracksCard style={{ marginLeft: "10px" }} />
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </>
  );
}

export default home2;
