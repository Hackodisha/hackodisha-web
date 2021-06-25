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
    <CenteredAnchor href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        className={props.className}
        src={props.img}
        alt={props.alt}
        style={props.style}
      />
    </CenteredAnchor>
  );
}
