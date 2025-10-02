import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Sahil Singh</strong>. I'm originally
              from India ,I began my journey in technology with a passion for
              problem-solving, which ultimately led me to pursue full-stack web
              development. Along the way, I’ve taken on projects and experiences
              that strengthened not only my technical expertise but also my
              adaptability, communication, and teamwork skills.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              During my studies and hands-on work, I’ve had the opportunity to
              engage in challenging and exciting projects that deepened my
              understanding of both frontend and backend development. From
              crafting responsive, user-friendly interfaces to building
              efficient server-side applications, I discovered how much I enjoy
              bringing ideas into reality through technology.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team toward a shared goal has
              been one of the most rewarding aspects of my journey so far. I
              look forward to continuing this path—exploring new frameworks,
              tackling ambitious projects, and growing as a developer with a
              focus on creating impactful full-stack solutions.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
