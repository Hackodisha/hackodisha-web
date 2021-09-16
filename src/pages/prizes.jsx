import React from 'react';
import Raisebox from '../components/raisebox/raisebox.js';
import PrizesCard from '../components/prizes-card/PrizesCard';
import { Container, Row, Col } from 'react-grid-system';
import './style.css'


function Prizes() {
  return (
    <div>
      <Raisebox>
        <div className="prizes_container">
          <h1 className="prizes_h1">
            EXCITING <span style={{ color: '#ff0000' }}> PRIZES</span>
          </h1>{' '}
        </div>
        <Container>
          <Row>
            <Col>
              <PrizesCard style={{ marginLeft: '10px' }} />
            </Col>
          </Row>
        </Container>
      </Raisebox>
    </div>
  );
}

export default Prizes;
