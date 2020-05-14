import React from 'react'
import { Container } from 'reactstrap'
import './Services.scss'

const Services = () => (
  <div className='pt-5'>
    <h1 className='services-head  shake-slow'>Services </h1>
    <Container>
      {/* {projects.map((project) => (
        <Col key={project.id} className='project-item'>
          <div
            className='background-image'
            style={{
              backgroundImage: `url(${project.img})`,
            }}
          />
           <a href={project.linkUrl} className="link"></a> 
        </Col>
      ))} */}
    </Container>
  </div>
)

export default Services
