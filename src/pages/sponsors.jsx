import React from "react";
import styled from "styled-components";
import "./style.css";
import { Row, Col } from "react-grid-system";
import Raisebox from "../components/raisebox/raisebox";

export const LogosBronze=styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 939px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 940px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

function Sponsors() {
  return (
    <div>
      {/* Platinum Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Platinum <span style={{ color: "#ff0000" }}> Sponsor </span>
        </h1>
        <a
          href="https://www.nitrkl.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo-large"
            src={require("../assets/sponsors/diamondnit.png").default}
            alt="NITR Diamond Jubilee platinum sponsor of Hackodisha"
          />
        </a>
      </Raisebox>

      {/* Gold Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Gold <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://devfolio.co/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-large"
                src={require("../assets/sponsors/devfolio1.png").default}
                alt="Devfolio gold sponsor for Hackodisha"
              />
            </a>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-large"
                src={require("../assets/sponsors/DigitalOcean1.png").default}
                alt="Digital Ocean bronze sponsor for Hackodisha"
              />
            </a>
          </Col>
       </Row>
      </Raisebox>

      {/* Silver Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Silver <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://www.portis.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-mid"
                src={require("../assets/sponsors/portisnew.png").default}
                alt="Portis silver sponsor for Hackodisha"
              />
            </a>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://celo.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-mid"
                src={require("../assets/sponsors/celo1.png").default}
                alt="Celo silver sponsor for Hackodisha"

              />
            </a>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://tezos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-mid"
                src={require("../assets/sponsors/tezos.png").default}
                alt="Tezos silver sponsor for Hackodisha"

              />
            </a>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <a
              href="https://polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-mid"
                src={require("../assets/sponsors/poly1.png").default}
                alt="Polygon silver sponsor for Hackodisha"
                style={{height:"90%"}}
              />
            </a>
          </Col>
        </Row>
      </Raisebox>

      {/* Bronze Sponsors */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Bronze
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <LogosBronze>
          <a href="https://www.echoar.xyz/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/echoar.png").default}
              alt="Echo AR bronze sponsor for Hackodisha"
              // style={{ width: "350px", height: "100px" }}
            />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/jetbrains.png").default}
              alt="Jet Brains bronze sponsor for Hackodisha"
              style={{ width: "150px" }}

            />
          </a>

          <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/balsamiq.png").default}
              alt="Balsamiq bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://www.taskade.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/taskade.png").default}
              alt="Taskade bronze sponsor for Hackodisha"
              style={{ width: "150px" }}
            />
          </a>
          <a href="https://codingblocks.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/codingblocks.png").default}
              alt="Coding Blocks bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://1password.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/1password.png").default}
              alt="1 password bronze sponsor for Hackodisha"
              style={{ width: "150px" }}
            />
          </a>

          <a href="https://draftbit.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/draftbit.png").default}
              alt="draftbit bronze sponsor for Hackodisha"
              // style={{ width: "350px", height: "100px" }}
            />
          </a>
          <a href="https://testmail.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/testmail.svg").default}
              alt="testmail app bronze sponsor for Hackodisha"
              // style={{ width: "320px", height: "120px" }}
            />
          </a>
          <a href="https://nostarch.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/image.png").default}
              alt="nostarch bronze sponsor for Hackodisha"

            />
          </a>

          <a href="https://www.roostoo.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/roostoo.png").default}
              alt="Roostoo bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://hoverrobotix.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/hoverRobotix.png").default}
              alt="Hover Robotix bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://www.hackathonsinternational.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={
                require("../assets/sponsors/HackathonsInternational1.png")
                  .default
              }
              alt="Hackathons International bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://interviewbuddy.in/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/interviewBuddy.png").default}
              alt="Interview Buddy bronze sponsor for Hackodisha"
            />
          </a>

          <a href="https://aichamp.in/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/download.png").default}
              alt="Aichamp bronze sponsor for Hackodisha"
            />
          </a>

          <a href="http://karoverify.xyz/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/karoverify2.png").default}
              alt="Karo Verify bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://rosenfeldmedia.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/Rosenfeld.png").default}
              alt="Rosenfeld bronze sponsor for Hackodisha"
              // style={{ width: "320px", height: "140px" }}
            />
          </a>
          <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/sticker-mule.svg").default}
              alt="StickerMule bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://replit.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/replit.svg").default}
              alt="replit bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://www.framer.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/framer.png").default}
              alt="Framer bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://gen.xyz/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/xyzdomain.png").default}
              alt="XYZ domain bronze sponsor for Hackodisha"

            />
          </a>
          <a href="https://www.linode.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/linode.png").default}
              alt="Linode bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/Wolfram1.jpg").default}
              alt="Wolfram bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://www.axure.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/axure.PNG").default}
              alt="Axure bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://www.qoom.io/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/qoom.png").default}
              alt="Qoom bronze sponsor for Hackodisha"
            />
          </a>
          <a href="https://www.codingminutes.com/" target="_blank" rel="noopener noreferrer">
            <img className="logo_small"
              src={require("../assets/sponsors/codingminutes.png").default}
              alt="Coding Minutes bronze sponsor for Hackodisha"
            />
          </a>

        </LogosBronze>
      </Raisebox>

      {/* Partners */}
      <Raisebox style={{paddingTop:"50px"}}>
        <Row>
          <Col sm={12} md={12} lg={4} xl={4}>
          <a href="https://www.scriptindia.org/" target="_blank" rel="noopener noreferrer">
            <img className="logo-script"
              src={require("../assets/sponsors/script.png").default}
              alt="Script Foundation education partner for Hackodisha"

              />
                </a>
                <h3 className="sponsors_h3">
          Education <span style={{ color: "#ff0000" }}> Partner </span>
        </h3>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
        <a href="https://webwiz-portfolio.web.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo-webwiz"
              src={require("../assets/sponsors/webwizlogo.png").default}
              alt="Webwiz the lead organizing team of Hackodisha"
            />
          </a>

          <h3 className="sponsors_h3">
          Organizing <span style={{ color: "#ff0000" }}> Team </span>
        </h3>
          </Col>
          <Col sm={12} md={12} lg={4} xl={4}>
        <a href="https://www.instagram.com/rourkela360/" target="_blank" rel="noopener noreferrer">
            <img className="logo-rourkela360"
              src={require("../assets/sponsors/rourkela360.png").default}
              alt="Rourkela 360 media partner of Hackodisha"

            />
          </a>

          <h3 className="sponsors_h3">
          Media <span style={{ color: "#ff0000" }}> Partner </span>
        </h3>
          </Col>
        </Row>
      </Raisebox>
    </div>
  );
}

export default Sponsors;
