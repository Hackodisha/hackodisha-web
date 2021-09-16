import React from 'react';
import Raisebox from '../components/raisebox/raisebox';
import Faq from 'react-faq-component';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const data1 = {
  rows: [
    {
      title: 'How much do I pay to register for Hackodisha?',
      content: `No the hackathon is completely free for everyone.`,
    },
    {
      title: 'What is team size?',
      content: `The team can be of size 1-4 members`,
    },
    {
      title: 'I am a beginner. Am I eligible to participate?',
      content: `Yes ofc,  if you are a beginner its the best way to start your hacakthon journey and we would be very much pleased to have you. We would love to have your participation.`,
    },
    {
      title: 'I just graduated, can I still come to an event?',
      content: `Yes. All school students and college students including the students graduating this year are invited. Even working professionals and people who don't have any formal education are welcomed! `,
    },
  ],
};

const data2 = {
  rows: [
    {
      title: 'Are we allowed to build on past projects/submit old projects?',
      content: `Yes. You can bring your old projects, but you will be judged on the features you add during the hackathon`,
    },
    {
      title: 'Can I start working on my hack before event?',
      content: `Yes you can. But again the work done during the hackathon is only counted.`,
    },
    {
      title: 'Can I apply for multiple tracks?',
      content: `You can submit only one project but it can include as many tracks as you want.`,
    },
    {
      title: 'Error 404! Question not found?',
      content: `No worries. Drop a message using our messenger bot`,
    },
  ],
};

const FaqHeading = styled.div`
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

const styles = {
  bgColor: '#18191a',
  titleTextColor: 'black',
  rowTitleColor: 'red',
  rowContentColor: 'white',
  arrowColor: 'white',
  height: '60px',
};

function home2() {
  return (
    <div>
      <meta
        name="description"
        content="Do I need to pay any money to register for the Hackathon?"
      />
      <Raisebox
        style={{ minHeight: '70vh', display: 'block', textAlign: 'left' }}
      >
        <FaqHeading style={{ textAlign: 'center' }}>
          Have any <span style={{ color: '#ff0000' }}> questions?</span>
        </FaqHeading>
        <Container>
          <Row style={{ paddingTop: '3%', paddingBottom: '4%' }}>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Faq data={data1} styles={styles} />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Faq data={data2} styles={styles} />
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default home2;
