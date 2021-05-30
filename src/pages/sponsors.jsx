import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: -10%;

  @media only screen and (max-width: 320px) {
    margin-left: -15%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    margin-left: -10%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 5%;
  }
`;

export const Raisebox2 = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 10%;

  @media only screen and (max-width: 320px) {
    margin-left: -15%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    margin-left: -10%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 15%;
  }
`;

export const Raisebox3 = styled.div`
  min-height: 70vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 10%;

  @media only screen and (max-width: 320px) {
    margin-left: -15%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    margin-left: -10%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-left: -5%;
    margin-top: 20%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 15%;
  }
`;

export const Heading = styled.h1`
  font-weight: 900;
  letter-spacing: -0.07em;
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 3rem;
  line-height: 0.8em;
  font-size: 5rem;
  margin-top: 10%;
  margin-left: 1%;

  @media only screen and (max-width: 340px) {
    font-size: 2.8rem;
    margin: 0 auto;
    margin-left: -5%;
  }

  @media only screen and (min-width: 341px) and (max-width: 360px) {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
    margin-left: -3%;
  }
  @media only screen and (min-width: 361px) and (max-width: 401px) {
    display: block;
    text-align: center;
    margin: 0 auto  ;
    margin-top: -5%;
    font-size: 3.3rem;
    margin-left: -5%;
  }
  @media only screen and (min-width: 401px) and (max-width: 451px) {
    display: block;
    text-align: center;
    margin: 0 auto  ;
    margin-top: -5%;
    font-size: 3.5rem;
    margin-left: -2.5%;
  }
  @media only screen and (min-width: 451px) and (max-width: 539px) {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto ;
    margin-left:-1.5%;
  }
  @media only screen and (min-width: 540px) and (max-width: 767px) {
    font-size: 5rem;
    text-align: center;
    margin: 0 auto ;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 5rem;
    margin-top: 10%;
  }
`;

export const Heading2 = styled.h2`
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.07em;
  background: #fff;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.1em;
  font-size: 3rem;
  margin-top:0;

  @media only screen and (max-width: 340px) {
    font-size: 1.5rem;
    margin: 0 auto;
    margin-left: -5%;
  }

  @media only screen and (min-width: 341px) and (max-width: 360px) {
    font-size: 1.6rem;
    text-align: center;
    margin: 0 auto;
    margin-left: -3%;
  }
  @media only screen and (min-width: 361px) and (max-width: 401px) {
    display: block;
    text-align: center;
    margin: 0 auto  ;
    margin-top: -5%;
    font-size: 1.7rem;
    margin-left: -5%;
  }
  @media only screen and (min-width: 401px) and (max-width: 451px) {
    display: block;
    text-align: center;
    margin: 0 auto  ;
    margin-top: -5%;
    font-size: 1.8rem;
    margin-left: -2.5%;
  }
  @media only screen and (min-width: 451px) and (max-width: 539px) {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto ;
    margin-left:-1.5%;
  }
  @media only screen and (min-width: 540px) and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto ;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.1rem;
    text-align: center;
    margin: 0 auto;
    margin-top: -5%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 2.6rem;
  }
`;

export const LogosBronze = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  padding-bottom: 10%;

  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 10%;
  }
`;

export const LogosSilver = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  padding-bottom: 5%;
  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1235px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 4rem;
    margin-top: 10%;
  }
`;

export const LogosPartner = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-right: 5%;
  margin-top: -5%;
  padding-bottom: 8%;


  @media only screen and (max-width: 360px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-auto-flow: row;
    margin-top: 5%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1316px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${'' /* font-size: 4rem;
    margin-top: 10%; */}
  }
`;

export const LogosPlatinum = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  padding-bottom: 5%;
  margin-top: -5%;

  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 10%;
  }
`;

export const LogosGold = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  padding-bottom: 10%;
  @media only screen and (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-top: 10%;
  }
