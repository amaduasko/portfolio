import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { NavComponent } from '../../components/Nav/Nav.component'
import { Contacts } from '../../components/Contacts/Contacts.component'
import './NavBar.scss'

export const NavBar = () => {
  const chekActive = (match, location) => {
    if (!match) {
      return false
    }
    const { pathname } = location
    return pathname
  }
  return (
    <Navbar color='dark' className='app-navbar' dark expand='md'>
      <NavbarBrand className=' p-0 ml-0 mr-0 logo' href='/'>
        A
      </NavbarBrand>
      <div className='d-flex justify-content-around navbar-item-container '>
        <NavComponent chekActive={chekActive} />
        <Contacts />
      </div>
    </Navbar>
  )
}
