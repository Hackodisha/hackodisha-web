import React, {useEffect} from 'react'
import Raisebox from '../raisebox/raisebox';
import styled from 'styled-components';
import TeamData from './TeamData';
import CommunityData from './CommunityPartner';
import OutReachData from './OutreachPartner';
import './team.scss'

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



const TeamHackodisha = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>

            {/* hackodisha team */}
        <Raisebox>
            <h1 id="team-section">Team</h1>
            <TeamGrid>
                {
                    TeamData.map(element => {
                       return  (
                            <div id="member-card"> 
                            <a href={element.linkedIn} target="_blank" rel="noreferrer"> <img id ="member-image" src={element.imgPath} alt=" not found" /> </a>
                            <span id="member-name" >{element.Name}</span>
                            <span id="member-role" >{element.Role}</span>

                            </div>
                        )
                    })
                }
            </TeamGrid>
        
        </Raisebox>

        {/* community partners */}
        <Raisebox>
            <h1 id="team-section">Community Partners</h1>
            <TeamGrid>
                {
                    CommunityData.map(element => {
                       return  (
                            <div id="member-card"> 
                            <a href={element.linkedIn} target="_blank" rel="noreferrer"> <img id ="member-image" src={element.imgPath} alt=" not found" /> </a>
                            <span style = { { border: "none"}} id="member-name" >{element.Name}</span>
            

                            </div>
                        )
                    })
                }
            </TeamGrid>
        
        </Raisebox>

        {/* Outreach partners */}

        <Raisebox>
            <h1 id="team-section">Outreach Partners</h1>
            <TeamGrid>
                {
                    OutReachData.map(element => {
                       return  (
                            <div id="member-card"> 
                            <a href={element.linkedIn} target="_blank" rel="noreferrer"> <img id ="member-image" src={element.imgPath} alt=" not found" /> </a>
                            <span style = { 
                                {
                                    border:"none"
                                }
                            }
                            id="member-name" >{element.Name}</span>
                            </div>
                        )
                    })
                }
            </TeamGrid>
        
        </Raisebox>
        </div>

    )
}

export default TeamHackodisha;