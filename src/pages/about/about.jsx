import React from "react";
import "./about.css";
import {
  Ajeesh,
  Alby,
  Shidhan,
  Abhay,
  Rohit,
  Orunika,
} from "../../assets/index";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Y Bro, a website that will have a modern and aesthetic design, with
        intuitive navigation and clear call-to-actions. Our website is aimed at
        giving customized t-shirts, shirts and other apparel to our
        customers.Our web page project aims to create a user-friendly platform
        for a business that we created, that provides a large variety of
        garments to our target audience.
      </p>
      <div className="about-team">
        <h2 className="about-subtitle">Meet Our Team</h2>
        <div className="about-card">
          <img src={Orunika} alt="Team Member 3" className="about-card-img" />
          <div className="about-card-text">
            <h3>Orunika</h3>
            <p>DevOps</p>
            <p>
              Hauling from the city of joy, Orunika is our DevOps and is
              certified for the same under IBM through Courser. She has a keen
              interest in tech and its related atmosphere with a fast learner
              mentality. Her fluency and proficiency in English always come in
              clutch.
            </p>
          </div>
        </div>
        <div className="about-card">
          <img src={Ajeesh} alt="Team Member 1" className="about-card-img" />
          <div className="about-card-text">
            <h3>Ajeesh MJ</h3>
            <p>Developer</p>
            <p>
              The lead developer of our team, Ajeesh is also proficient with
              multiple programming languages. With his knowledge in
              architectural and developing segments, we are confident we were
              able to put out a great website for users with quality codes in no
              time.
            </p>
          </div>
        </div>
        <div className="about-card">
          <img src={Shidhan} alt="Team Member 2" className="about-card-img" />
          <div className="about-card-text">
            <h3>Mohammed Shidhan</h3>
            <p>Developer</p>
            <p>
              Shidhan, hauling from Kerala, is a business enthusiast who is currently
              working on his first project. His knowledge in the tech domain has been very useful,
              and he plans on executing multiple projects in the future. He is also a great addition to the team.  
            </p>
          </div>
        </div>
        <div className="about-card">
          <img src={Alby} alt="Team Member 3" className="about-card-img" />
          <div className="about-card-text">
            <h3>Alby Antony</h3>
            <p>Developer</p>
            <p>
              Alby, a jolly and happy-go-lucky person is the binding agent of
              our team. His knowledge as a Developer and his vibrant personality is a
              great addition to the group. He has tirelessly helped everyone. we're lucky to have him on board. 
            </p>
          </div>
        </div>
        <div className="about-card">
          <img src={Abhay} alt="Team Member 3" className="about-card-img" />
          <div className="about-card-text">
            <h3>Abhay V</h3>
            <p>Tester</p>
            <p>
              Most dedicated in the group and one of the testers of our group.A
              quick learner and a positive addition of the group.His knowledge
              in Testing helped us put out a user friendly website.
            </p>
          </div>
        </div>
        <div className="about-card">
          <img src={Rohit} alt="Team Member 3" className="about-card-img" />
          <div className="about-card-text">
            <h3>Rohit Rajeev</h3>
            <p>Tester</p>
            <p>
              Another tester of our group.A quick learner and a positive
              addition of the group.His enthusiast profficiency in software
              testing has helped us in developing this apparel website .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
