import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Button = styled.button`
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


class Accessibility extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="Accessibility">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://hackodisha.typeform.com/to/N19eeAoC"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100, zIndex:-10}}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <AccessibilityContainer>
    
        <Button className="btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Join us!
        </Button>
        </AccessibilityContainer>
      </div>
    );
  }
}

export default Accessibility;
