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
      <LogoText>
        H<span style={{ color: "#ff0000" }}>O</span>.
      </LogoText>
    </LogoWrapper>
  );
}
