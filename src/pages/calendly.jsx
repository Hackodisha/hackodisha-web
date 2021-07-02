import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import { InlineWidget } from "react-calendly";
import styled from "styled-components";

const CalendlyHeading = styled.h1`
  font-weight: 900;
  padding-top: 5%;
  color: #fff;
  font-size: 5rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 4rem;
  }
`;

const CalendlyBox = styled.div`
  width: 72%;
  margin-left: 10rem;
  align-items: center;

  @media screen and (max-width: 576px){
    width: 100%;
    margin-left: 0%;
    height: 100%;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    margin-left: 0%;
    height: 100%;
  }
`;

function Calendly() {
  return (
    <Raisebox>
      <div>
        <CalendlyHeading>
          Schedule<span style={{ color: "#ff0000" }}> Meet</span>
        </CalendlyHeading>
        <CalendlyBox>
          <InlineWidget url="https://calendly.com/hackodisha" />
        </CalendlyBox>
      </div>

    </Raisebox>
  );
}

export default Calendly;
