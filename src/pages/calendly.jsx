import React from "react";
import Raisebox from "../components/raisebox/raisebox";
import { InlineWidget } from "react-calendly";

import './style.css';

function Calendly() {
  return (
    <Raisebox>
      <div className="calendly">
        <h1 className="calendly_heading">
          Schedule<span style={{ color: "#ff0000" }}> Meet</span>
       </h1>
       <div className="calendly_box">
          <InlineWidget url="https://calendly.com/hackodisha" />
       </div>
      </div>

    </Raisebox>
  );
}

export default Calendly;
