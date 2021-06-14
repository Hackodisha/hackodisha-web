import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #f00;
    transform: scaleY(0);
    transition: transform 0.3s;
    transform-origin: 50% 100%;
  }

  &:hover::after {
    transform: scaleY(1);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
  text-transform: capitalize;
`;

export function NavLinks() {
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
      <LinksWrapper>
        {links.map(link => {
          return (
            <LinkItem>
              <Link href={"#" + link}>{link}</Link>
            </LinkItem>
          );
        })}
      </LinksWrapper>
    </NavLinksContainer>
  );
}
