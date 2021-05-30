import React from "react";
import styled from "styled-components";
import Faq from "react-faq-component";

const data1 = {
  rows: [
    {
      title: "Do I need to pay any money to register for the Hackathon?",
      content: `No the hackathon is completely free for everyone.`,
    },
    {
      title: "What is team size?",
      content: `The team can be of size 1-4 members`,
    },
    {
      title:
        "Does one have to be online and available for the entire duration of the Hackathon?",
      content: `No. You only have to be online during some specific time which will be informed beforehand on discord`,
    },
    {
      title: "I just graduated, can I still come to an event?",
      content: `Yes. All school students and college students including the students graduating this year are invited.`,
    },
  ],
};

const data2 = {
  rows: [
    {
      title: "Are we allowed to build on past projects/submit old projects?",
      content: `Yes. You can bring your old projects, but you will be judged on the features you add during the hackathon`,
    },
    {
      title: "Can I start working on my hack before event?",
      content: `Yes you can. But again the work done during the hackathon is only counted.`,
    },
    {
      title: "Can I apply for multiple tracks?",
      content: `You can submit only one project but it can include as many tracks as you want.`,
    },
    {
      title: "Error 404! Question not found?",
      content: `No worries. Drop a message using our messenger bot`,
    },
  ],
};

const styles = {
  bgColor: "#18191a",
  titleTextColor: "black",
  rowTitleColor: "red",
  rowContentColor: "white",
  arrowColor: "white",
  height: "60px",
};

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
    margin-top: 5%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 10%;
  }
`;

export const Div1 = styled.div``;

export const Div2 = styled.div`
  margin-top: -10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 5%;
  text-align: left;
  @media only screen and (max-width: 786px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: -5%;
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
  line-height: 1.0em;
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
    font-size: 3.2rem;
    text-align: center;
    margin: 0 auto;
    margin-left: -2%;
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
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 5rem;
    margin-top: 10%;
  }
`;

function home2() {
  return (
    <Raisebox>
      <Div1>
        <Heading>
          Have any <span style={{ color: "#ff0000" }}> questions?</span>
        </Heading>
      </Div1>
      <Div2>
        <Faq data={data1} styles={styles} />
        <Faq data={data2} styles={styles} />
      </Div2>
    </Raisebox>
  );
}

export default home2;
