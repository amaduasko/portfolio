import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { NavComponent } from "../../components/Nav/Nav.component";
import { Contacts } from "../../components/Contacts/Contacts.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const chekActive = (match, location) => {
    if (!match) {
      return false;
    }
    const { pathname } = location;
    return pathname;
  };
  let icon = isOpen ? faTimes : faBars;
  let navBarClass = isOpen ? "show" : "hide";
  return (
    <Navbar color="dark" className="app-navbar" dark expand="md">
      <NavbarBrand className=" p-0 ml-0 mr-0 logo" href="/">
        A
      </NavbarBrand>
      <NavbarToggler className="nav-toggler" onClick={toggle}>
        <FontAwesomeIcon className="m-auto" icon={icon} size="lg" />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <div
          className={
            "d-flex justify-content-around navbar-item-container " + navBarClass
          }
        >
          <NavComponent chekActive={chekActive} isOpen={isOpen} />
          <Contacts />
        </div>
      </Collapse>
    </Navbar>
  );
};
