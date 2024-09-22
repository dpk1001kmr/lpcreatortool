import React, { useState } from "react";
import styled from "styled-components";
import AddContent from "./sidebar-content/AddContent";
import EditImage from "./sidebar-content/EditImage";
import EditText from "./sidebar-content/EditText";
import EditBullet from "./sidebar-content/EditBullet";
import EditCta from "./sidebar-content/EditCta";
import { useSelector } from "react-redux";
import AddCss from "./sidebar-content/AddCss";
import Settings from "./sidebar-content/Settings";

function SidebarContent() {
  // const [selectedItem, setSelectedItem] = useState("add");
  const selectedItem = useSelector(function (state) {
    return state.uiManager.selectedItem;
  });

  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });
  return (
    <SidebarContentContainer>
      {selectedItem === "settings" && (
        <Settings key={selectedLandingPageItemId} />
      )}
      {selectedItem === "css" && <AddCss key={selectedLandingPageItemId} />}
      {selectedItem === "add" && <AddContent key={selectedLandingPageItemId} />}
      {selectedItem === "image" && (
        <EditImage key={selectedLandingPageItemId} />
      )}
      {selectedItem === "text" && <EditText key={selectedLandingPageItemId} />}
      {selectedItem === "bullet" && (
        <EditBullet key={selectedLandingPageItemId} />
      )}
      {selectedItem === "cta" && <EditCta key={selectedLandingPageItemId} />}
    </SidebarContentContainer>
  );
}

const SidebarContentContainer = styled.div`
  /* border: 2px solid green; */
  flex-grow: 1;
  padding: 0rem;
  max-height: calc(100vh - 3rem);
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default SidebarContent;
