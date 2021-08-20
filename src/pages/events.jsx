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

const Text = styled.p`
  color: white;
  text-align: left;
  margin-left: 2%;
  line-height: 1.7rem;
`;

const Date = styled.h2`
  color: white;
  text-align: left;
  margin-left: 2%;
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
                src={require('../assets/images/event8.png').default}
                alt="Image"
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
              <div style={{ textAlign: 'right' }}>
                <Button>Know more</Button>
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
                src={require('../assets/images/event4.png').default}
                alt="Image"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Heading>
                Crypt-o-quest<span style={{ color: '#ff0000' }}>.</span>
              </Heading>
              <Text>
                Aliens are trying to communicate with us by sending signals. You
                have been given waveforms, and you have to decode what circuitry
                the aliens might be using. Your task is to replicate those
                waveforms as closely as possible by simulating your circuit
                before they attack us.
              </Text>
              <Date>
                <span style={{ color: '#ff0000' }}>Date: </span>10th September
                2021
              </Date>
              <div style={{ textAlign: 'right' }}>
                <Button>Know more</Button>
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
                src={require('../assets/images/event5.png').default}
                alt="Image"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Heading>
                Productivity Hack<span style={{ color: '#ff0000' }}>.</span>
              </Heading>
              <Text>
                Aliens are trying to communicate with us by sending signals. You
                have been given waveforms, and you have to decode what circuitry
                the aliens might be using. Your task is to replicate those
                waveforms as closely as possible by simulating your circuit
                before they attack us.
              </Text>
              <Date>
                <span style={{ color: '#ff0000' }}>Date: </span>11th September
                2021
              </Date>
              <div style={{ textAlign: 'right' }}>
                <Button>Know more</Button>
              </div>
            </Grid>
          </Grid>
        </Event>
      </Raisebox>
    </div>
  );
}

export default Events;
