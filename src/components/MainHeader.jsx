import React from "react";
import styled from "styled-components";

import { FaCss3 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoMdSettings } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdAdd } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../features/uiManager/uiManagerSlice";
import {
  setSelectedLandingPageItemId,
  setSelectedLandingPageItemType,
} from "../features/landingPage/landingPageSlice";
import UploadButton from "./UploadButton";
import DownloadButton from "./DownloadButton";
import LogoutButton from "./LogoutButton";

function MainHeader() {
  const selectedItem = useSelector(function (state) {
    return state.uiManager.selectedItem;
  });
  const dispatch = useDispatch();

  function onHandleSetting() {
    dispatch(setSelectedLandingPageItemId(null));
    dispatch(setSelectedLandingPageItemType(null));
    dispatch(setSelectedItem("settings"));
  }

  function onHandleCss() {
    dispatch(setSelectedLandingPageItemId(null));
    dispatch(setSelectedLandingPageItemType(null));
    dispatch(setSelectedItem("css"));
  }

  function onHandleAdd() {
    dispatch(setSelectedLandingPageItemId(null));
    dispatch(setSelectedLandingPageItemType(null));
    dispatch(setSelectedItem("add"));
  }

  return (
    <MainHeaderContainer>
      <div className="box">
        <Button onClick={onHandleSetting}>
          {/* <IoMdSettings />  */}
          Settings
        </Button>
        <Button onClick={onHandleAdd}>
          {/* <IoMdAdd /> */}
          Add
        </Button>
        <Button onClick={onHandleCss}>
          {/* <DiCss3 /> */}
          CSS
        </Button>
      </div>
      <div className="box">
        {/* <UploadButton /> */}
        <DownloadButton />
        {/* <LogoutButton /> */}
      </div>
    </MainHeaderContainer>
  );
}

const MainHeaderContainer = styled.div`
  padding: 0.5rem;
  height: 3rem;
  background-color: var(--slate-100);
  border-bottom: 1px solid var(--slate-300);

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  .box {
    display: flex;
    gap: 0.25rem;
  }
`;

const Button = styled.button`
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
`;

export default MainHeader;
