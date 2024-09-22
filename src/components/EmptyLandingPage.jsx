import React from "react";
import styled from "styled-components";

function EmptyLandingPage() {
  return (
    <EmptyLandingPageContainer>
      <h1>There is no landing page</h1>
      <p>Drag the item from sidebar to create landing page</p>
    </EmptyLandingPageContainer>
  );
}

const EmptyLandingPageContainer = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 0.75rem;
  }

  p {
    font-weight: bold;
  }
`;

export default EmptyLandingPage;
