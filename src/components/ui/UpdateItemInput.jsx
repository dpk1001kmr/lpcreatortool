import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function UpdateItemInput({ type, value, setValues }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);

  useEffect(
    function () {
      setValues.forEach(function (setValue) {
        dispatch(setValue(inputValue));
      });
    },
    [inputValue]
  );

  if (type === "text") {
    return (
      <StyledTextInput
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  }

  if (type === "number") {
    return (
      <StyledTextInput
        type={type}
        min="0"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  }

  if (type === "color") {
    return (
      <StyledTextInput
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  }
}

const StyledTextInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
`;

export default UpdateItemInput;
