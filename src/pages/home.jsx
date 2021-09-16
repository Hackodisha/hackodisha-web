import React from 'react';
import styled from 'styled-components';
import Raisebox from '../components/raisebox/raisebox';
import { Container, Row, Col } from 'react-grid-system';

const Homeh1 = styled.h1`
  font-weight: 400;
  color: #fff;
  line-height: 1.5em;
  font-size: 1.8em;
  margin-top: 20vh;
  margin-left: -2vw;

  @media screen and (max-width: 575px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 767px) {
    margin: -10vh auto 0 auto;
  }
`;

const Homeh1Span = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;

  @media screen and (max-width: 575px) {
    font-size: 1.7rem;
  }
`;

const MapImg = styled.img`
  height: auto;
  width: 70vw;
  margin-left: -15vw;
  margin-top: -10vh;
  @media screen and (max-width: 767px) {
    overflow: hidden;
    width: 550px;
    margin-left: -35vw;
  }
`;

const DateImg = styled.img`
  margin: 5vh auto 0 auto;
  width: 45vw;
  height: auto;
  padding: 5%;
  margin-left: -2vw;
  @media screen and (max-width: 767px) {
    width: 80vw;
  }
`;

const Buttons = styled.div`
  margin-left: -40vw;
  margin-top: 2vh;
  @media only screen and (min-width: 381px) and (max-width: 768px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 380px) {
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Button1 = styled.button`
  height: 46px;
  width: 315px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: black;
  @media only screen and (min-width: 708px) {
    margin-left: 10px;
  }
`;

const Button2 = styled.div`
  cursor: pointer;
`;

const Discord = styled.img`
  height: 43px;
  width: 140px;
`;

function Home() {
  return (
    <div>
      <Raisebox style={{ minHeight: '20vh', marginTop: '5vh' }}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <MapImg
                src={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814998/Assets/Images/Map1_qktwdb.webp'}
                alt="Hackodisha Map of Odisha"
              />
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <Homeh1>
                Give life to your innovative ideas that can be solutions to the
                problems of today with <Homeh1Span>HACKODISHA!</Homeh1Span>
              </Homeh1>
              <DateImg
                src={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814995/Assets/Images/date_hojtut.png'}
                alt="Hackodisha Date"
              />
              <Buttons>
                <Button2
                  id="devfolio-apply-now"
                  className="apply-button"
                  data-hackathon-slug="hackodisha"
                  data-button-theme="light"
                ></Button2>
                <a
                  href="https://discord.gg/VWrQxSg9nR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button1>
                    <Discord
                      src={'https://res.cloudinary.com/webwiznitr/image/upload/v1627814995/Assets/Images/discord_oqrpsk.png'}
                      alt="DISCORD"
                    />
                  </Button1>
                </a>
              </Buttons>
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default Home;
