import React from "react";
import { FaImage, FaList } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { LuRectangleHorizontal } from "react-icons/lu";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setDraggedItem } from "../../features/landingPage/landingPageSlice";

const items = [
  { id: 1, type: "image", icon: <FaImage /> },
  { id: 2, type: "text", icon: <IoText /> },
  { id: 3, type: "bullet", icon: <FaList /> },
  { id: 4, type: "cta", icon: <LuRectangleHorizontal /> },
  // { id: 5, type: "checkbox", icon: <LuRectangleHorizontal /> },
  // { id: 6, type: "radio", icon: <LuRectangleHorizontal /> },
  // { id: 7, type: "dropdown", icon: <LuRectangleHorizontal /> },
  // { id: 8, type: "input", icon: <LuRectangleHorizontal /> },
  // { id: 9, type: "cta", icon: <LuRectangleHorizontal /> },
];

function AddContent() {
  const dispatch = useDispatch();
  const draggedItem = useSelector(function (state) {
    return state.landingPage.draggedItem;
  });

  function handleOnDragStart(type) {
    dispatch(setDraggedItem(type));
  }
  function handleOnDragEnd() {
    dispatch(setDraggedItem(null));
  }
  return (
    <AddContentContainer>
      {items.map(function (item) {
        return (
          <button
            key={item.id}
            draggable="true"
            onDragStart={() => handleOnDragStart(item.type)}
            onDragEnd={() => handleOnDragEnd()}
          >
            {item.icon}
            <span className="text">{item.type}</span>
          </button>
        );
      })}
    </AddContentContainer>
  );
}

const AddContentContainer = styled.div`
  /* border: 1px solid red; */
  padding: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  button {
    border: 1px solid var(--slate-300);
    outline: none;
    border-radius: 0.25rem;
    padding: 1rem 0rem;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-weight: normal;
    font-size: 0.85rem;
    text-transform: capitalize;
  }
`;

export default AddContent;
