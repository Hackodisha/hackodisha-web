import React from "react";
import "./Details.css";

const Details = (props) => {
  return(
    <div className="popup_box">
         <div className="track_details">
          <span className="close-icon" onClick={props.handleClose}>x</span>
           <p className="track_info"><b>Overview:</b> {props.overview}</p>
         </div>
    </div>
  )
}

export default Details;
