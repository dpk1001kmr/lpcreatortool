import React, { useEffect, useState } from "react";
import Label from "../ui/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  updateImageAlign,
  updateImageAlt,
  updateImageDefaultCss,
  updateImageMarginBottom,
  updateImageMarginLeft,
  updateImageMarginRight,
  updateImageMarginTop,
  updateImagePaddingBottom,
  updateImagePaddingLeft,
  updateImagePaddingRight,
  updateImagePaddingTop,
  updateImageUrl,
  updateImageWidth,
} from "../../features/landingPage/landingPageSlice";
import Div from "../ui/Div";
import UpdateItemInput from "../ui/UpdateItemInput";
import UpdateItemAlignInput from "../ui/UpdateItemAlignInput";
import ApplyCss from "./ApplyCss";

function EditImage() {
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
    src,
    alt,
    css: { width, align, pt, pr, pb, pl, mt, mr, mb, ml },
  } = item;

  return (
    <>
      <Div>
        <img style={{ width: "100%", height: "auto" }} src={src} alt={alt} />
      </Div>
      <Div>
        <Label>Image Url</Label>
        <UpdateItemInput type="text" value={src} setValues={[updateImageUrl]} />
      </Div>
      <Div>
        <Label>Image alt text</Label>
        <UpdateItemInput type="text" value={alt} setValues={[updateImageAlt]} />
      </Div>
      <Div>
        <Label>Width (in %)</Label>
        <UpdateItemInput
          type="number"
          value={width}
          setValues={[updateImageWidth, updateImageDefaultCss]}
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
            setValues={[updateImageAlign, updateImageDefaultCss]}
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
            setValues={[updateImagePaddingTop, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Right</Label>
          <UpdateItemInput
            type="number"
            value={pr}
            setValues={[updateImagePaddingRight, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Bottom</Label>
          <UpdateItemInput
            type="number"
            value={pb}
            setValues={[updateImagePaddingBottom, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Left</Label>
          <UpdateItemInput
            type="number"
            value={pl}
            setValues={[updateImagePaddingLeft, updateImageDefaultCss]}
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
            setValues={[updateImageMarginTop, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Right</Label>
          <UpdateItemInput
            type="number"
            value={mr}
            setValues={[updateImageMarginRight, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Bottom</Label>
          <UpdateItemInput
            type="number"
            value={mb}
            setValues={[updateImageMarginBottom, updateImageDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Left</Label>
          <UpdateItemInput
            type="number"
            value={ml}
            setValues={[updateImageMarginLeft, updateImageDefaultCss]}
          />
        </div>
      </div>
      <ApplyCss type="image" />
    </>
  );
}

export default EditImage;
