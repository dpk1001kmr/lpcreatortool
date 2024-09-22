import React from "react";
import styled from "styled-components";
import LandingPage from "./LandingPage";
import EmptyLandingPage from "./EmptyLandingPage";
import Overlay from "./Overlay";
import { useSelector } from "react-redux";

import QuillRichTextEditor from "./landing-page/QuillRichTextEditor";

function LandingPageScreen() {
  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  const selectedLandingPageItemType = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemType;
  });

  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });

  return (
    <LandingPageScreenContainer>
      {(selectedLandingPageItemType === "text" ||
        selectedLandingPageItemType === "bullet") && (
        <QuillRichTextEditor key={selectedLandingPageItemId} />
      )}
      {array.length !== 0 ? <LandingPage /> : <EmptyLandingPage />}
      <Overlay />
    </LandingPageScreenContainer>
  );
}

const LandingPageScreenContainer = styled.div`
  flex-grow: 1;
  max-height: 100%;
  padding: 0.5rem;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: var(--slate-100);

  position: relative;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default LandingPageScreen;
