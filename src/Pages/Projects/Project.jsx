import React from "react";
import { Container, Col } from "reactstrap";
import { projects } from "../../constants/projects";
import "./Projects.scss";

const Project = () => (
  <div className="pt-5">
    <h1 className="projects-head  shake-slow">Projects </h1>
    <Container>
      {projects.map(project => (
        <Col key={project.id} className="project-item">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${project.img})`
            }}
          />
          <a href={project.linkUrl} className="link"></a>
        </Col>
      ))}
    </Container>
  </div>
);

export default Project;
