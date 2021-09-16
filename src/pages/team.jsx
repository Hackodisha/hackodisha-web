import React from 'react'
import Raisebox from '../components/raisebox/raisebox';
import styled from 'styled-components';
import TeamData from '../components/Team/TeamData';
import '../components/Team/team.scss'
import { Link } from 'react-router-dom';

const TeamGrid = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    justify-items: center;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    margin-bottom: 100px;
    
    
    Background-color: transparent; 

    @media screen and (max-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`;


const TeamSection = () => {
    return (
        <Raisebox>
            <h1 id="team-section">Team</h1>
            <TeamGrid>
                {
                    TeamData.map(element => {
                    if(element.id<=11) return  (

                            <div id="member-card"> 
                            <a href={element.linkedIn} target="_blank" rel="noreferrer"> <img id ="member-image" src={element.imgPath} alt=" not found" /> </a>
                            <span id="member-name" >{element.Name}</span>
                            <span id="member-role" >{element.Role}</span>

                            </div>
                        )
                    })
                }
            </TeamGrid>
            <Link to="/team" id="team-button">know more </Link>
        </Raisebox>

    )
}

const Team = () => {
    return (
        <TeamSection />
    )
}

export default Team;