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
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 5%;
  }
`;

export const Raisebox2 = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 10%;

  @media only screen and (max-width: 320px) {
    margin-left: -15%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    margin-left: -10%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 15%;
  }
`;

export const Raisebox3 = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 10%;

  @media only screen and (max-width: 320px) {
    margin-left: -15%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    margin-left: -10%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 15%;
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
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
    font-size: 3.8rem;
    margin-left: -11%;
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
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 200px;
    max-height: 150px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 280px;
    max-height: 180px;
    margin-top: 10%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 250px;
    max-height: 150px;
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

          <a href="https://www.taskade.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/taskade.png").default}
              alt="Taskade"
            />
          </a>
          <a href="https://www.stickermule.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/sticker-mule.svg").default}
              alt="StickerMule"
            />
          </a>
          <a href="https://replit.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/replit.svg").default}
              alt="replit"
            />
          </a>
          <a href="https://www.framer.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/framer.png").default}
              alt="Framer"
            />
          </a>
          <a href="https://gen.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/xyzdomain.png").default}
              alt="XYZ .Domain"
            />
          </a>
        </Logos>
      </Raisebox>

      <Raisebox2>
        <Heading>
          Hackathon
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <Logos>
          <a href="https://www.echoar.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/echoar.png").default}
              alt="Echo AR"
              style={{ width: "350px", height: "100px" }}
            />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/jetbrains.png").default}
              alt="Jet Brains"
            />
          </a>

          <a href="https://balsamiq.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/balsamiq.png").default}
              alt="Balsamiq"
            />
          </a>

          <a href="https://www.scriptindia.org/" target="_blank">
            <Logo
              src={require("../assets/sponsors/script.png").default}
              alt="Script Foundation"
            />
          </a>
          <a href="https://codingblocks.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/codingblocks.png").default}
              alt="Coding Blocks"
            />
          </a>

          <a href="https://1password.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/1password.png").default}
              alt="1 password"
            />
          </a>
          
          <a href="https://draftbit.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/draftbit.png").default}
              alt="draftbit"
            />
          </a>
          <a href="https://testmail.app/" target="_blank">
            <Logo
              src={require("../assets/sponsors/testmail.svg").default}
              alt="testmail app"
              style={{ width: "320px", height: "120px" }}
            />
          </a>
        </Logos>
      </Raisebox2>

      <Raisebox3>
        <Heading>
          Hackathon
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <Logos>
          <a href="https://nostarch.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/nostarch.png").default}
              alt="nostarch"
              style={{ width: "300px", height: "100px" }}
            />
          </a>

          <a href="https://www.roostoo.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/roostoo.png").default}
              alt="Roostoo"
            />
          </a>

          <a href="https://hoverrobotix.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/hoverRobotix.png").default}
              alt="Hover Robotix"
            />
          </a>

          <a href="https://www.hackathonsinternational.com/" target="_blank">
            <Logo
              src={
                require("../assets/sponsors/HackathonsInternational.png")
                  .default
              }
              alt="Hackathons International"
            />
          </a>

          <a href="https://interviewbuddy.in/" target="_blank">
            <Logo
              src={require("../assets/sponsors/interviewBuddy.png").default}
              alt="Interview Buddy"
            />
          </a>

          <a href="https://aichamp.in/" target="_blank">
            <Logo
              src={require("../assets/sponsors/aichamp.png").default}
              alt="Aichamp"
            />
          </a>

          <a href="http://karoverify.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/karoverify2.png").default}
              alt="Karo Verify"
            />
          </a>
          <a href="https://rosenfeldmedia.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/Rosenfeld.png").default}
              alt="Rosenfeld"
              style={{ width: "320px", height: "140px" }}
            />
          </a>
        </Logos>
      </Raisebox3>
    </div>
  );
}

export default home2;
