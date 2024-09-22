import React, { useState, useEffect } from "react";
import Label from "../ui/Label";
import styled from "styled-components";
import Div from "../ui/Div";
import { useDispatch, useSelector } from "react-redux";
import { applyCustomCss } from "../../features/landingPage/landingPageSlice";

function ApplyCss({ type }) {
  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });

  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  const item = array.find(function (item) {
    return item.id === selectedLandingPageItemId;
  });

  const selectedCssClassName = item.selectedCssClassName;

  const customCss = useSelector(function (state) {
    return state.landingPage.customCss;
  });

  const customCssArray = Object.entries(customCss);

  let list = customCssArray.filter(function (item, index) {
    return item[1].cssType === type;
  });

  list = list.map(function (item, index) {
    return item[0];
  });

  const [applyCss, setApplyCss] = useState(selectedCssClassName);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(applyCustomCss(applyCss));
    },
    [applyCss]
  );

  return (
    <Div>
      <Label>Apply custom css</Label>
      <Select value={applyCss} onChange={(e) => setApplyCss(e.target.value)}>
        <option value="default">Default</option>
        {list.map(function (item, index) {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </Div>
  );
}

const Select = styled.select`
  padding: 0.5rem 0rem;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
`;

export default ApplyCss;
