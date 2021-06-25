import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import "./style.css";

function Schedule() {
  return (
    <Raisebox>
      <div className="schedule_container">
        <h1 className="schedule_h1">
          HACKATHON <span style={{ color: "#ff0000" }}> SCHEDULE</span>
        </h1>{" "}
      </div>
      <h2 className="schedule_h2">To be revealed soon</h2>
    </Raisebox>
  );
}

export default Schedule;
