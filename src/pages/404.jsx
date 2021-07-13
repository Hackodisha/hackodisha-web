import React from "react";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  minHeight: 85vh;
  alignItems: center;
  justifyContent: center;
`;

const NotFoundh1 = styled.h1`
  fontSize: 25vw;
  color: #fff;
  margin: 0;
`;

const NotFoundh3 = styled.h1`
  fontSize: 8vw;
  color: #fff;
  marginTop: 10%;
`;

const NotFound = () => (
  <NotFoundDiv>
    <NotFoundh1>404</NotFoundh1>
    <NotFoundh3>
      Page not found!
    </NotFoundh3>
  </NotFoundDiv>
);

export function goHome() {
  window.location.href = "/";
}

export default NotFound;
