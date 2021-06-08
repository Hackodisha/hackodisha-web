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

function Prizes() {
  return (
    <Raisebox>
      <div className="prizes_container">
        <h1 className="prizes_h1">
          EXCITING <span style={{ color: "#ff0000" }}> PRIZES</span>
       </h1> </div>
       <h2 className="prizes_h2">To be revealed soon</h2>
    </Raisebox>
  );
}

export default Prizes;
