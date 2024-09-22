import React from "react";
import styled from "styled-components";
import LandingPageScreen from "./LandingPageScreen";

function MainContent() {
  return (
    <MainContentContainer>
      {/* <p className="title">Your landing page is here...</p> */}
      <LandingPageScreen />
    </MainContentContainer>
  );
}

const MainContentContainer = styled.div`
  flex-grow: 1;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  .title {
    /* font-weight: bold; */
    margin-bottom: 0.5rem;
  }
`;

export default MainContent;
