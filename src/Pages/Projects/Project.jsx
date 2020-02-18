import React from "react";
import { Container, Col } from "reactstrap";
import { projects } from "../../constants/projects";

const Project = () => (
  <div className="pt-5">
    <h1 className="about-head  shake-slow">Projects </h1>
    <Container>
      {projects.map((projects, index) => (
        <Col key={index}></Col>
      ))}
    </Container>
  </div>
);

export default Project;
