import React from "react";
import styled from "styled-components";
import './style.css';

export const Raisebox = styled.div`
min-height: 70vh;
width: 90vw;
margin: 10vh auto;
background: #18191a;
box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
border-radius: 10px;
`;

function Schedule() {
  return (
    <Raisebox>
      <div className="schedule_container">
        <h1 className="schedule_h1">
          HACKATHON <span style={{ color: "#ff0000" }}> SCHEDULE</span>
       </h1> </div>
       <h2 className="schedule_h2">To be revealed soon</h2>
    </Raisebox>
  );
}

export default Schedule;
