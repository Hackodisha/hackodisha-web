import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #ff0000;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #ff0000;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <Link to={{ pathname: "" }} target="_blank">
        <LoginButton>Register</LoginButton>
      </Link>
    </AccessibilityContainer>
  );
}
