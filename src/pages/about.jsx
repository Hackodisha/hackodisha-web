import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Raisebox from "../components/raisebox/raisebox";
import styled from "styled-components";

const AboutHeading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Abouth1 = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 5rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 4rem;
  }
`;

const Abouth2 = styled.h2`
  font-weight: 900;
  text-align: left;
  color: #fff;
  line-height: 2em;
  font-size: 1.4rem;

  @media screen and (max-width: 576px){
    font-size: 1.2rem;
  }
`;

function About() {
  return (
    <div>
      <Raisebox style={{ minHeight: "20vh", display: "flex" }}>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <AboutHeading>
                <Abouth1>
                  HACK <span style={{ color: "#ff0000" }}> ODISHA </span>{" "}
                </Abouth1>
              </AboutHeading>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Abouth2>
                Hackodisha brings you an enterprising platform where you can
                showcase your unique ideas and expand your boundaries with your
                creativity and proficiency. Webwiz NIT Rourkela is proud to host
                the hackathon on the occasion of the diamond jubilee celebration
                of NIT Rourkela. Hackodisha is a 36-hour hackathon and whether
                you are having a formidable team or you are a lone-wolf, do grab
                this opportunity to take home some exciting prizes, goodies and
                certificates and MEMORIES!
              </Abouth2>
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default About;
