import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "../ui/Label";
import UpdateItemInput from "../ui/UpdateItemInput";
import Div from "../ui/Div";
import {
  updateCtaAlign,
  updateCtaBackgroundColor,
  updateCtaBorderRadius,
  updateCtaColor,
  updateCtaDefaultCss,
  updateCtaFontSize,
  updateCtaHeight,
  updateCtaMarginBottom,
  updateCtaMarginLeft,
  updateCtaMarginRight,
  updateCtaMarginTop,
  updateCtaPaddingBottom,
  updateCtaPaddingLeft,
  updateCtaPaddingRight,
  updateCtaPaddingTop,
  updateCtaText,
  updateCtaWidth,
} from "../../features/landingPage/landingPageSlice";
import UpdateItemAlignInput from "../ui/UpdateItemAlignInput";
import ApplyCss from "./ApplyCss";

function EditCta() {
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
    css: {
      fontSize,
      color,
      backgroundColor,
      width,
      height,
      borderRadius,
      align,
      fontWeight,
      pt,
      pr,
      pb,
      pl,
      mt,
      mr,
      mb,
      ml,
    },
  } = item;

  return (
    <>
      <Div>
        <Label>Text</Label>
        <UpdateItemInput type="text" value={text} setValues={[updateCtaText]} />
      </Div>
      <Div>
        <Label>Font size</Label>
        <UpdateItemInput
          type="number"
          value={fontSize}
          setValues={[updateCtaFontSize, updateCtaDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Color</Label>
        <UpdateItemInput
          type="color"
          value={color}
          setValues={[updateCtaColor, updateCtaDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Background color</Label>
        <UpdateItemInput
          type="color"
          value={backgroundColor}
          setValues={[updateCtaBackgroundColor, updateCtaDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Width</Label>
        <UpdateItemInput
          type="number"
          value={width}
          setValues={[updateCtaWidth, updateCtaDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Height</Label>
        <UpdateItemInput
          type="number"
          value={height}
          setValues={[updateCtaHeight, updateCtaDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Border radius</Label>
        <UpdateItemInput
          type="number"
          value={borderRadius}
          setValues={[updateCtaBorderRadius, updateCtaDefaultCss]}
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
            setValues={[updateCtaAlign, updateCtaDefaultCss]}
          />
        </div>
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
            setValues={[updateCtaPaddingTop, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Right</Label>
          <UpdateItemInput
            type="number"
            value={pr}
            setValues={[updateCtaPaddingRight, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Bottom</Label>
          <UpdateItemInput
            type="number"
            value={pb}
            setValues={[updateCtaPaddingBottom, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Left</Label>
          <UpdateItemInput
            type="number"
            value={pl}
            setValues={[updateCtaPaddingLeft, updateCtaDefaultCss]}
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
            setValues={[updateCtaMarginTop, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Right</Label>
          <UpdateItemInput
            type="number"
            value={mr}
            setValues={[updateCtaMarginRight, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Bottom</Label>
          <UpdateItemInput
            type="number"
            value={mb}
            setValues={[updateCtaMarginBottom, updateCtaDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Left</Label>
          <UpdateItemInput
            type="number"
            value={ml}
            setValues={[updateCtaMarginLeft, updateCtaDefaultCss]}
          />
        </div>
      </div>
      <ApplyCss type="cta" />
    </>
  );
}

export default EditCta;
