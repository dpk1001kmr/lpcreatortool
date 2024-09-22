import React, { useState } from "react";
import Label from "../ui/Label";
import Div from "../ui/Div";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCustomCss } from "../../features/landingPage/landingPageSlice";

function AddCss() {
  const dispatch = useDispatch();

  const customCss = useSelector(function (state) {
    return state.landingPage.customCss;
  });

  const customCssList = Object.keys(customCss);

  const [selectCss, setSelectCss] = useState("");
  const [cssClassName, setCssClassName] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [cssType, setCssType] = useState("");

  function onSelectCssHandler(e) {
    const selected = e.target.value;
    if (!selected) {
      setSelectCss("");
      setCssClassName("");
      setCssCode("");
      setCssType("");
      return;
    }
    setSelectCss(selected);
    setCssClassName(selected);
    setCssCode(customCss[selected].cssCode);
    setCssType(customCss[selected].cssType);
  }

  function onAddCssHandler() {
    if (!cssClassName.trim() || !cssCode.trim() || !cssType.trim()) return;
    dispatch(setCustomCss({ cssClassName, cssCode, cssType }));
    setSelectCss("");
    setCssClassName("");
    setCssCode("");
    setCssType("");
  }

  return (
    <>
      <Div>
        <Label>Select css</Label>
        <Select value={selectCss} onChange={onSelectCssHandler}>
          <option value="">Select css</option>
          {customCssList.map(function (item, index) {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </Div>
      <Div>
        <Label>CSS class name</Label>
        <Input
          value={cssClassName}
          onChange={(e) => setCssClassName(e.target.value)}
        />
      </Div>
      <Div>
        <Label>CSS Code</Label>
        <TextArea
          rows={10}
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
        ></TextArea>
      </Div>
      <Div>
        <Label>Select css type</Label>
        <Select value={cssType} onChange={(e) => setCssType(e.target.value)}>
          <option value="">Select css type</option>
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="bullet">Bullet</option>
          <option value="cta">Cta</option>
        </Select>
      </Div>
      <Div>
        <AddCssButton onClick={onAddCssHandler}>Add Css</AddCssButton>
      </Div>
    </>
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

const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
`;

const AddCssButton = styled.button`
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
`;

export default AddCss;
