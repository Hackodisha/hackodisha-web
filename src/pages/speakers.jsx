import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";

const SpeakersContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Speakersh1 = styled.h1`
  font-weight: 900;
  padding-top: 5%;
  color: #fff;
  font-size: 6rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 4rem;
  }
`;

const Speakersh2 = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (max-width: 576px){
    font-size: 2rem;
  }
`;

function Speakers() {
  return (
    <Raisebox>
      <SpeakersContainer>
        <Speakersh1>
          HACKATHON <span style={{ color: "#ff0000" }}> SPEAKERS</span>
        </Speakersh1>{" "}
      </SpeakersContainer>
      <Speakersh2>To be revealed soon</Speakersh2>
    </Raisebox>
  );
}

export default Speakers;
