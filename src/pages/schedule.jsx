import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  display: flex;
  min-height: 80vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media only screen and (max-width: 320px){
    margin-left: -15%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    height: 95vh;
    margin-left: -10%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
  }
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Heading = styled.h1`
  font-weight: 900;
  letter-spacing: -0.07em;
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 3rem;
  line-height: 0.8em;
  font-size: 5rem;
  margin-top: 1%;
  margin-left: 13%;

  @media only screen and (max-width: 340px) {
    font-size: 3rem;
    margin-left: -5%;
  }

  @media only screen and (min-width: 341px) and (max-width: 360px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto;
    margin-left: -2%;
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 4.5rem;
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 5rem;
    margin-top: 10%;
  }
`;

export const Content = styled.h1`
  font-weight: 900;
  background: #fff;
  background-clip: text;
  text-align: left;
  -webkit-background-clip: text;
  color: transparent;
  padding: 1rem;
  line-height: 2em;
  font-size: 1.5rem;
  padding-left: 40%;
  padding-right: 4%;
  padding-top: 10%;
  margin-top: -10%;

  @media only screen and (max-width: 360px) {
    text-align: center;
    font-size: 1em;
    margin-left: -15%;
    margin-top: 0%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    text-align: center;
    font-size: 1.2em;
    margin-left: -15%;
    margin-top: 0%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    text-align:center;
    font-size: 1.2em;
    margin-left: -8%;
    margin-top: 0%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
    font-size: 2rem;
    margin-left: -7%;
    margin-top:0%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    margin-top:-40%;
  }
`;

function home2() {
  return (
    <Raisebox>
      <Container>
        <Heading>
          Know your <span style={{ color: "#ff0000" }}> Schedule </span>
       </Heading>
       <Content style={{color: "white"}}>To be revealed soon</Content>
      </Container>
    </Raisebox>
  );
}

export default home2;
