import React from "react";
import styled from "styled-components";
import Health from "../../assets/icons/health.png";
import Disaster from "../../assets/icons/disaster.png";
import Education from "../../assets/icons/education.png";
import Environment from "../../assets/icons/environment.png";
import Open from "../../assets/icons/open.png";
import Security from "../../assets/icons/security.png";

export const Icon = styled.img`
  width: 2.5em;
`;

export const MyCard = styled.div`
  font-size: 18px;
  background: #242526;
  height: 8rem;
  width: 17rem;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  margin: 1em;
  &:hover {
    box-shadow: 0 8px 15px 0 rgb(0 0 0 / 20%);
  }
  padding: 1em;
  border-radius: 10px;

  @media screen and (max-width: 320px){
    width: 15rem;
  }

  @media screen and (min-width: 480px) and (max-width: 620px) {
    height: 8.5rem;
    width: 13rem;
    margin-left: 0px;
  }
  @media screen and (min-width: 621px) and (max-width: 768px) {
    height: 8.5rem;
    width: 15rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    height: 8.5rem;
    width: 18rem;
    margin-left: 35px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    height: 8.5rem;
    width: 15rem;
    margin-left: -5px;
  }
`;

export const CardIconBg = styled.div`
  background: #transparent;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
`;

export const CardDesc = styled.h4`
  line-height: 1;
  font-weight: 600;
  color: #535353;
  width: 100%;
  text-align: left;
  margin-top: 1em;
  font-size: 20px;
  color: #fff;
`;

const homeCardData = [
  {
    desc: "Healthcare",
    icon: Health,
  },
  {
    desc: "Education",
    icon: Education,
  },
  {
    desc: "Environment",
    icon: Environment,
  },
  {
    desc: "Women Security",
    icon: Security,
  },
  {
    desc: "Disaster Management",
    icon: Disaster,
  },
  {
    desc: "Open Innovation",
    icon: Open,
  },
];

function createCard({ desc, icon }) {
  return (
    <MyCard>
      <CardIconBg>
        <Icon src={icon} />
      </CardIconBg>
      <CardDesc>{desc}</CardDesc>
    </MyCard>
  );
}

export default function HomeCard(props) {
  return <>{homeCardData.map(createCard)}</>;
}
