import React from "react";
import styled from "styled-components";
import "./style.css";
import { Row, Col } from "react-grid-system";
import Raisebox from "../components/raisebox/raisebox";
import Speakercard from "../components/Speakercard";
import SpeakerData from "./SpeakerData";

const Speakers = styled.h1`
  padding-top: 5%;
  font-weight: 900;
  color: #fff;
  font-size: 5rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;
  @media screen and (max-width: 576px) {
    font-size: 4rem;
  }
`;

function speakCard(SpeakerData) {
  return (
    <Col style={{paddingBottom:'2rem'}} sm={12} md={6} lg={6} xl={6}>
      <Speakercard
        key={SpeakerData.id}
        className={SpeakerData.className}
        link={SpeakerData.link}
        img={SpeakerData.image}
        alt={SpeakerData.alt}
        name={SpeakerData.name}
        description={SpeakerData.description}
        company_logo={SpeakerData.company_logo}
        alt_company={SpeakerData.alt_company}
      />
    </Col>
  );
}

function Speaker() {
  return (
    <div>
      <Raisebox style={{ minHeight: "20vh", paddingBottom: "3vh" }}>
        <Speakers>
          Our <span style={{ color: "#ff0000" }}> Speakers </span>
        </Speakers>
        <Row>
          {SpeakerData.map(speakCard)} 
        </Row>
        <Row>

        </Row>
      </Raisebox>
    </div>
  );
}

export default Speaker;
