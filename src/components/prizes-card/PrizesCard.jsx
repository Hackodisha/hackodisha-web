import React from 'react';
import PrizesCardElement from './PrizesCardElement';
import { Row, Col } from 'react-grid-system';
import './PrizesCard.css';
import prizesData from './PrizesData';

function PrizesCard() {
  return (
    <div style={{ marginTop: '5%' }}>
      <Row>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="first_prize"
            trackname="Overall Winner"
            description={prizesData[0].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="second_prize"
            trackname="First Runner's Up"
            description={prizesData[1].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="third_prize"
            trackname="Second Runner's Up"
            description={prizesData[2].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="first_prize"
            trackname="Best Girls Team"
            description={prizesData[3].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="second_prize"
            trackname="Best Beginner Team"
            description={prizesData[4].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="third_prize"
            trackname="Best use of API"
            description={prizesData[5].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="first_prize"
            trackname="Best use of Tezos"
            description={prizesData[6].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="second_prize"
            trackname="Best use of Celo"
            description={prizesData[7].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="third_prize"
            trackname="Best use of Polygon"
            description={prizesData[8].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="first_prize"
            trackname="Best use of Filecoin"
            description={prizesData[9].description}
          />
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <PrizesCardElement
            className="second_prize"
            trackname="All Participants"
            description={prizesData[10].description}
          />
        </Col>
      </Row>
    </div>
  );
}

export default PrizesCard;
