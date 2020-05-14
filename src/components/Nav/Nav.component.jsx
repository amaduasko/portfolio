import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs, faUserTie } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippy.js/react'
import './Nav.style.scss'

const NavTollTip = styled(Tippy)`
  color: #8ee4af;
`

export const NavComponent = ({ chekActive }) => {
  const iconSize = window.innerWidth > 2000 ? '3x' : 'lg'
  const tollTipPlacement = window.innerWidth > 576 ? 'left' : 'top'
  return (
    <Nav vertical>
      <NavItem>
        <NavTollTip content='Home' placement={tollTipPlacement}>
          <NavLink
            exact
            to='/'
            className='nav-link m-2 animation-target rounded'
            isActive={chekActive}
          >
            <FontAwesomeIcon className='m-auto' icon={faHome} size={iconSize} />
          </NavLink>
        </NavTollTip>
      </NavItem>
      <NavItem>
        <NavTollTip content='Skills' placement={tollTipPlacement}>
          <NavLink
            to='/skills'
            className='nav-link m-2  animation-target rounded'
            isActive={chekActive}
          >
            <FontAwesomeIcon icon={faCogs} size={iconSize} />
          </NavLink>
        </NavTollTip>
      </NavItem>
      <NavItem>
        <NavTollTip content='About' placement={tollTipPlacement}>
          <NavLink
            to='/about'
            className='nav-link m-2  animation-target rounded'
            isActive={chekActive}
          >
            <FontAwesomeIcon icon={faUserTie} size={iconSize} />
          </NavLink>
        </NavTollTip>
      </NavItem>
      {/* <NavItem>
        <NavTollTip content='Projects' placement={tollTipPlacement}>
          <NavLink
            to='/blog'
            className='nav-link m-2  animation-target rounded'
            isActive={chekActive}
          >
            <FontAwesomeIcon icon={faLightbulb} size={iconSize} />
          </NavLink>
        </NavTollTip>
      </NavItem> */}
    </Nav>
  )
}
