import React from "react";
import { FaTrash, FaCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  copyItem,
  deleteItem,
  setSelectedLandingPageItemId,
} from "../../features/landingPage/landingPageSlice";
import { setSelectedItem } from "../../features/uiManager/uiManagerSlice";

function SideButtons() {
  const dispatch = useDispatch();

  function handleOnDelete(e) {
    dispatch(setSelectedItem("add"));
    dispatch(deleteItem());
  }
  function handleOnCopy(e) {
    dispatch(setSelectedItem("add"));
    dispatch(copyItem());
  }

  return (
    <SideButtonsContianer>
      <button className="btn btn-delete" onClick={handleOnDelete}>
        <FaTrash className="icon" />
      </button>
      <button className="btn btn-copy" onClick={handleOnCopy}>
        <FaCopy className="icon" />
      </button>
    </SideButtonsContianer>
  );
}

const SideButtonsContianer = styled.div`
  position: absolute;
  top: 0;
  left: -37px;
  /* border: 1px solid black; */

  .btn {
    border: none;
    outline: none;
    padding: 0.25rem;
    color: var(--slate-900);
    background-color: #ffffff;
    border: 1px solid var(--slate-300);
    border-right: none;
  }

  .btn-delete {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .btn-copy {
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }

  .icon {
    font-size: 0.75rem;
  }
`;

export default SideButtons;
