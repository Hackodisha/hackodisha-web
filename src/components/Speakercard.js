import React from "react";
import styled from "styled-components";

const CenteredAnchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export default function MediaCard(props) {
  return (
    <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridGap:'0'}}>
    <CenteredAnchor>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          href={props.link}
          className={props.className}
          src={props.img}
          alt={props.alt}
          style={props.style}
        />
      </a>
      </CenteredAnchor>

      <CenteredAnchor>
        <h4 style={{display:'contents', color:'#fff',}}>{props.name}</h4>
        <div style={{color:'#fff'}}>{props.description}</div>
        <img
          style={{height: "15px" ,marginTop:'10px',filter: 'invert(100%)'}}
          src={props.company_logo}
          alt={props.alt_company}
        />
      </CenteredAnchor>
    </div>
        
  );
}
