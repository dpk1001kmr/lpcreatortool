import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function UpdateItemAlignInput({ value, setValues }) {
  const dispatch = useDispatch();
  function onClickHandler(alignValue) {
    setValues.forEach(function (setValue) {
      dispatch(setValue(alignValue));
    });
  }
  return (
    <AlignButtonContainer>
      <button className="btn btn-left" onClick={() => onClickHandler("left")}>
        Left
      </button>
      <button
        className="btn btn-center"
        onClick={() => onClickHandler("center")}
      >
        Center
      </button>
      <button className="btn btn-right" onClick={() => onClickHandler("right")}>
        Right
      </button>
    </AlignButtonContainer>
  );
}

const AlignButtonContainer = styled.div`
  display: flex;

  .btn {
    /* flex-grow: 1; */
    outline: none;
    border: 1px solid var(--slate-300);
    border-right: none;
    border-radius: 0rem;
    padding: 0.5rem 0.75rem;
    background-color: #ffffff;
  }

  .btn-left {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .btn-right {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-right: 1px solid var(--slate-300);
  }
`;

export default UpdateItemAlignInput;
