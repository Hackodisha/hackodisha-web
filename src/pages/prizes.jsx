import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";

const PrizesContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Prizesh1 = styled.h1`
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

const Prizesh2 = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (max-width: 576px){
    font-size: 2rem;
  }
`;

function Prizes() {
  return (
    <Raisebox>
      <PrizesContainer>
        <Prizesh1>
          EXCITING <span style={{ color: "#ff0000" }}> PRIZES</span>
        </Prizesh1>{" "}
      </PrizesContainer>
      <Prizesh2>To be revealed soon</Prizesh2>
    </Raisebox>
  );
}

export default Prizes;
