import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: -10%;

  @media only screen and (max-width: 320px) {
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
  margin-top: 10%;
  margin-left: 1%;

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

export const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  padding-bottom: 10%;
  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  padding: 20px;
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

function home2() {
  return (
    <div>
      <Raisebox>
        <Heading>
          Hackathon
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <Logos>
          <a href="https://www.nitrkl.ac.in/" target="_blank">
            <Logo
              src={require("../assets/sponsors/diamondjubilee.png").default}
              alt="NITR Diamond Jubilee"
            />
          </a>
          <a href="https://www.postman.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/postman.png").default}
              alt="Postman"
            />
          </a>
          <a href="https://studentambassadors.microsoft.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/MLSA.png").default}
              alt="MLSA"
            />
          </a>
          <a href="https://www.echoar.xyz/" target="_blank">
            <Logo
              src={
                require("../assets/sponsors/echoar-removebg-preview.png")
                  .default
              }
              alt="Echo AR"
            />
          </a>
          <a href="https://hoverrobotix.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/hoverRobotix.png").default}
              alt="Hover Robotix"
            />
          </a>
          <a href="https://rosenfeldmedia.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/Rosenfeld.png").default}
              alt="Rosenfeld"
            />
          </a>
          <a href="https://www.stickermule.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/sticker-mule.svg").default}
              alt="StickerMule"
            />
          </a>
          <a href="https://www.taskade.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/taskade.png").default}
              alt="Taskade"
            />
          </a>
        </Logos>
      </Raisebox>
      <Raisebox style={{marginTop:"2%"}}>
        <Heading>
          Hackathon
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <Logos>
          <a href="https://www.framer.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/framer.png").default}
              alt="Framer"
            />
          </a>
        </Logos>
      </Raisebox>
    </div>
  );
}

export default home2;
