import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";
import { useState } from "react";
import {Col, Row} from 'react-grid-system';
import "./style.css";
import Popup from "reactjs-popup";

const PrizesContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Prizesh1 = styled.h1`
  font-weight: 900;
  padding-top: 5%;
  color: #fff;
  font-size: 6rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 4rem;
  }
`;

const Prizesh2 = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (max-width: 576px){
    font-size: 2rem;
  }
`;


function Prizes() {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Raisebox>
      <div className="prizes_container">
        <h1 className="prizes_h1">
          EXCITING <span style={{ color: "#ff0000" }}> PRIZES</span>
        </h1>{" "}
      </div>
      { /* <h2 className="prizes_h2">To be revealed soon</h2> */}

      <div>
        <Row>
          
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_1" onClick={() => setOpen(o => !o)}>
              <span className="first_prize">1</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                  mnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                  ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                  doloribus. Odit, aut.</div>        
                  </div>

              </Popup>
            </div>

          </Col>

           
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_2" onClick={() => setOpen(o => !o)}>
              <span className="second_prize">2</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                  mnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                  ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                  doloribus. Odit, aut.</div>        
                  </div>

              </Popup>
            </div>

          </Col>

            
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_3" onClick={() => setOpen(o => !o)}>
              <span className="third_prize">3</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">                    
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                  mnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                  ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                  doloribus. Odit, aut.</div>        
                  </div>

              </Popup>
            </div>

          </Col>
        </Row>
      </div>

    </Raisebox>
  );
}

export default Prizes;
