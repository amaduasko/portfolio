import React from 'react'
import styled from 'styled-components'
import profileDesktop from '../../images/profile-desktop.jpg'
import profileTabMobile from '../../images/profile-tab-mobile.jpg'
import './csshake-slow.min.css'
import './Home.scss'

const HomeContainer = styled.div`
  overflow: hidden;
`

const Home = () => (
  <HomeContainer className='h-100 pt-5'>
    <div className='home-content'>
      <div className='img-container'>
        <img
          className='w-100'
          src={window.innerWidth < 768 ? profileTabMobile : profileDesktop}
          alt='profile'
        />
      </div>
      <h1 className='head'>
        <span className='greet  shake-slow'>Hellloo</span>,
        <p>welcome to the possible impossible dimension</p>I am{' '}
        <span className='greet'>Amadu</span>,<p>a web dev lover </p>
        <p>glad to see you around</p>
      </h1>
    </div>
    <h2 className='subhead '>FrontEnd Developer / Web developer</h2>
  </HomeContainer>
)

export default Home
