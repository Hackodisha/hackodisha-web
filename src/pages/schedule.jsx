import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";

const ScheduleContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Scheduleh1 = styled.h1`
  font-weight: 900;
  padding-top: 5%;
  color: #fff;
  font-size: 6rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 3.2rem;
  }
`;

const Scheduleh2 = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (max-width: 576px){
    font-size: 2rem;
  }
`;

function Schedule() {
  return (
    <Raisebox>
      <ScheduleContainer>
        <Scheduleh1>
          HACKATHON <span style={{ color: "#ff0000" }}> SCHEDULE</span>
        </Scheduleh1>{" "}
      </ScheduleContainer>
      <Scheduleh2>To be revealed soon</Scheduleh2>
    </Raisebox>
  );
}

export default Schedule;
