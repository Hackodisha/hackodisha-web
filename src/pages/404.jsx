import React from 'react';
import styled from 'styled-components';

const NotFoundDiv = styled.div`
  minheight: 85vh;
  alignitems: center;
  justifycontent: center;
`;

const NotFoundh1 = styled.h1`
  fontsize: 25vw;
  color: #fff;
  margin: 0;
`;

const NotFoundh3 = styled.h1`
  fontsize: 8vw;
  color: #fff;
  margintop: 10%;
`;

const NotFound = () => (
  <NotFoundDiv>
    <NotFoundh1>404</NotFoundh1>
    <NotFoundh3>Page not found!</NotFoundh3>
  </NotFoundDiv>
);

export function goHome() {
  window.location.href = '/';
}

export default NotFound;
