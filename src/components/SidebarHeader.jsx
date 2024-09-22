import React from "react";
import styled from "styled-components";
import logo from "./../assets/selling-simplified-logo.svg";

function SidebarHeader() {
  return (
    <SidebarHeaderContainer>
      {/* <span className="logo">Selling Simplified</span> */}
      <img className="logo" src={logo} alt="Selling Simplified" />
    </SidebarHeaderContainer>
  );
}

const SidebarHeaderContainer = styled.div`
  padding: 0.5rem;
  height: 3rem;
  border-bottom: 1px solid var(--slate-300);

  display: flex;
  justify-content: start;
  align-items: center;

  /* .logo {
    font-weight: bold;
  } */

  .logo {
    height: 1.75rem;
  }
`;

export default SidebarHeader;
