import React from 'react';
import styled from 'styled-components';
import './style.css';
import { Row, Col } from 'react-grid-system';
import Raisebox from '../components/raisebox/raisebox';
import Card from '../components/card';
import {
  bronzeData,
  silverData,
  goldData,
  platinumData,
  scriptData,
  webwizData,
  rourkData,
  OdishaData,
  rourkShData,
  BbsrData,
  eOdishaData,
  noticeBoardData,
  githubData,
} from './sponData';

const Sponsors1 = styled.h1`
  padding-top: 5%;
  font-weight: 900;
  color: #fff;
  font-size: 5rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;
  @media screen and (max-width: 576px) {
    font-size: 4rem;
  }
`;

const Sponsors3 = styled.h3`
  font-weight: 800;
  color: #fff;
  font-size: 3rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;
`;

const LogosBronze = styled.div`
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
`;

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
}

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

function githubCard(githubData) {
  return (
    <Col sm={12} md={6} lg={6} xl={6}>
      <Card
        key={githubData.id}
        className={githubData.className}
        link={githubData.link}
        img={githubData.image}
        alt={githubData.alt}
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
function noticeBoardCard(noticeBoardData) {
  return (
    <Card
      key={noticeBoardData.id}
      className={noticeBoardData.className}
      link={noticeBoardData.link}
      img={noticeBoardData.image}
      alt={noticeBoardData.alt}
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

function BbsrbuzzCard(BbsrData) {
  return (
    <Card
      key={BbsrData.id}
      className={BbsrData.className}
      link={BbsrData.link}
      img={BbsrData.image}
      alt={BbsrData.alt}
    />
  );
}
function eOdishaCard(eOdishaData) {
  return (
    <Card
      key={eOdishaData.id}
      className={eOdishaData.className}
      link={eOdishaData.link}
      img={eOdishaData.image}
      alt={eOdishaData.alt}
    />
  );
}

function Sponsors() {
  return (
    <div>
      {/* Platinum Sponsor */}
      <Raisebox style={{ minHeight: '20vh', paddingBottom: '3vh' }}>
        <Sponsors1>
          Platinum <span style={{ color: '#ff0000' }}> Sponsor </span>
        </Sponsors1>
        {platinumData.map(platinumCard)}
      </Raisebox>

      {/* Gold Sponsor */}
      <Raisebox style={{ minHeight: '20vh', paddingBottom: '3vh' }}>
        <Sponsors1>
          Gold <span style={{ color: '#ff0000' }}> Sponsors </span>
        </Sponsors1>
        <Row>{goldData.map(goldCard)}</Row>
        <Row justify="center">{githubData.map(githubCard)}</Row>
      </Raisebox>

      {/* Silver Sponsor */}
      <Raisebox style={{ minHeight: '20vh', paddingBottom: '3vh' }}>
        <Sponsors1>
          Silver <span style={{ color: '#ff0000' }}> Sponsors </span>
        </Sponsors1>
        <Row>{silverData.map(makeCard)}</Row>
      </Raisebox>

      {/* Bronze Sponsors */}
      <Raisebox style={{ minHeight: '20vh', paddingBottom: '3vh' }}>
        <Sponsors1>
          Bronze
          <span style={{ color: '#ff0000' }}> Sponsors </span>
        </Sponsors1>
        <LogosBronze>{bronzeData.map(bronzeCard)}</LogosBronze>
      </Raisebox>

      {/* Partners */}
      <Raisebox style={{ minHeight: '20vh', paddingTop: '50px' }}>
        <Row>
          <Col>
            {scriptData.map(scriptCard)}

            <Sponsors3>
              Education <span style={{ color: '#ff0000' }}> Partner </span>
            </Sponsors3>
          </Col>
          <Col>
            {webwizData.map(webwizCard)}

            <Sponsors3>
              Organizing <span style={{ color: '#ff0000' }}> Team </span>
            </Sponsors3>
          </Col>
        </Row>
      </Raisebox>

      <Raisebox style={{ minHeight: '20vh', paddingBottom: '3vh' }}>
        <Sponsors1>
          Media <span style={{ color: '#ff0000' }}> Partners </span>
        </Sponsors1>
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
        <Row>
          <Col sm={12} md={12} lg={4} xl={4}>
            {BbsrData.map(BbsrbuzzCard)}
          </Col>
          <Col sm={12} md={12} lg={4} xl={4}>
            {eOdishaData.map(eOdishaCard)}
          </Col>
          <Col sm={12} md={12} lg={4} xl={4}>
            {noticeBoardData.map(noticeBoardCard)}
          </Col>
        </Row>
      </Raisebox>
    </div>
  );
}

export default Sponsors;
