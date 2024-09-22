import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  insertBullet,
  insertCta,
  insertImage,
  insertText,
  setBulletDefaultCss,
  setCtaDefaultCss,
  setImageDefaultCss,
  setTextDefaultCss,
} from "../features/landingPage/landingPageSlice";

function Overlay() {
  const dispatch = useDispatch();
  const draggedItem = useSelector(function (state) {
    return state.landingPage.draggedItem;
  });

  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  console.log(array);

  function handleOnDragEnter(e) {
    e.preventDefault();
  }
  function handleOnDragLeave(e) {
    e.preventDefault();
  }
  function handleOnDragOver(e) {
    e.preventDefault();
  }
  function handleOnDrop(e) {
    e.preventDefault();
    if (draggedItem === "image") {
      dispatch(insertImage());
      dispatch(setImageDefaultCss());
    }
    if (draggedItem === "text") {
      dispatch(insertText());
      dispatch(setTextDefaultCss());
    }
    if (draggedItem === "bullet") {
      dispatch(insertBullet());
      dispatch(setBulletDefaultCss());
    }
    if (draggedItem === "cta") {
      dispatch(insertCta());
      dispatch(setCtaDefaultCss());
    }
  }

  return (
    <OverlayContainer
      style={{ height: `${draggedItem ? "100%" : "0%"}` }}
      onDragEnter={handleOnDragEnter}
      onDragLeave={handleOnDragLeave}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    />
  );
}

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: rgba(0, 0, 255, 0.25);
`;

export default Overlay;
