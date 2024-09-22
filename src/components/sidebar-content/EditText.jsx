import React from "react";
import Div from "../ui/Div";
import Label from "../ui/Label";
import UpdateItemInput from "../ui/UpdateItemInput";
import UpdateItemAlignInput from "../ui/UpdateItemAlignInput";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTextAlign,
  updateTextColor,
  updateTextDefaultCss,
  updateTextFontSize,
  updateTextLineHeight,
  updateTextMarginBottom,
  updateTextMarginLeft,
  updateTextMarginRight,
  updateTextMarginTop,
  updateTextPaddingBottom,
  updateTextPaddingLeft,
  updateTextPaddingRight,
  updateTextPaddingTop,
} from "../../features/landingPage/landingPageSlice";
import ApplyCss from "./ApplyCss";

function EditText() {
  const dispatch = useDispatch();

  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });

  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  const item = array.find(function (item) {
    return item.id === selectedLandingPageItemId;
  });

  const {
    type,
    text,
    css: { color, align, fontSize, lineHeight, pt, pr, pb, pl, mt, mr, mb, ml },
  } = item;
  return (
    <>
      <Div>
        <Label>Text color</Label>
        <UpdateItemInput
          type="color"
          value={color}
          setValues={[updateTextColor, updateTextDefaultCss]}
        />
      </Div>
      <Div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Label>Align</Label>
          <UpdateItemAlignInput
            value={align}
            setValues={[updateTextAlign, updateTextDefaultCss]}
          />
        </div>
      </Div>
      <Div>
        <Label>Font size</Label>
        <UpdateItemInput
          type="number"
          value={fontSize}
          setValues={[updateTextFontSize, updateTextDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Line height</Label>
        <UpdateItemInput
          type="number"
          value={lineHeight}
          setValues={[updateTextLineHeight, updateTextDefaultCss]}
        />
      </Div>
      <div
        style={{
          borderBottom: "1px solid var(--slate-300)",
          padding: "0.75rem 0.5rem",
          display: "grid",
          gap: "0.5rem",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <Label>Padding Top</Label>
          <UpdateItemInput
            type="number"
            value={pt}
            setValues={[updateTextPaddingTop, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Right</Label>
          <UpdateItemInput
            type="number"
            value={pr}
            setValues={[updateTextPaddingRight, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Bottom</Label>
          <UpdateItemInput
            type="number"
            value={pb}
            setValues={[updateTextPaddingBottom, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Left</Label>
          <UpdateItemInput
            type="number"
            value={pl}
            setValues={[updateTextPaddingLeft, updateTextDefaultCss]}
          />
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid var(--slate-300)",
          padding: "0.75rem 0.5rem",
          display: "grid",
          gap: "0.5rem",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <Label>Margin Top</Label>
          <UpdateItemInput
            type="number"
            value={mt}
            setValues={[updateTextMarginTop, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Right</Label>
          <UpdateItemInput
            type="number"
            value={mr}
            setValues={[updateTextMarginRight, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Bottom</Label>
          <UpdateItemInput
            type="number"
            value={mb}
            setValues={[updateTextMarginBottom, updateTextDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Left</Label>
          <UpdateItemInput
            type="number"
            value={ml}
            setValues={[updateTextMarginLeft, updateTextDefaultCss]}
          />
        </div>
      </div>
      <ApplyCss type="text" />
    </>
  );
}

export default EditText;
