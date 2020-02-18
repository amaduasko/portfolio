import React from "react";
import { Nav, NavItem } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faGithub, faVk } from "@fortawesome/free-brands-svg-icons";
import "./csshake-little.css";
import "./Contacts.style.scss";
const ContactLink = styled.a`
  display: block;
  width: fit-content;
  color: #757575;
  font-size: 1rem;
  font-weight: bold;
  margin: auto;
  &:hover {
    color: #43a047;
  }
  @media only screen and (max-width: 767.98px) {
    margin: 10px;
  }
  @media only screen and (max-width: 575.98px) {
    margin: auto;
  }
`;

export const Contacts = () => {
  const iconSize = window.innerWidth > 2000 ? "3x" : "lg";
  return (
    <Nav vertical className="contacts m-auto">
      <NavItem>
        <ContactLink href="tel:+79992278906" className="p-2 shake-little">
          <FontAwesomeIcon icon={faPhoneSquare} size={iconSize} />
        </ContactLink>
      </NavItem>
      <NavItem>
        <ContactLink href="https://t.me/askodev" className="p-2 shake-little">
          <FontAwesomeIcon icon={faTelegram} size={iconSize} />
        </ContactLink>
      </NavItem>
      <NavItem>
        <ContactLink
          href="mailto:amadouaskofare@gmail.com"
          className="p-2 shake-little"
        >
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
        </ContactLink>
      </NavItem>
      <NavItem>
        <ContactLink
          href="https://github.com/amaduasko"
          className="p-2 shake-little"
        >
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
        </ContactLink>
      </NavItem>
      <NavItem>
        <ContactLink href="https://vk.com/asko2" className="p-2 shake-little">
          <FontAwesomeIcon icon={faVk} size={iconSize} />
        </ContactLink>
      </NavItem>
    </Nav>
  );
};
