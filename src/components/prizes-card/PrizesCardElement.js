import * as React from 'react'
import { useState } from 'react';
import './PrizesCard.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    opacity: 1,
  },
};

function PrizesCardElement(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#fff';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal} className="prize_box">
        <div  className={props.className}>{props.trackname}</div>
        {/* <div  className="btn-container-prize">
          <button onClick={openModal} className="btn-knowmore">
            Know More
          </button>
        </div> */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="TracksCards_p"
          ref={_subtitle => (subtitle = _subtitle)}
        >
          
          {props.description}
    
        </div>
        <div className="btn-container">
          <button className="btn-knowmore" onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PrizesCardElement;
