import React from "react";
import styled from "styled-components";

export const Raisebox = styled.div`
  display: flex;
  min-height: 80vh;
  width: 90vw;
  margin: auto;
  background: #18191a;
  box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media only screen and (max-width: 320px){
    height: 110vh;
    margin-left: -15%;
  }
  @media only screen and (min-width: 321px) and (max-width: 360px) {
    margin-left: -11%;
  }
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    height: 95vh;
    margin-left: -10%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 110vh;
    margin-left: -5%;
  }
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.h1`
  font-weight: 400;
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.5em;
  font-size: 1.7rem;
  margin-top:-43%;
  padding-left:50%;
  padding-right:5%;

  @media only screen and (max-width: 360px){
    font-size: 1.2rem;
    padding-left: 22%;
    margin-left: -20%;
    padding-right: 45%;
    margin-top: -10%;
  }

  @media only screen and (min-width: 361px) and (max-width: 440px) {
    padding-left: 33%;
    margin-left: -22%;
    display: block;
    padding-right: 49%;
    font-size: 1.2rem;
    margin-top: -10%;
  }
  @media only screen and (min-width: 441px) and (max-width: 540px) {
    padding-left: 30%;
    margin-left: -20%;
    display: block;
    padding-right: 30%;
    font-size: 1.3rem;
    margin-top: -10%;
  }
  @media only screen and (min-width: 541px) and (max-width: 768px) {
    font-size:1.4rem;
    margin-top:-25%;
    padding-left:29%;
    padding-right:16%;
  }
  @media only screen and (min-width: 769px) and (max-width: 936px) {
    padding-left:10%;
    margin-left:20%;
    margin-top: -27%; 
    padding-right:10%;
    font-size:1.6rem;
  }
  @media only screen and (min-width: 937px) and (max-width: 1024px) {
    padding-left:5%;
    margin-left:30%;
    padding-right:25%;
    font-size:2rem;
    margin-top:-35%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    padding-left:30%;
    margin-left:20%;
    padding-right:5%;
  }
`;

export const Image = styled.img`
  height: 105vh;
  margin-top: -8%;
  margin-left: -14%;

  @media only screen and (max-width: 360px) {
    height: 70vh;
    margin-left: -22%;
    margin-top:-16%;
  }

  @media only screen and (min-width: 361px) and (max-width: 480px) {
    height: 70vh;
    margin-left: -22%;
    margin-top:-21%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 70vh;
    margin-left: -9%;
    margin-top: -5%;

  }
  @media only screen and (min-width: 769px) and (max-width: 936px) {
    height: 85vh;
    margin-left:-10%;
    margin-top:-5%; 
  }
  @media only screen and (min-width: 937px) and (max-width: 1024px) {
    height: 75vh;
    margin-top: -15%;
    margin-left: -20%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    height: 85vh;
  }
`;

export const Date = styled.img`
  height: 28vh;
  margin-left: 48%;
  margin-top: -28%;

  @media only screen and (max-width: 360px){
    height: 13vh;
    margin-top: 10px;
    margin-left: 7%;
    margin-bottom:5%;
  }
  
  @media only screen and (min-width: 361px) and (max-width: 480px) {
    height: 14vh;
    margin-top: 0;
    margin-left: 3.8%;
  }
  @media only screen and (min-width: 441px) and (max-width: 540px) {
    height:17vh;
    margin-top: 0;
    margin-left: 7%;
  }
  @media only screen and (min-width: 541px) and (max-width: 768px) {
    height:17vh;
    margin:0 auto;
    margin-left: 45%;
  }
  @media only screen and (min-width: 769px) and (max-width: 936px) {
    height:20vh;
    margin-left: 45%;
    margin-top: -5%;
  }
  @media only screen and (min-width: 937px) and (max-width: 1024px) {
    height:15vh;
    margin-left: 26%;
    margin-top: -15%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    height:25vh;
    margin-left: 35%;
    margin-top: -25%;
  }
