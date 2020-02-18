import React from "react";
import { Routes } from "./routes/routes";
import { Col } from "reactstrap";
import Header from "./containers/Header/Header";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767.98px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Col className="pr-0">
        <Routes />
      </Col>
    </AppContainer>
  );
}

export default App;
