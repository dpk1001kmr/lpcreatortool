import React from "react";
import styled from "styled-components";

function DownloadButton() {
  return <Button>Download</Button>;
}

const Button = styled.button`
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
`;

export default DownloadButton;
