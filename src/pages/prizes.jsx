import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import { useState } from "react";
import {Col, Row} from 'react-grid-system';
import "./style.css";
import Popup from "reactjs-popup";





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
              <span className="first_prize">Overall Winner</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                 Coming Soon
                  </div>
                  </div>

              </Popup>
            </div>

          </Col>

           
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_2" onClick={() => setOpen(o => !o)}>
              <span className="second_prize">First Runner's Up</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                  Coming Soon</div>        
                  </div>

              </Popup>
            </div>

          </Col>

            
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_3" onClick={() => setOpen(o => !o)}>
              <span className="third_prize">Second Runner's Up</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">                    
                  Coming Soon</div>        
                  </div>

              </Popup>
            </div>

          </Col>
        </Row>
      </div>


      <div>
        <Row>
          
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_1" onClick={() => setOpen(o => !o)}>
              <span className="first_prize">Best Girls Team</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                  Coming Soon</div>        
                  </div>

              </Popup>
            </div>

          </Col>

           
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_2" onClick={() => setOpen(o => !o)}>
              <span className="second_prize">Best Beginner Team</span>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">
                  Coming Soon</div>        
                  </div>

              </Popup>
            </div>

          </Col>

            
          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_3">
              <span className="third_prize">And many more</span>
              {/* <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#" onClick={closeModal} >
                    &times;</a>
                    <div className="popupContent">                    
                  Coming Soon</div>        
                  </div>

              </Popup> */}
            </div>

          </Col>
        </Row>
      </div>
        
    </Raisebox>
  );
}

export default Prizes;
