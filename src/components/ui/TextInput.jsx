import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function TextInput({ value, setValue }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);

  useEffect(
    function () {
      dispatch(setValue(inputValue));
    },
    [inputValue]
  );

  return (
    <StyledTextInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

const StyledTextInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
`;

export default TextInput;
