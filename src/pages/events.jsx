import React from 'react';
import styled from 'styled-components';
import './style.css';
import { Grid } from '@material-ui/core';
import Raisebox from '../components/raisebox/raisebox';

const Event = styled.div`
  padding: 2%;
`;

const Image = styled.img`
  width: 100%;
`;

const Image2 = styled.img`
  width: 40%;
  margin-top: -15%;
`;

const Image3 = styled.img`
  width: 20%;
  margin-top: -20%;
`;

const Text = styled.h3`
  color: white;
  text-align: left;
  margin-left: 2%;
  line-height: 1.9rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
`;

const Date = styled.h3`
  color: white;
  text-align: left;
  margin-left: 2%;
  margin-top: 5%;
  font-weight: 500;
`;

const Heading = styled.h1`
  color: white;
  font-size: 4rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #ff0000;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    color: #000;
    background-color: #ff0000;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

function Events() {
  return (
    <div>
      <Raisebox style={{ minHeight: '20vh' }}>
        <Event>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Image
                src="https://res.cloudinary.com/webwiznitr/image/upload/v1629741012/Assets/Images/cyborg1_n1txwu.png"
                alt="Replica Event"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Heading>
                Replica<span style={{ color: '#ff0000' }}>.</span>
              </Heading>
              <Text>
                Aliens are trying to communicate with us by sending signals. You
                have been given waveforms, and you have to decode what circuitry
                the aliens might be using. Your task is to replicate those
                waveforms as closely as possible by simulating your circuit
                before they attack us.
              </Text>
              <Date>
                <span style={{ color: '#ff0000' }}>Date: </span>4th September
                2021
              </Date>
              <div style={{ textAlign: 'left' }}>
                <a href="https://dare2compete.com/p/replica-hackodisha-national-institute-of-technology-nit-rourkela-194970?lb=jDyxl0d" target="_blank" rel="noopener noreferrer">
                <Button>Know more</Button>
                </a>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Image2
                  src="https://res.cloudinary.com/webwiznitr/image/upload/v1629741729/Assets/Images/Cy_logo_W_qolj9o.png"
                  alt="Cyborg"
                />
              </div>
            </Grid>
          </Grid>
        </Event>
      </Raisebox>
      <Raisebox style={{ minHeight: '20vh' }}>
        <Event>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Image
                src="https://res.cloudinary.com/webwiznitr/image/upload/v1629741013/Assets/Images/finance1_gdqncl.png"
                alt="Cryptoquest"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Heading>
                Crypt-o-quest<span style={{ color: '#ff0000' }}>.</span>
              </Heading>
              <Text>
                Cryptocurrency trading or crypto trading involves buying and
                selling cryptocurrencies to earn profit. We speculate mainly on
                the price movement of cryptocurrency. As of recently, this field
                is pretty hyped up, and people are driven towards it.
                <br />
                When we talk about the competition, the RSTO game token comes
                into account. It is the driving force of the competitions. Top
                rankers will get the reward in terms of RSTO, while low rankers
                will face some loss. Thus it builds up a reward system where you
                play more to earn more.
              </Text>
              <Date>
                <span style={{ color: '#ff0000' }}>Date: </span>10th September
                2021
              </Date>
              <div style={{ textAlign: 'left' }}>
              <a href="https://dare2compete.com/o/OCieEpM?refId=pkfVP2s&lb=pPAoUz8" target="_blank" rel="noopener noreferrer">
                <Button>Know more</Button>
                </a>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Image3
                  src="https://res.cloudinary.com/webwiznitr/image/upload/v1629740711/Assets/Images/Finance_club.png"
                  alt="Finance Club NITR"
                />
              </div>
            </Grid>
          </Grid>
        </Event>
      </Raisebox>
      <Raisebox style={{ minHeight: '20vh' }}>
        <Event>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Image
                src="https://res.cloudinary.com/webwiznitr/image/upload/v1629741013/Assets/Images/cyborg2_boftki.png"
                alt="Auto-Potency"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Heading>
                Auto-Potency<span style={{ color: '#ff0000' }}>.</span>
              </Heading>
              <Text>
                The revolution of industry brought a drastic change in people's
                living standard and culture. The increase in number of jobs from
                various sectors, increase in production activities helped people
                grow to an ever increasing level that it seems A.I. is going to
                take over our work force. This 21st century has given the people
                the needs to fulfill anything they can dream of. Starting from a
                small needle to huge machines. The obsession with productivity
                has run our lives. Collective work has always been a wise
                principle to improve our productivity in this modern era of
                machines.
              </Text>
              <Date>
                <span style={{ color: '#ff0000' }}>Date: </span>11th September
                2021
              </Date>
              <div style={{ textAlign: 'left' }}>
              <a href="https://dare2compete.com/p/auto-potency-hackodisha-national-institute-of-technology-nit-rourkela-194981?lb=jDyxl0d" target="_blank" rel="noopener noreferrer">
                <Button>Know more</Button>
                </a>
              </div>
              <div style={{ textAlign: 'right' }}>
                <Image2
                  src="https://res.cloudinary.com/webwiznitr/image/upload/v1629741729/Assets/Images/Cy_logo_W_qolj9o.png"
                  alt="Cyborg"
                />
              </div>
            </Grid>
          </Grid>
        </Event>
      </Raisebox>
    </div>
  );
}

export default Events;
