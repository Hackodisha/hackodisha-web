import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import Faq from "react-faq-component";
import { Container, Row, Col } from "react-grid-system";

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

function home2() {
  return (
    <>
      <meta
        name="description"
        content="Do I need to pay any money to register for the Hackathon?"
      />
      <Raisebox style={{ minHeight: "70vh", display: "block" }}>
        <h1 className="faq_heading">
          Have any <span style={{ color: "#ff0000" }}> questions?</span>
        </h1>
        <Container>
          <Row className="faq_content">
            <Col sm={12} md={12} lg={6} xl={6}>
              <Faq data={data1} styles={styles} />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <Faq data={data2} styles={styles} />
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </>
  );
}

export default home2;
