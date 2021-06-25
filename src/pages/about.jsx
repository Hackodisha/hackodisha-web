import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./style.css";
import Raisebox from "../components/raisebox/raisebox";

function About() {
  return (
    <div>
      <Raisebox style={{ minHeight: "20vh", display: "flex" }}>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="about_heading">
                <h1 className="about_h1">
                  HACK <span style={{ color: "#ff0000" }}> ODISHA </span>{" "}
                </h1>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <h2 className="about_h2">
                Hackodisha brings you an enterprising platform where you can
                showcase your unique ideas and expand your boundaries with your
                creativity and proficiency. Webwiz NIT Rourkela is proud to host
                the hackathon on the occasion of the diamond jubilee celebration
                of NIT Rourkela. Hackodisha is a 36-hour hackathon and whether
                you are having a formidable team or you are a lone-wolf, do grab
                this opportunity to take home some exciting prizes, goodies and
                certificates and MEMORIES!
              </h2>
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default About;
