import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDraggedLandingPageItemId,
  setDraggedOverLandingPageItemId,
  setSelectedLandingPageItemId,
  setSelectedLandingPageItemType,
  swapArrayItems,
} from "../../features/landingPage/landingPageSlice";
import styled from "styled-components";
import SideButtons from "./SideButtons";
import { setSelectedItem } from "../../features/uiManager/uiManagerSlice";

function DraggableBox({ item, children }) {
  const { id, type } = item;

  const dispatch = useDispatch();

  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });

  function handleOnClick(e) {
    if (selectedLandingPageItemId && selectedLandingPageItemId === id) {
      dispatch(setSelectedLandingPageItemId(null));
      dispatch(setSelectedLandingPageItemType(null));
      dispatch(setSelectedItem("add"));
    } else if (selectedLandingPageItemId && selectedLandingPageItemId !== id) {
      dispatch(setSelectedLandingPageItemId(id));
      dispatch(setSelectedLandingPageItemType(type));
      dispatch(setSelectedItem(type));
    } else {
      dispatch(setSelectedLandingPageItemId(id));
      dispatch(setSelectedLandingPageItemType(type));
      dispatch(setSelectedItem(type));
    }
  }

  function handleOnDragStart(e) {
    console.log("start");
    dispatch(setDraggedLandingPageItemId(id));
  }
  function handleOnDragEnd(e) {
    console.log("end");
    dispatch(setDraggedLandingPageItemId(null));
    dispatch(setDraggedOverLandingPageItemId(null));
  }
  function handleOnDragEnter(e) {
    e.preventDefault();
    console.log("enter");
    dispatch(setDraggedOverLandingPageItemId(id));
  }
  function handleOnDragLeave(e) {
    e.preventDefault();
    console.log("leave");
  }
  function handleOnDragOver(e) {
    e.preventDefault();
    console.log("over");
    dispatch(swapArrayItems());
  }
  function handleOnDrop(e) {
    e.preventDefault();
    console.log("drop");
  }

  return (
    <DraggableBoxContainer
      style={{
        borderTop: `${
          selectedLandingPageItemId === id
            ? "1px solid var(--slate-300)"
            : "none"
        }`,
        borderBottom: `${
          selectedLandingPageItemId === id
            ? "1px solid var(--slate-300)"
            : "none"
        }`,
        position: "relative",
      }}
      id={id}
      draggable="true"
      onClick={handleOnClick}
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      onDragEnter={handleOnDragEnter}
      onDragLeave={handleOnDragLeave}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      {selectedLandingPageItemId === id && <SideButtons />}
      {children}
    </DraggableBoxContainer>
  );
}

const DraggableBoxContainer = styled.div``;

export default DraggableBox;
