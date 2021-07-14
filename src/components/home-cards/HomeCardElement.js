import { React, useState } from "react";
import "./HomeCard.css";
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
  overlay:{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        backdropFilter: 'blur(5px)',
        opacity: 1,
      }
};

function TracksCards(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    <div className="TracksCards">
       <div className="CardIcon">
         <img
            src={props.imgsrc}
            alt={props.alt}
           style={props.style}
         />
       </div>
       <div className="Tracksh4">
           {props.trackname}
      </div>
      <div className="btn-container">
              <button onClick={openModal} className="btn-knowmore" >Know More</button>
           </div>
     </div>
     <Modal
       isOpen={modalIsOpen}
       onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >
       <div className="TracksCards" ref={(_subtitle) => (subtitle = _subtitle)}>
       {props.description}
      </div>
      <div className="btn-container">
       <button className='btn-knowmore' onClick={closeModal}>close</button>
      </div>
     </Modal>
   </div>
 );

}

export default TracksCards;
