import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBulletDefaultCss,
  updateBulletGap,
  updateBulletMarginBottom,
  updateBulletMarginLeft,
  updateBulletMarginRight,
  updateBulletMarginTop,
  updateBulletPaddingBottom,
  updateBulletPaddingLeft,
  updateBulletPaddingRight,
  updateBulletPaddingTop,
  updateBulletPointAlign,
  updateBulletPointColor,
  updateBulletPointFontSize,
  updateBulletPointLineHeight,
  updateBulletTextAlign,
  updateBulletTextColor,
  updateBulletTextFontSize,
  updateBulletTextLineHeight,
} from "../../features/landingPage/landingPageSlice";
import Label from "../ui/Label";
import UpdateItemInput from "../ui/UpdateItemInput";
import ApplyCss from "./ApplyCss";
import Div from "../ui/Div";
import UpdateItemAlignInput from "../ui/UpdateItemAlignInput";

function EditBullet() {
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
    bulletCss: { pt, pr, pb, pl, mt, mr, mb, ml, gap },
    bulletPointCss: {
      color: bulletPointColor,
      align: bulletPointAlign,
      fontSize: bulletPointFontSize,
      lineHeight: bulletPointLineHeight,
    },
    bulletTextCss: {
      color: bulletTextColor,
      align: bulletTextAlign,
      fontSize: bulletTextFontSize,
      lineHeight: bulletTextLineHeight,
    },
  } = item;

  return (
    <>
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
            setValues={[updateBulletPaddingTop, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Right</Label>
          <UpdateItemInput
            type="number"
            value={pr}
            setValues={[updateBulletPaddingRight, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Bottom</Label>
          <UpdateItemInput
            type="number"
            value={pb}
            setValues={[updateBulletPaddingBottom, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Padding Left</Label>
          <UpdateItemInput
            type="number"
            value={pl}
            setValues={[updateBulletPaddingLeft, updateBulletDefaultCss]}
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
            setValues={[updateBulletMarginTop, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Right</Label>
          <UpdateItemInput
            type="number"
            value={mr}
            setValues={[updateBulletMarginRight, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Bottom</Label>
          <UpdateItemInput
            type="number"
            value={mb}
            setValues={[updateBulletMarginBottom, updateBulletDefaultCss]}
          />
        </div>
        <div>
          <Label>Margin Left</Label>
          <UpdateItemInput
            type="number"
            value={ml}
            setValues={[updateBulletMarginLeft, updateBulletDefaultCss]}
          />
        </div>
      </div>
      <Div>
        <Label>Gap</Label>
        <UpdateItemInput
          type="number"
          value={gap}
          setValues={[updateBulletGap, updateBulletDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Bullet point color</Label>
        <UpdateItemInput
          type="color"
          value={bulletPointColor}
          setValues={[updateBulletPointColor, updateBulletDefaultCss]}
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
          <Label>P-align</Label>
          <UpdateItemAlignInput
            value={bulletPointAlign}
            setValues={[updateBulletPointAlign, updateBulletDefaultCss]}
          />
        </div>
      </Div>
      <Div>
        <Label>Bullet point font size</Label>
        <UpdateItemInput
          type="number"
          value={bulletPointFontSize}
          setValues={[updateBulletPointFontSize, updateBulletDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Bullet point line height</Label>
        <UpdateItemInput
          type="number"
          value={bulletPointLineHeight}
          setValues={[updateBulletPointLineHeight, updateBulletDefaultCss]}
        />
      </Div>

      <Div>
        <Label>Bullet text color</Label>
        <UpdateItemInput
          type="color"
          value={bulletTextColor}
          setValues={[updateBulletTextColor, updateBulletDefaultCss]}
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
          <Label>T-align</Label>
          <UpdateItemAlignInput
            value={bulletTextAlign}
            setValues={[updateBulletTextAlign, updateBulletDefaultCss]}
          />
        </div>
      </Div>
      <Div>
        <Label>Bullet text font size</Label>
        <UpdateItemInput
          type="number"
          value={bulletTextFontSize}
          setValues={[updateBulletTextFontSize, updateBulletDefaultCss]}
        />
      </Div>
      <Div>
        <Label>Bullet text line height</Label>
        <UpdateItemInput
          type="number"
          value={bulletTextLineHeight}
          setValues={[updateBulletTextLineHeight, updateBulletDefaultCss]}
        />
      </Div>
      <ApplyCss type="bullet" />
    </>
  );
}

export default EditBullet;
