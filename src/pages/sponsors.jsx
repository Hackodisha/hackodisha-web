import React from "react";
import styled from "styled-components";
import "./style.css";
import { Row, Col } from "react-grid-system";
import Raisebox from "../components/raisebox/raisebox";
import Card from "../components/card";
import {bronzeData, silverData, goldData, platinumData, scriptData, webwizData, rourkData, OdishaData, rourkShData} from "./sponData";



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
  }`


  function bronzeCard(bronzeData) {
    return (
       <Card
        key={bronzeData.id}
        className={bronzeData.className}
        link={bronzeData.link}
        img={bronzeData.image}
        alt={bronzeData.alt}
      />
    );
  };

  function makeCard(silverData) {
    return (
      <Col sm={12} md={6} lg={6} xl={6}>
       <Card
        key={silverData.id}
        className={silverData.className}
        link={silverData.link}
        img={silverData.image}
        alt={silverData.alt}
      />
       </Col>
    );
  }



  function goldCard(goldData) {
    return (
      <Col sm={12} md={6} lg={6} xl={6}>
       <Card
        key={goldData.id}
        className={goldData.className}
        link={goldData.link}
        img={goldData.image}
        alt={goldData.alt}
      />
       </Col>
    );
  }

  function platinumCard(platinumData) {
    return (

       <Card
        key={platinumData.id}
        className={platinumData.className}
        link={platinumData.link}
        img={platinumData.image}
        alt={platinumData.alt}
      />

    );
  }

  function scriptCard(scriptData) {
    return (

       <Card
        key={scriptData.id}
        className={scriptData.className}
        link={scriptData.link}
        img={scriptData.image}
        alt={scriptData.alt}
      />

    );
  }

  function webwizCard(webwizData) {
    return (

       <Card
        key={webwizData.id}
        className={webwizData.className}
        link={webwizData.link}
        img={webwizData.image}
        alt={webwizData.alt}
      />

    );
  }

  function rourkCard(rourkData) {
    return (

       <Card
        key={rourkData.id}
        className={rourkData.className}
        link={rourkData.link}
        img={rourkData.image}
        alt={rourkData.alt}
      />

    );
  }

  function OdishaCard(OdishaData) {
    return (

       <Card
        key={OdishaData.id}
        className={OdishaData.className}
        link={OdishaData.link}
        img={OdishaData.image}
        alt={OdishaData.alt}
      />

    );
  }

  function RShinesCard(rourkShData) {
    return (

       <Card
        key={rourkShData.id}
        className={rourkShData.className}
        link={rourkShData.link}
        img={rourkShData.image}
        alt={rourkShData.alt}
      />

    );
  }


function Sponsors() {
  return (
    <div>
      {/* Platinum Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Platinum <span style={{ color: "#ff0000" }}> Sponsor </span>
        </h1>
        {platinumData.map(platinumCard)}
      </Raisebox>

      {/* Gold Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Gold <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <Row>
        {goldData.map(goldCard)}
       </Row>
      </Raisebox>

      {/* Silver Sponsor */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Silver <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <Row>
        {silverData.map(makeCard)}
        </Row>
      </Raisebox>

      {/* Bronze Sponsors */}
      <Raisebox style={{minHeight:"20vh", paddingBottom:"3vh"}}>
        <h1 className="sponsors_h1">
          Bronze
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </h1>
        <LogosBronze>
          {bronzeData.map(bronzeCard)}
        </LogosBronze>
      </Raisebox>

      {/* Partners */}
      <Raisebox style={{minHeight:"20vh",paddingTop:"50px"}}>
        <Row>
          <Col>
          {scriptData.map(scriptCard)}

                <h3 className="sponsors_h3">
          Education <span style={{ color: "#ff0000" }}> Partner </span>
        </h3>
        </Col>
        <Col>
        {webwizData.map(webwizCard)}


          <h3 className="sponsors_h3">
          Organizing <span style={{ color: "#ff0000" }}> Team </span>
          </h3>
        </Col>
      </Row>
      </Raisebox>

      <Raisebox style={{minHeight:"20vh",paddingBottom:"3vh" }}>
        <h1 className="sponsors_h1">
          Media <span style={{ color: "#ff0000" }}> Partners </span>
        </h1>
        <Row>
          <Col sm={12} md={12} lg={4} xl={4}>
          {rourkData.map(rourkCard)}
          </Col>

          <Col sm={12} md={12} lg={4} xl={4}>
          {OdishaData.map(OdishaCard)}
          </Col>

          <Col sm={12} md={12} lg={4} xl={4}>
          {rourkShData.map(RShinesCard)}
          </Col>
        </Row>
      </Raisebox>
    </div>
  );
}

export default Sponsors;
