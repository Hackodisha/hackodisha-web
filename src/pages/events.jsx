import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";

const EventsContainer = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Eventsh1 = styled.h1`
    font-weight: 900;
    padding-top: 5%;
    color: #fff;
    font-size: 6rem;
    line-height: 0.8em;
    letter-spacing: -0.07em; 

    @media screen and (max-width: 576px){
      font-size: 4rem;
   }
  `;

const Eventsh2 = styled.h2`
    text-align: center;
    color: #fff;
    font-size: 2.5rem;

    @media screen and (max-width: 576px){
      font-size: 2rem;
   }
  `;

function Events() {
  {/*const items = [
       {
          title: "May 1940",
          cardTitle: "Demo 1",
          cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
          cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

       },
       {
         title: "May 1977",
         cardTitle: "Demo 2",
         cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
         cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
       },
       {
          title: "May 1994",
          cardTitle: "Demo 3",
          cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
          cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        },
        {
           title: "May 1996",
           cardTitle: "Demo 4",
           cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
           cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
           media: {
               type: "IMAGE",
               source: {
                 url: "http://someurl/image.jpg"
               }
            }
         },
         {
           title: "May 2000",
           cardTitle: "Demo 5",
           cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
           cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
         },
     ];*/}

  return (
    <Raisebox style={{ minHeight: "70vh", display: "block" }}>
      <EventsContainer>
        <Eventsh1>
          HACK <span style={{ color: "#ff0000" }}> EVENTS </span>
        </Eventsh1>{" "}
      </EventsContainer>
      <Eventsh2>To be revealed soon</Eventsh2>
      {/*<div className="events_cards">
        <Chrono
          items={items}
          mode= "HORIZONTAL"
          theme={{
              primary: '#253E66',
              secondary: '#EF6555'
          }}
          itemWidth = "230"
          cardWidth = "600"
          cardHeight = "250"
          allowDynamicUpdate ="true"
          disableNavOnKey = "true"
          useReadMore = "false"
          cardPositionHorizontal = "bottom"
        />
      </div>*/}
    </Raisebox>
  );
}

export default Events;