`;

 export const Buttons = styled.div`
   margin-left: 45%;
   margin-top: -7%;

   @media screen and (max-width: 360px){
          margin-left: -25%;
   }

   @media screen and (max-width: 960px) {
     width: 450px;
     margin-left: -20%;
     margin-top: 9%;
   }
 `;

 export const Button1 = styled.button`
   padding: 9px;
   width: 230px;
   border-radius: 10px;
   border: none;
   color: white;
   font-size: 2.6em;
   font-weight: 400;
   margin-left: 20px;
   background-color: #0360DE;
   margin-top:-5%;
   cursor: pointer;
   
    @media only screen and (max-width: 360px){
     display: inline-flex;
     width: 120px;
     padding: 15px;
     height: 30px;
     margin-right: -1%;
     padding-bottom: 35px;
     font-size: 1.5em;
     margin-left: 1%;
   }
   
   @media only screen and (min-width: 361px) and (max-width: 440px) {
     display: inline-flex;
     width: 120px;
     padding: 15px;
     height: 30px;
     margin-right: -1%;
     padding-bottom: 35px;
     font-size: 1.5em;
     margin-left: 20%;
   }
   
   @media only screen and (min-width: 441px) and (max-width: 540px) {
     display: auto;
   }
   
   @media only screen and (min-width: 541px) and (max-width: 768px) {
     display: inline-flex;
     width: 120px;
     padding: 15px;
     height: 30px;
     margin-right: -1%;
     padding-bottom: 35px;
     font-size: 1.5em;
     margin-left: 15%;
     margin-top: -30%;
   }
   @media only screen and (min-width: 769px) and (max-width: 936px) {
     display: auto;
     margin-right: 9%;
     margin-bottom: 15%;     
   }
   @media only screen and (min-width: 937px) and (max-width: 1024px) {
     display: auto;
   }
   @media only screen and (min-width: 1025px) and (max-width: 1200px) {
     display: auto;
   }

 `;

 export const Button2 = styled.button`
   padding: 18px;
   width: 250px;
   border-radius: 10px;
   border: none;
   margin-left: 25px;
   background-color: black;
   margin-top:-5%;
   cursor: pointer;
   
      @media only screen and (max-width: 360px){
     width: 130px;
     padding: 15px;
     height: 40px;
     margin-right: -20%;
     padding-bottom: 35px;
   }
   @media only screen and (min-width: 361px) and (max-width: 440px) {
          width: 130px;
     padding: 15px;
     height: 40px;
     margin-right: -15%;
     padding-bottom: 35px;
   }
   @media only screen and (min-width: 441px) and (max-width: 540px) {
     display: auto;
   }
   @media only screen and (min-width: 541px) and (max-width: 768px) {
     width: 130px;
     padding: 15px;
     height: 40px;
     margin-right: -85%;
     padding-bottom: 35px;
   }
   @media only screen and (min-width: 769px) and (max-width: 936px) {
     display: auto;
     margin-right: -120%;
   }
   @media only screen and (min-width: 937px) and (max-width: 1024px) {
     display: auto;
   }
   @media only screen and (min-width: 1025px) and (max-width: 1200px) {
     display: auto;
   }
 `;

 export const Discord = styled.img`
   height: 70px;
   width: 200px;
   margin-top: -7%;
   margin-bottom: -12%;
   margin-left: -3%;

   @media only screen and (max-width: 768px) {
     height: 60px;
     width: 120px;
     margin-top: -10%;
     margin-left: -12%;
     margin-bottom: -1%;
     padding-bottom: 15px;
   }
  `;

  export const Register = styled.img`
    height: 80px;
    width: 80px;
    margin-top: -13%;
    margin-bottom: -12%;
    margin-left: -10%;


   @media only screen and (max-width: 768px) {
     height: 60px;
     width: 50px;
     margin-top: -12%;
     margin-bottom: -10%;
     margin-left: -20%;
     padding-bottom: 18px;
   }
   `;

function home2() {
  return (
    <>
      <meta name="description" content="Give life to your innovative ideas that can be solutions to the problems of today" />
    <Raisebox>
      <Container>
      <Image src={require("../assets/images/Map1.png").default} />
        <Content>
          Give life to your innovative ideas that can be solutions to the problems of today with <span style={{fontWeight:"700",fontSize:"2rem"}}>HACKODISHA!</span>
        </Content>
        <Date src={require("../assets/images/date.png").default} />
         <Buttons>
          <Button1>
           <Register src={require("../assets/images/devfolio.png").default} />
            Apply
          </Button1>
          <Button2>
            <Discord src={require("../assets/images/discord.png").default} />
          </Button2>
        </Buttons>
      </Container>
    </Raisebox>
    </>
  );
}

export default home2;
