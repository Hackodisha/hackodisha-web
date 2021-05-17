import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #191919;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: 2%;

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
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
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
  line-height: 0.8em;
  font-size: 5rem;
  margin-top: 10%;
  margin-left: 1%;
  @media only screen and (max-width: 360px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-size: 4.5rem;
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    margin: 0 auto;
    margin-top: 0;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 10%;
  }
`;

export const Logo = styled.img`
  max-width: 400px;
  max-height: 150px;
  margin: 0 auto;
  @media only screen and (max-width: 360px) {
    max-width: 200px;
    max-height: 150px;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    max-width: 200px;
    max-height: 150px;
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    max-width: 200px;
    max-height: 150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 250px;
    max-height: 150px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export const Logos = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 5%;

  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 10%;
  }
`;

function home2() {
  return (
    <Raisebox>
      <Container>
        <Heading>
          Hackathon
          <br />
          <span style={{ color: "#ff0000" }}> Sponsors </span>{" "}
        </Heading>
      </Container>
      <Logos>
        <a href="https://www.postman.com/">
          <Logo src={require("../assets/images/postman.173f0764.png").default}/>
        </a>
        <a href="https://studentambassadors.microsoft.com/">
          <Logo src={require("../assets/images/MLSA.png").default} />
        </a>
        <a href="https://www.stickermule.com/">
          <Logo src={require("../assets/images/sticker-mule.svg").default} />
        </a>
        <a href="https://www.nitrkl.ac.in/">
          <Logo
            src={require("../assets/images/NITR diamondjubilee logo.png").default} 
          />
        </a>
      </Logos>
    </Raisebox>
  );
}

export default home2;