`;

export const Logo = styled.img`
  max-width: 290px;
  max-height: 150px;
  margin: 0 auto;
  padding: 20px;

  @media only screen and (max-width: 360px) {
    max-width: 190px;
    ${'' /* max-height: 150px; */}
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    max-width: 190px;
    ${'' /* max-height: 150px; */}
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 190px;
    ${'' /* max-height: 150px; */}
  }

  @media only screen and (min-width: 769px) and (max-width: 900px) {
    max-width: 220px;
    ${'' /* max-height: 165px; */}
  }

  @media only screen and (min-width: 900px) and (max-width: 1024px) {
    max-width: 250px;
    ${'' /* max-height: 170px; */}
    ${'' /* margin-top: 10%; */}
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 250px;
    ${'' /* max-height: 140px; */}
  }

  @media only screen and (min-width: 1201px) and (max-width: 1222px) {
    max-width: 300px;
    ${'' /* max-height: 150px; */}
  }s

  @media only screen and (min-width: 1222px) and (max-width: 1350px) {
    max-width: 300px;
    ${'' /* max-height: 200px; */}
  }


`;

export const LogoBig = styled.img`
  max-width: 450px;
  ${'' /* max-height: 350px; */}
  margin: 0 auto;
  padding: 20px;

  @media only screen and (max-width: 360px) {
    max-width: 250px;
    ${'' /* max-height: 180px; */}
    margin-top: 3%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    max-width: 260px;
    ${'' /* max-height: 180px; */}
    margin-top: 4%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 320px;
    ${'' /* max-height: 230px; */}
    margin-top: 0%;
  }

  @media only screen and (min-width: 769px) and (max-width: 900px) {
    max-width: 350px;
    ${'' /* max-height: 220px; */}
  }

  @media only screen and (min-width: 900px) and (max-width: 1024px) {
    max-width: 360px;
    ${'' /* max-height: 220px; */}
    ${'' /* margin-top: 10%; */}
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 380px;
    ${'' /* max-height: 250px; */}
  }

  @media only screen and (min-width: 1201px) and (max-width: 1222px) {
    max-width: 380px;
    ${'' /* max-height: 250px; */}
  }

  @media only screen and (min-width: 1223px) and (max-width: 1350px) {
    max-width: 390px;
    ${'' /* max-height: 250px; */}
  }


`;

export const LogoMedium = styled.img`
  max-width: 420px;
  max-height: 300px;
  margin: 0 auto;
  padding: 20px;
  @media only screen and (max-width: 360px) {
    max-width: 280px;
     ${'' /* max-height: 180px; */}
    margin-top: 3%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    max-width: 280px;
    ${'' /* max-height: 180px; */}
    margin-top: 4%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 320px;
    ${'' /* max-height: 230px; */}
    margin-top: 5%;
  }

  @media only screen and (min-width: 769px) and (max-width: 900px) {
    max-width: 330px;
    ${'' /* max-height: 220px; */}
  }

  @media only screen and (min-width: 900px) and (max-width: 1024px) {
    max-width: 360px;
    ${'' /* max-height: 220px; */}
    margin-top: 10%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 360px;
    ${'' /* max-height: 250px; */}
  }

  @media only screen and (min-width: 1201px) and (max-width: 1222px) {
    max-width: 380px;
    ${'' /* max-height: 250px; */}
  }

  @media only screen and (min-width: 1223px) and (max-width: 1450px) {
    max-width: 400px;
    ${'' /* max-height: 230px; */}
  }


