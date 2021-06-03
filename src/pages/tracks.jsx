import React from "react";
import styled from "styled-components";
import HomeCard from "../components/home-cards/HomeCard.jsx";

export const Raisebox = styled.div`
  display: flex;
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: -2%;

  @media only screen and (max-width: 320px){
    margin-left: -15%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
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
  padding: 1rem;
  line-height: 1.2em;
  font-size: 5rem;
  margin-top: 10%;
  margin-left: 1%;

  @media only screen and (max-width: 360px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 361px) and (max-width: 410px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 411px) and (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 481px) and (max-width: 595px) {
    font-size: 3.5rem;
    text-align: center;
    margin: 0 auto 0 auto;
    ${'' /* margin-left: 9%; */}
  }

  @media only screen and (min-width: 596px) and (max-width: 747px) {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto 0 auto;
    ${'' /* margin-left: 15%; */}
  }

  @media only screen and (min-width: 748px) and (max-width: 1024px) {
    text-align: center;
    margin: 0 auto;
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4.5rem;
    margin-top: 10%;
  }
`;

export const Tracks = styled.div`
  margin-left: 47%;
  margin-top: -38%;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: 150px 150px;

  @media only screen and (max-width: 360px) {
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
  }

  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
  }
  @media only screen and (min-width: 481px) and (max-width: 620px) {
    margin: 0 auto;
    padding-top: 7%;
    padding-left: 3%;
    grid-template-columns: repeat(2, 220px);
    grid-template-rows: 150px 150px;
    overflow: hidden;
  }

  @media only screen and (min-width: 621px) and (max-width: 768px) {
    margin: 0 auto;
    padding-top: 10%;
    grid-template-columns: repeat(2, 270px);
    grid-template-rows: 150px 150px;
    overflow: hidden;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 0 auto;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: 200px 200px;
    overflow: hidden;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: 150px 150px;
    overflow: hidden;
  }
`;

function home2() {
  return (
    <>
    <meta name="description" content="Lets solve the problems of Odisha" />
    <Raisebox>
      <Container>
        <Heading>
          Let's <span style={{ color: "#ff0000" }}> solve </span> <br />
          the problems <br />
          of Odisha
        </Heading>
        <Tracks>
          <HomeCard style={{ marginLeft: "10px" }} />
        </Tracks>
      </Container>
    </Raisebox>
    </>
  );
}

export default home2;
