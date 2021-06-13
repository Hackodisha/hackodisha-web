import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import './style.css';

function Prizes() {
  return (
    <Raisebox>
      <div className="prizes_container">
        <h1 className="prizes_h1">
          EXCITING <span style={{ color: "#ff0000" }}> PRIZES</span>
       </h1> </div>
       <h2 className="prizes_h2">To be revealed soon</h2>
    </Raisebox>
  );
}

export default Prizes;