`;

function home2() {
  return (
    <div>
            <Raisebox>
        <Heading>
          Platinum
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <LogosPlatinum>
          <a href="https://www.nitrkl.ac.in/" target="_blank">
            <LogoBig
              src={require("../assets/sponsors/diamondnit.png").default}
              alt="NITR Diamond Jubilee"
              style={{ width: "400px" }}
            />
          </a>
        </LogosPlatinum>
      </Raisebox>
      <Raisebox2>
        <Heading>
          Gold
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <LogosGold>
        {/*  <a href="https://www.postman.com/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/postman.png").default}
              alt="Postman"
              style={{ width: "420px" }}
            />
          </a>
          <a href="https://studentambassadors.microsoft.com/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/MLSA.png").default}
              alt="MLSA"
              style={{ width: "210px" }}
            />
          </a>*/}
          <a href="https://devfolio.co/home/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/devfolio1.png").default}
              alt="Devfolio"
              style={{ width: "420px"}}
            />
          </a>
        </LogosGold>
      </Raisebox2>

      <Raisebox2>
        <Heading>
          Silver
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <LogosSilver>
          <a href="https://www.portis.io/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/portisnew.png").default}
              alt="Portis"
              style={{ width: "310px"}}
            />
          </a>
          <a href="https://celo.org/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/celo1.png").default}
              alt="Celo"
              style={{ width: "300px"}}
            />
          </a>
          <a href="https://tezos.com/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/tezos.png").default}
              alt="Tezos"
              style={{ width: "300px", height: "120px" }}
            />
          </a>
          <a href="https://polygon.technology/" target="_blank">
            <LogoMedium
              src={require("../assets/sponsors/poly1.png").default}
              alt="Polygon"
            />
          </a>
        </LogosSilver>
      </Raisebox2>

      <Raisebox2>
        <Heading>
          Bronze
          <span style={{ color: "#ff0000" }}> Sponsors </span>
        </Heading>
        <LogosBronze>
          <a href="https://www.echoar.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/echoar.png").default}
              alt="Echo AR"
              // style={{ width: "350px", height: "100px" }}
            />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/jetbrains.png").default}
              alt="Jet Brains"
              style={{ width: "150px" }}

            />
          </a>

          <a href="https://balsamiq.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/balsamiq.png").default}
              alt="Balsamiq"
            />
          </a>

          <a href="https://www.taskade.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/taskade.png").default}
              alt="Taskade"
              style={{ width: "150px" }}
            />
          </a>
          <a href="https://codingblocks.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/codingblocks.png").default}
              alt="Coding Blocks"
            />
          </a>

          <a href="https://1password.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/1password.png").default}
              alt="1 password"
              style={{ width: "150px" }}
            />
          </a>

          <a href="https://draftbit.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/draftbit.png").default}
              alt="draftbit"
              // style={{ width: "350px", height: "100px" }}
            />
          </a>
          <a href="https://testmail.app/" target="_blank">
            <Logo
              src={require("../assets/sponsors/testmail.svg").default}
              alt="testmail app"
              // style={{ width: "320px", height: "120px" }}
            />
          </a>
          <a href="https://nostarch.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/image.png").default}
              alt="nostarch"

            />
          </a>

          <a href="https://www.roostoo.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/roostoo.png").default}
              alt="Roostoo"
            />
          </a>

          <a href="https://hoverrobotix.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/hoverRobotix.png").default}
              alt="Hover Robotix"
            />
          </a>

          <a href="https://www.hackathonsinternational.com/" target="_blank">
            <Logo
              src={
                require("../assets/sponsors/HackathonsInternational1.png")
                  .default
              }
              alt="Hackathons International"
            />
          </a>

          <a href="https://interviewbuddy.in/" target="_blank">
            <Logo
              src={require("../assets/sponsors/interviewBuddy.png").default}
              alt="Interview Buddy"
            />
          </a>

          <a href="https://aichamp.in/" target="_blank">
            <Logo
              src={require("../assets/sponsors/download.png").default}
              alt="Aichamp"
            />
          </a>

          <a href="http://karoverify.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/karoverify2.png").default}
              alt="Karo Verify"
            />
          </a>
          <a href="https://rosenfeldmedia.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/Rosenfeld.png").default}
              alt="Rosenfeld"
              // style={{ width: "320px", height: "140px" }}
            />
          </a>
          <a href="https://www.stickermule.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/sticker-mule.svg").default}
              alt="StickerMule"
            />
          </a>
          <a href="https://replit.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/replit.svg").default}
              alt="replit"
            />
          </a>
          <a href="https://www.framer.com/" target="_blank">
            <Logo
              src={require("../assets/sponsors/framer.png").default}
              alt="Framer"
            />
          </a>
          <a href="https://gen.xyz/" target="_blank">
            <Logo
              src={require("../assets/sponsors/xyzdomain.png").default}
              alt="XYZ .Domain"

            />
          </a>

        </LogosBronze>
      </Raisebox2>

      <Raisebox2>
        <Heading>
        </Heading>
        <LogosPartner>
        <div>

        <a href="https://www.scriptindia.org/" target="_blank">
            <LogoBig
              src={require("../assets/sponsors/script.png").default}
              alt="Script Foundation"
              style={{ width: "380px" }}
              />
                </a>
        <Heading2>Education
        <span style={{ color: "#ff0000" }}> Partner </span>
        </Heading2>

        </div>
        <div>

        <a href="https://webwiz-portfolio.web.app/" target="_blank">
            <LogoBig
              src={require("../assets/sponsors/webwizlogo.png").default}
              alt="Webwiz"
              style={{ width: "300px" }}
            />
          </a>

          <Heading2>
          Community
        <span style={{ color: "#ff0000" }}> Partner </span>
        </Heading2>

        </div>
        </LogosPartner>
      </Raisebox2>
    </div>
  );
}

export default home2;
