import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";

function Main() {
  return (
    <MainContainer>
      <MainHeader />
      <MainContent />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default Main;
