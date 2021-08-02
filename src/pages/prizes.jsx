import React from 'react';
import Raisebox from '../components/raisebox/raisebox';
import { useState } from 'react';
import { Col, Row } from 'react-grid-system';
import './style.css';
import Popup from 'reactjs-popup';

function Prizes() {
  const [open1, setOpen1] = useState(false);
  const closeModal1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const closeModal2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const closeModal3 = () => setOpen3(false);
  const [open4, setOpen4] = useState(false);
  const closeModal4 = () => setOpen4(false);
  const [open5, setOpen5] = useState(false);
  const closeModal5 = () => setOpen5(false);

  return (
    <Raisebox>
      <div className="prizes_container">
        <h1 className="prizes_h1">
          EXCITING <span style={{ color: '#ff0000' }}> PRIZES</span>
        </h1>{' '}
      </div>
      {/* <h2 className="prizes_h2">To be revealed soon</h2> */}

      <div>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <div
              className="prize_box"
              id="prize_1"
              onClick={() => setOpen1(o => !o)}
            >
              <span className="first_prize">Overall Winner</span>
              <Popup open={open1} closeOnDocumentClick onClose={closeModal1}>
                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal1}>
                    &times;
                  </a>
                  <div className="popupContent">
                    Cash Prize* <br />
                    T-shirt <br />
                    Stickers
                    <br />
                    $1000 digital Ocean credits <br />
                    HoverRobotix gift vochure worth ₹20k <br />
                    Custom XYZ domain for 1 year
                    <br />
                    Interview Buddy discount vochures <br />
                    Taskade lifetime access <br />
                    Coding Block Vouchers
                    <br />
                    Replit 90 days trail
                    <br />
                    Script Foundation Academy 90 days premium access
                    <br />
                    1Password access for 1 year <br />
                    12 months Framer subscription
                    <br />
                    Access to Wolfarm for 30 days
                    <br />
                    Qoom 3 months starter plan
                    <br />
                    Showcase on Qoom's gallery
                    <br />
                    Draftbit 40% off for 1 year
                    <br />
                    Balsamic 90 days extended trail
                    <br />
                    Axure access
                    <br />
                    Rosenfeld Media free book giveaways on their site
                    <br />
                    90% off on AI champ courses
                    <br />
                    ebook(40$) benefits from No Starch Press
                    <br />
                    Free Individual licenses to all Jetbrains desktop tools for
                    limited time
                    <br />
                  </div>
                </div>
              </Popup>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4} xl={4}>
            <div
              className="prize_box"
              id="prize_2"
              onClick={() => setOpen2(o => !o)}
            >
              <span className="second_prize">First Runner's Up</span>
              <Popup open={open2} closeOnDocumentClick onClose={closeModal2}>
                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal2}>
                    &times;
                  </a>
                  <div className="popupContent">
                    Cash Prize* <br />
                    T-shirt <br />
                    Stickers
                    <br />
                    $600 digital Ocean credits <br />
                    HoverRobotix gift vochure worth ₹10k <br />
                    Custom XYZ domain for 1 year
                    <br />
                    Interview Buddy discount vochures <br />
                    Taskade lifetime access <br />
                    Coding Block Vouchers
                    <br />
                    Script Foundation Academy 90 days premium access
                    <br />
                    1Password access for 1 year <br />
                    12 months Framer subscription
                    <br />
                    Replit 90 days trail
                    <br />
                    Access to Wolfarm for 30 days
                    <br />
                    Qoom 3 months starter plan
                    <br />
                    Showcase on Qoom's gallery
                    <br />
                    Draftbit 40% off for 1 year
                    <br />
                    Balsamic 90 days extended trail
                    <br />
                    Axure access
                    <br />
                    Rosenfeld Media free book giveaways on their site
                    <br />
                    70% off on AI champ courses
                    <br />
                    ebook(40$) benefits from No Starch Press
                    <br />
                    Free Individual licenses to all Jetbrains desktop tools for
                    limited time
                    <br />
                  </div>
                </div>
              </Popup>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4} xl={4}>
            <div
              className="prize_box"
              id="prize_3"
              onClick={() => setOpen3(o => !o)}
            >
              <span className="third_prize">Second Runner's Up</span>
              <Popup open={open3} closeOnDocumentClick onClose={closeModal3}>
                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal3}>
                    &times;
                  </a>
                  <div className="popupContent">
                    Cash Prize* <br />
                    T-shirt <br />
                    Stickers
                    <br />
                    $400 digital Ocean credits <br />
                    Custom XYZ domain for 1 year
                    <br />
                    Interview Buddy discount vochures <br />
                    Taskade lifetime access <br />
                    Replit 90 days trail
                    <br />
                    Coding Block Vouchers
                    <br />
                    Script Foundation Academy 90 days premium access
                    <br />
                    1Password access for 1 year <br />
                    Access to Wolfarm for 30 days
                    <br />
                    Qoom 3 months starter plan
                    <br />
                    Showcase on Qoom's gallery
                    <br />
                    Draftbit 40% off for 1 year
                    <br />
                    Balsamic 90 days extended trail
                    <br />
                    Axure access
                    <br />
                    Rosenfeld Media free book giveaways on their site
                    <br />
                    70% off on AI champ courses
                    <br />
                    ebook(40$) benefits from No Starch Press
                    <br />
                    Free Individual licenses to all Jetbrains desktop tools for
                    limited time
                    <br />
                  </div>
                </div>
              </Popup>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <div
              className="prize_box"
              id="prize_1"
              onClick={() => setOpen4(o => !o)}
            >
              <span className="first_prize">Best Girls Team</span>
              <Popup open={open4} closeOnDocumentClick onClose={closeModal4}>
                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal4}>
                    &times;
                  </a>
                  <div className="popupContent">
                    T-shirt <br />
                    Stickers
                    <br />
                    Custom XYZ domain for 1 year
                    <br />
                    Interview Buddy discount vochures <br />
                    Taskade lifetime access <br />
                    Coding Block Vouchers
                    <br />
                    Script Foundation Academy 90 days premium access
                    <br />
                    1Password access for 1 year <br />
                    Replit 90 days trail
                    <br />
                    Access to Wolfarm for 30 days
                    <br />
                    Qoom 3 months starter plan
                    <br />
                    Showcase on Qoom's gallery
                    <br />
                    Draftbit 40% off for 1 year
                    <br />
                    Balsamic 90 days extended trail
                    <br />
                    Axure access
                    <br />
                    Rosenfeld Media free book giveaways on their site
                    <br />
                    70% off on AI champ courses
                    <br />
                    ebook(40$) benefits from No Starch Press
                    <br />
                    Free Individual licenses to all Jetbrains desktop tools for
                    limited time
                    <br />
                  </div>
                </div>
              </Popup>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4} xl={4}>
            <div
              className="prize_box"
              id="prize_2"
              onClick={() => setOpen5(o => !o)}
            >
              <span className="second_prize">Best Beginner Team</span>
              <Popup open={open5} closeOnDocumentClick onClose={closeModal5}>
                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal5}>
                    &times;
                  </a>
                  <div className="popupContent">
                    Stickers
                    <br />
                    Custom XYZ domain for 1 year
                    <br />
                    Interview Buddy discount vochures <br />
                    Taskade lifetime access <br />
                    Coding Block Vouchers
                    <br />
                    Script Foundation Academy 90 days premium access
                    <br />
                    1Password access for 1 year <br />
                    Access to Wolfarm for 30 days
                    <br />
                    Qoom 3 months starter plan
                    <br />
                    Showcase on Qoom's gallery
                    <br />
                    Draftbit 40% off for 1 year
                    <br />
                    Balsamic 90 days extended trail
                    <br />
                    Axure access
                    <br />
                    Rosenfeld Media free book giveaways on their site
                    <br />
                    70% off on AI champ courses
                    <br />
                    ebook(40$) benefits from No Starch Press
                    <br />
                    Free Individual licenses to all Jetbrains desktop tools for
                    limited time
                    <br />
                  </div>
                </div>
              </Popup>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4} xl={4}>
            <div className="prize_box" id="prize_3">
              <span className="third_prize">And many more</span>
              {/* <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                <div className="modal">
                  <a className="close" href="/#prizes" onClick={closeModal} >
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
