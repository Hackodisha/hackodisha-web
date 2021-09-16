import React from 'react';
import Raisebox from '../components/raisebox/raisebox.js';
import TracksCard from '../components/home-cards/HomeCard.jsx';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const AboutHeading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Abouth1 = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 5rem;
  line-height: 1.1em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px) {
    font-size: 4rem;
  }
`;

function home2() {
  return (
    <div>
      <meta name="description" content="Lets solve the problems of Odisha" />
      <Raisebox>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <AboutHeading>
                <Abouth1>
                  Let's <span style={{ color: '#ff0000' }}> solve </span> the
                  problems of Odisha
                </Abouth1>
              </AboutHeading>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <TracksCard style={{ marginLeft: '10px' }} />
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default home2;
