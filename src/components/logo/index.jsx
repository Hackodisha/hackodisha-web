import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  color: #fff;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <a href="/" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <LogoText>
          H<span style={{ color: "#ff0000" }}>O</span>.
        </LogoText>
      </a>
    </LogoWrapper>
  );
}
