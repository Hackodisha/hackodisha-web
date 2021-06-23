import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import { InlineWidget } from "react-calendly";

import './style.css';

function Calendly() {
  return (
    <Raisebox>
      <div className="calendly">
        <h1 className="calendly_h1">
          Schedule<span style={{ color: "#ff0000" }}> Meet</span>
       </h1> 
       <h2 className="calendly_h2">Schedule a 30 minutes call with me via Google meet</h2>
       <div className="calendly_h3">
      <InlineWidget url="https://calendly.com/hackodisha" />
    </div></div>
    
    </Raisebox>
  );
}

export default Calendly; 







