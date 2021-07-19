import React from "react";
import "../pages/style.css";
function ScheduleCard(props) {
  return (
    <div>
      <div className="single-event">
        <div className="date-time">
          <span className="time">{props.time}</span>
          <span className="date">{props.date}</span>
        </div>
        <div className="description Hackathon">
          <div className="speaker">
            {" "}
            <div className="details">
              <span className="title">{props.title}</span>
              <span className="name"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
