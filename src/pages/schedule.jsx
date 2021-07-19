import {React, useState} from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";
import "./style.css";
import { Day1, Day2, Day3 } from "./ScheduleData";
import ScheduleCard from "../components/ScheduleCard";



const ScheduleContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Scheduleh1 = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 6rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px) {
    font-size: 3.2rem;
  }
`;
function card1(Day1) {
  return(
  <ScheduleCard
    key={Day1.id}
    time={Day1.time}
    date={Day1.date}
    title={Day1.title}
  />
  );
}
function card2(Day2) {
  return(
  <ScheduleCard
    key={Day2.id}
    time={Day2.time}
    date={Day2.date}
    title={Day2.title}
  />
  );
}
function card3(Day3) {
  return(
  <ScheduleCard
    key={Day3.id}
    time={Day3.time}
    date={Day3.date}
    title={Day3.title}
  />
  );
}
let DayCard = Day1;
let scheduleCard = card1;

function Schedule() {

  return (
    <Raisebox>

      <ScheduleContainer>
        <Scheduleh1>
          HACKATHON <span style={{ color: "#ff0000" }}> SCHEDULE</span>
        </Scheduleh1>{" "}
      </ScheduleContainer>
      

      <div className="container-schedule">
        <section className="content-section">
          <div className="contents">
            <div id='day1' className="daily-schedule">
                {Day1.map(card1)}
                {Day2.map(card2)}
            </div>
          </div>
        </section>
      </div>
    </Raisebox>
  );
}

export default Schedule;
