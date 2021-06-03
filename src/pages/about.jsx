import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  display: flex;
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: -2%;

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
  margin-top: 20%;
  margin-left: 2%;

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
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 4.5rem;
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 20%;
  }
`;

export const Content = styled.h1`
  font-weight: 900;
  background: #fff;
  background-clip: text;
  text-align: left;
  -webkit-background-clip: text;
  color: transparent;
  padding: 1rem;
  line-height: 2em;
  font-size: 1.3rem;
  padding-left: 50%;
  padding-right: 4%;
  padding-top: 10%;
  margin-top: -40%;

  @media only screen and (max-width: 360px) {
    text-align: left;
    font-size: 0.8em;
    margin-left: -40%;
    margin-top: 0%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    text-align: left;
    font-size: 1em;
    margin-left: -40%;
    margin-top: 0%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    text-align: left;
    font-size: 1em;
    margin-left: -40%;
    margin-top: 0%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    text-align: left;
    font-size: 1.2rem;
    margin-left: -40%;
    margin-top:0%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    margin-top:-40%;
  }
`;

function home2() {
  return (
    <>
      <meta name="description" content="Hack Odisha brings you an enterprising platform where you can showcase
      your unique ideas and expand your boundaries with your creativity and
      proficiency" />
    <Raisebox>
      <Container>
        <Heading>
          HACK <span style={{ color: "#ff0000" }}> ODISHA </span>{" "}
        </Heading>
        <Content>
          Hack Odisha brings you an enterprising platform where you can showcase
          your unique ideas and expand your boundaries with your creativity and
          proficiency. Webwiz, the official web development club of NIT Rourkela
          is proud to host the hackathon on the occasion of the diamond jubilee
          celebration of NIT Rourkela and strives to make it exciting, edifying
          and educational. Hack Odisha is a 36-hour hackathon and whether you
          are having a formidable team or you are a lone-wolf, do grab this
          opportunity to take home some exciting prizes and certificates. Buckle
          up to unite with us and make your talent count.
        </Content>
      </Container>
    </Raisebox>
    </>
  );
}

export default home2;
