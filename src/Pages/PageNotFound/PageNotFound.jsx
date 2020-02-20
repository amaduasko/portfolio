import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  width: fit-content;
  font-size: 4em;
  color: #00b8d4;
`;

const PageNotFound = () => (
  <div>
    <Title>Sorry buddy, ya'll have to recheck your link (o_O)</Title>
  </div>
);

export default PageNotFound;
