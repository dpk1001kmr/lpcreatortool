import React from "react";
import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarContent />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background-color: var(--slate-100);
  border-right: 1px solid var(--slate-300);
  width: 18rem;

  display: flex;
  flex-direction: column;
`;

export default Sidebar;
