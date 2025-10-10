import React from "react";
// import GitHubCalendar from 'react-github-calendar';

import "./About.css";
import Skills from "./Skills.js";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Akriti.</h4>
            <p>
              I am a passionate web developer with strong skills in coding, data structures, and algorithms.
            </p>
            <p>
              I love building innovative web applications and exploring emerging technologies in AI and machine learning. Constantly learning and solving challenges motivates me to grow as a tech professional.
            </p>
            <p>
              I love to code because if I can think it, I can make it a reality.
            </p>
          </div>
          <div className="title">
            <h3>What do I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript,or including
              popular frameworks like ReactJS. I also make the web
              pretty by using CSS and, whenever needed, any of their friends:
              Bootstrap, tailwind, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a AI enthusiast.</h4>
            <p>
             I am an AI enthusiast and lifelong learner, exploring machine learning, deep learning, and intelligent systems. I enjoy experimenting with AI projects, understanding algorithms, and applying them to solve real-world problems.
            </p>
           
          </div>
        </article>

        <div>
          <div className="title">
            <h3>Tech Stack</h3>
            <p className="separator" />

            <div className="descTechS full">
              {/* <p>
                <div>
                  <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" />
                </div>
              </p> */}
              <div className="TechContainer">
                <a href="https://www.mongodb.com" target="_blank">
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="Mongodb"
                  />
                </a>
                <a href="https://expressjs.com" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express js"
                  />
                </a>
                <a href="https://react.dev" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=react"
                    alt="React js"
                  />
                </a>
                <a href="https://nodejs.org/en" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node js"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="title">
            <div className="SkillsMargin">
              <h3>Skills</h3>
            </div>
            <p className="separatorSkills" />
          </div>
          <Skills />
        </div>

      
      </div>
    </section>
  );
};

export default About;
