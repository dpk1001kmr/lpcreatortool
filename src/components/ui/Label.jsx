import React from "react";
import styled from "styled-components";

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

const StyledLabel = styled.label`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  display: block;
`;

export default Label;
