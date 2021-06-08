import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

import { Link } from "react-scroll";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: black;
  opacity: 0.8;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  padding-top: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  display: flex;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f00;
    transform: scaleY(0);
    transition: transform 0.3s;
    transform-origin: 50% 100%;
  }

  &:hover::after {
    transform: scaleY(1);
  }
`;
const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(!isOpen);
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Links
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Home
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              About Us
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="tracks"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Tracks
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Sponsors
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="schedule"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Schedule
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Events
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="prizes"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              Prizes
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMobileMenu}
            >
              FAQ
            </Links>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
