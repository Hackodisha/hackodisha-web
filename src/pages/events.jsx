import React from "react";
import styled from "styled-components";
import './style.css';
import Raisebox from "../components/raisebox/raisebox";

function Events() {
  return (
     <Raisebox style={{ minHeight:"70vh",display:"block" }}>
       <div className="events_container">
         <h1 className="events_h1">
           HACK <span style={{ color: "#ff0000" }}> EVENTS </span>
        </h1>
      </div>
      <h2 className="events_h2">To be revealed soon</h2>
     </Raisebox>
  );
}

export default Events;
