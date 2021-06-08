import React from "react";
import styled from "styled-components";
import './style.css';

export const Raisebox = styled.div`
min-height: 70vh;
width: 90vw;
margin: 10vh auto;
background: #18191a;
box-shadow: 2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6);
border-radius: 10px;
`;

function home2() {
  return (
    <Raisebox>
      <div className="events_container">
        <h1 className="events_h1">
          HACK <span style={{ color: "#ff0000" }}> EVENTS </span>
       </h1> </div>
       <h2 className="events_h2">To be revealed soon</h2>
      
      {/*<section class="cd-horizontal-timeline loaded" style="padding-top: 0px;">
  <div class="timeline">
    <div class="events-wrapper">
      <div class="events" style="width: 720px; transform: translateX(-454.05px);">

        <ul style="list-style-type:none;">
          <li><a class="id1 older-event selected" onclick="myclickfun(1)" href="#0" data-date="29/08/2020" style="left: 120px;">29 Aug</a></li>
          <li><a class="id1" onclick="myclickfun(2)" href="#0" data-date="30/08/2020" style="left: 180px;">30 Aug</a></li>
          <li><a class="id1" onclick="myclickfun(3)" href="#0" data-date="31/08/2020" style="left: 240px;">31 Aug</a></li>
          <li><a class="id1" onclick="myclickfun(4)" href="#0" data-date="01/09/2020" style="left: 300px;">1 Sep</a></li>
          <li><a class="id1" onclick="myclickfun(5)" href="#0" data-date="02/09/2020" style="left: 360px;">2 Sep</a></li>
          <li><a class="id1" onclick="myclickfun(6)" href="#0" data-date="03/09/2020" style="left: 420px;">3 Sep</a></li>
          <li><a class="id1" onclick="myclickfun(7)" href="#0" data-date="04/09/2020" style="left: 480px;">4 Sep</a></li>
          <li><a class="id1" onclick="myclickfun(8)" href="#0" data-date="05/09/2020" style="left: 540px;">5 Sep</a></li>
          <li><a class="id1" onclick="myclickfun(9)" href="#0" data-date="06/09/2020" style="left: 600px;">6 Sep</a></li>

        </ul>

        <span class="filling-line" aria-hidden="true" style="transform: scaleX(0.195538);"></span>
      </div>
    </div>

    <ul style="list-style-type:none;" class="cd-timeline-navigation">
      <li><a href="#0" onclick="myfun1()" id="prev" class="ccc prev" style="left:0;background: url(../img/back.svg) no-repeat 0 0;">«</a></li>
      <li><a href="#0" id="next" onclick="myfun()" class="cc inactive" style="right:0;background: url(../img/right-arrow.svg) no-repeat 0 0;"> »</a></li>
    </ul>
  </div>


  <div class="events-content" style="height: 406.4px;">
    <ul style="list-style-type:none;">
      <li class="selected" data-date="29/08/2020">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          //  <h4 class="title"><a>Speaker Name: Sandip Das</a></h4><br>
          //  <h4 class="title"><a>Session Name: “Containerizing Any Application and deploying in AWS Beanstalk from AWS ECR” </a></h4><br>
          //  <h4 class="title"><a>Timings: IST 5:00 PM onwards </a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/y5-jkqdZqeU" target="_blank" style="color:blue">https://youtu.be/y5-jkqdZqeU</a></h4><br>

          </div>
      </li>

      <li data-date="30/08/2020" class="">
        <div id="ee" class="icon-box apply-btn" onmouseout="this.style.color='green'">

          //  <h4 class="title"><a>Speaker Name: Prasad Seth</a></h4><br>
          //  <h4 class="title"><a>Session Name: "How Collaborative Resources Helps To Win A Hackathon"</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 6:00PM</a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/ijNqedo-Shk" target="_blank" style="color:blue">
          //  <div class="line">
          //  </div>
          //  <h4 class="title"><a>Speaker Name: Alon Grinshpoon,Founder &amp; CEO @echoAR</a> </h4><br>
          //  <h4 class="title"><a>Session Name: "How to Build a Cloud-Connected AR/VR App in 15 Minutes or Less"</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 9:30PM</a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/ukyY8yfDq5Q" target="_blank" style="color:blue">

          </div>
      </li>
      <li data-date="31/08/2020" class="">
        <div id="ee" class="icon-box apply-btn">

           //<h4 class="title"><a>Speaker Name: Dawoodlddris</a></h4><br>
           //<h4 class="title"><a>Session Name: "Realizing your idea build faster with PowerApps."</a></h4><br>
            //<h4 class="title"><a>Timings: IST 6:00PM</a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/CzuTAGAPQuo" target="_blank" style="color:blue">https://youtu.be/CzuTAGAPQuo</a></h4><br>
          </div>
      </li>

      <li data-date="01/09/2020" class="">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          //  <h4 class="title"><a>Speaker Name: Seema Saharan</a> </h4><br>
          //  <h4 class="title"><a>Session Name: "Introduction to Open Source"</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 7:00PM</a></h4><br>
          //   <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/dZE0_1g0jNo" target="_blank" style="color:blue">https://youtu.be/dZE0_1g0jNo</a></h4><br>
          </div>
      </li>

      <li data-date="02/09/2020" class="">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          //  <h4 class="title"><a>Speaker Name: Tushar Kulkarni </a></h4><br>
          //  <h4 class="title"><a>Session Name: "101s Of Application Security"</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 7:00PM</a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="https://youtu.be/zp9cqkqkiy4" target="_blank" style="color:blue">https://youtu.be/zp9cqkqkiy4</a></h4><br>
          </div>
      </li>

      <li data-date="03/09/2020" class="">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          //  <h4 class="title"><a>Speaker Name: Veliswa Boya</a></h4><br>
          //  <h4 class="title"><a>Session Name: "Journey To Being An AWS Hero With Serverless On AWS."</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 6:00PM</a></h4><br>
          //  <h4 class="title"><a>Session Link: </a><a href="http://bit.ly/HackGujaratVeliswa" target="_blank" style="color:blue">http://bit.ly/HackGujaratVeliswa</a></h4><br>




          </div>
      </li>

      <li data-date="04/09/2020" class="">
         <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          //  <h4 class="title"><a>Speaker Name: Ayon Roy</a></h4><br>
          //  <h4 class="title"><a>Session Name: "The What, Why &amp; How of Data Science Internships?"</a></h4><br>
          //  <h4 class="title"><a>Timings: IST 8:00 PM </a></h4><br>



          </div>
      </li>

      <li data-date="05/09/2020" class="">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          //  <h4 class="title"><a>Hackathon</a></h4><br>
          //  <h4 class="title"><a>Inauguration Ceremony: </a><a href="https://youtu.be/swOSSWdncXU" target="_blank" style="color:blue">https://youtu.be/swOSSWdncXU</a></h4><br>




          </div>
      </li>

      <li data-date="06/09/2020" class="">
        <div class="icon-box apply-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          //  <h4 class="title"><a>Hackathon</a></h4><br>




          </div>
      </li>


        </ul>
      </div>
    </section>*/}
    </Raisebox>
  );
}

export default home2;
