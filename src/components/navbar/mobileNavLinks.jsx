import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.nav`
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

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;

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

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    "home",
    "about",
    "tracks",
    "sponsors",
    "schedule",
    "events",
    "prizes",
    "faq",
  ];
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {links.map(link => {
            return (
              <LinkItem>
                <Link href={"#" + link} onClick={() => setOpen(false)}>
                  {link}
                </Link>
              </LinkItem>
            );
          })}
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
