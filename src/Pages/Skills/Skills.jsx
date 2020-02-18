import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { Button, Container } from "reactstrap";
import { frontEndSkills, backEndSkills } from "../../constants/skills";
import "./Skills.style.scss";

const SillTitle = styled.h3`
  color: #00b8d4;
  font-style: italic;
  text-decoration: underline;
`;

const Skills = () => {
  useEffect(() => {
    anime({
      targets: ".skills .btn",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 300 },
        { value: 1, easing: "easeInOutQuad", duration: 600 }
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" })
    });
  });
  return (
    <div className="skills-container pt-5">
      <h1 className="skillhead shake-slow">
        <span>Skills</span>
      </h1>
      <div className="skills-content">
        <Container className="mb-3">
          <SillTitle>FrontEnd : </SillTitle>
          <div className="skills">
            {frontEndSkills.map((skill, index) => (
              <Button
                style={{
                  fontWeight: "600"
                }}
                className="text-uppercase m-1 "
                key={index}
              >
                {skill.skill}
              </Button>
            ))}
          </div>
        </Container>
        <Container>
          <SillTitle>Backend : </SillTitle>
          <div className="skills">
            {backEndSkills.map((skill, index) => (
              <Button
                style={{
                  fontWeight: "600",
                  backgroundColor: "#414141",
                  border: "none"
                }}
                className="text-uppercase m-1"
                key={index}
              >
                {skill.skill}
              </Button>
            ))}
          </div>
        </Container>
      </div>
      <h4 className="skillqote pl-2">
        <p>The main expertise of my area is FrontEnd development </p>
        <p>I have also Full Stack developer experience.</p>
      </h4>
    </div>
  );
};

export default Skills;
