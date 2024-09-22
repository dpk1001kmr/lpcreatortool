import { createSlice } from "@reduxjs/toolkit";
import {
  insertImageReducer,
  setImageDefaultCssReducer,
} from "../../reducers/imageReducers";

const initialState = {
  draggedItem: null,
  draggedLandingPageItemId: null,
  draggedOverLandingPageItemId: null,
  selectedLandingPageItemId: null,
  selectedLandingPageItemType: null,
  customCss: {},
  array: [],
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setDraggedItem: function (state, action) {
      state.draggedItem = action.payload;
    },

    setDraggedLandingPageItemId: function (state, action) {
      state.draggedLandingPageItemId = action.payload;
    },

    setDraggedOverLandingPageItemId: function (state, action) {
      state.draggedOverLandingPageItemId = action.payload;
    },

    setSelectedLandingPageItemId: function (state, action) {
      state.selectedLandingPageItemId = action.payload;
    },

    setSelectedLandingPageItemType: function (state, action) {
      state.selectedLandingPageItemType = action.payload;
    },

    resetMetaData: function (state) {
      state.draggedItem = null;
      state.draggedLandingPageItemId = null;
      state.draggedOverLandingPageItemId = null;
      state.selectedLandingPageItemId = null;
      state.selectedLandingPageItemType = null;
    },

    swapArrayItems: function (state) {
      const id1 = state.draggedLandingPageItemId;
      const id2 = state.draggedOverLandingPageItemId;

      const index1 = state.array.findIndex(function (item) {
        return item.id === id1;
      });
      const index2 = state.array.findIndex(function (item) {
        return item.id === id2;
      });

      const temp = state.array[index1];
      state.array[index1] = state.array[index2];
      state.array[index2] = temp;
    },

    deleteItem: function (state) {
      const id = state.selectedLandingPageItemId;
      const arrayAfterDeletingItem = state.array.filter(function (item) {
        return item.id !== id;
      });
      state.array = arrayAfterDeletingItem;
    },

    copyItem: function (state) {
      const id = state.selectedLandingPageItemId;
      const item = state.array.find(function (item) {
        return item.id === id;
      });
      let deepCopy = JSON.parse(JSON.stringify(item));
      deepCopy = {
        ...deepCopy,
        id: deepCopy.id.split("-")[0] + "-" + Date.now(),
      };
      state.array.push(deepCopy);
    },

    setText: function (state, action) {
      const index = state.array.findIndex((item) => {
        return item.id === state.selectedLandingPageItemId;
      });
      if (index > -1) state.array[index].text = action.payload;
    },

    insertImage: function (state) {
      state.array.push({
        id: "image" + "-" + Date.now(),
        type: "image",
        src: "http://visionayrsolutions.com/sstcp/ss_at/at/VMRay-Inc-Logo.png",
        alt: "image",
        css: {
          width: 30,
          align: "left",
          pt: 0,
          pr: 0,
          pb: 0,
          pl: 0,
          mt: 0,
          mr: 0,
          mb: 0,
          ml: 0,
        },
        defaultCssCode: "",
        defualtCssClassName: "",
        selectedCssClassName: "",
      });
    },

    setImageDefaultCss: function (state) {
      const index = state.array.length - 1;
      const item = state.array[index];
      item.defaultCssCode = `.${item.id}-default {
        text-align: ${item.css.align};
        padding-top: ${item.css.pt}px;
        padding-right: ${item.css.pr}px;
        padding-bottom: ${item.css.pb}px;
        padding-left: ${item.css.pl}px;
        margin-top: ${item.css.mt}px;
        margin-right: ${item.css.mr}px;
        margin-bottom: ${item.css.mb}px;
        margin-left: ${item.css.ml}px;
      }
      .${item.id}-default img {
        width: ${item.css.width}%;
      }`;
      item.defualtCssClassName = `${item.id}-default`;
      item.selectedCssClassName = `${item.id}-default`;
    },

    insertText: function (state) {
      state.array.push({
        id: "text" + "-" + Date.now(),
        type: "text",
        text: "<p>This is a text item.</p>",
        css: {
          color: "#000000",
          align: "left",
          fontSize: "14",
          lineHeight: "21",
          pt: 0,
          pr: 0,
          pb: 0,
          pl: 0,
          mt: 0,
          mr: 0,
          mb: 0,
          ml: 0,
        },
        defaultCssCode: "",
        defualtCssClassName: "",
        selectedCssClassName: "",
      });
    },

    setTextDefaultCss: function (state) {
      const index = state.array.length - 1;
      const item = state.array[index];
      item.defaultCssCode = `
        .${item.id}-default {
          color: ${item.css.color};
          text-align: ${item.css.align};
          font-size: ${item.css.fontSize}px;
          line-height: ${item.css.lineHeight}px;
          padding-top: ${item.css.pt}px;
          padding-right: ${item.css.pr}px;
          padding-bottom: ${item.css.pb}px;
          padding-left: ${item.css.pl}px;
          margin-top: ${item.css.mt}px;
          margin-right: ${item.css.mr}px;
          margin-bottom: ${item.css.mb}px;
          margin-left: ${item.css.ml}px;
        }
      `;
      item.defualtCssClassName = `${item.id}-default`;
      item.selectedCssClassName = `${item.id}-default`;
    },

    insertBullet: function (state) {
      state.array.push({
        id: "bullet" + "-" + Date.now(),
        type: "bullet",
        text: "<p>This is a bullet item.</p>",
        bulletCss: {
          pt: 0,
          pr: 0,
          pb: 0,
          pl: 0,
          mt: 0,
          mr: 0,
          mb: 0,
          ml: 0,
          gap: 0.5,
        },
        bulletPointCss: {
          color: "#000000",
          align: "left",
          fontSize: "14",
          lineHeight: "21",
        },
        bulletTextCss: {
          color: "#000000",
          align: "left",
          fontSize: "14",
          lineHeight: "21",
        },
        defaultCssCode: "",
        defualtCssClassName: "",
        selectedCssClassName: "",
      });
    },

    setBulletDefaultCss: function (state) {
      const index = state.array.length - 1;
      const item = state.array[index];
      item.defaultCssCode = `.${item.id}-default {
        display: flex;
        gap: ${item.bulletCss.gap}rem;
        padding-top: ${item.bulletCss.pt}px;
        padding-right: ${item.bulletCss.pr}px;
        padding-bottom: ${item.bulletCss.pb}px;
        padding-left: ${item.bulletCss.pl}px;
        margin-top: ${item.bulletCss.pt}px;
        margin-right: ${item.bulletCss.pr}px;
        margin-bottom: ${item.bulletCss.pb}px;
        margin-left: ${item.bulletCss.pl}px;
      }
      .${item.id}-default .bullet {
        color: ${item.bulletPointCss.color};
        text-align: ${item.bulletPointCss.align};
        font-size: ${item.bulletPointCss.fontSize}px;
        line-height: ${item.bulletPointCss.lineHeight}px;
      }
      .${item.id}-default .text {
        color: ${item.bulletTextCss.color};
        text-align: ${item.bulletTextCss.align};
        font-size: ${item.bulletTextCss.fontSize}px;
        line-height: ${item.bulletTextCss.lineHeight}px;
        flex-grow: 1;
      }
    `;
      item.defualtCssClassName = `${item.id}-default`;
      item.selectedCssClassName = `${item.id}-default`;
    },

    insertCta: function (state) {
      state.array.push({
        id: "cta" + "-" + Date.now(),
        type: "cta",
        text: "Submit",
        css: {
          fontSize: 14,
          color: "#ffffff",
          backgroundColor: "#000000",
          width: 180,
          height: 40,
          borderRadius: 0,
          align: "left",
          fontWeight: "normal",
          pt: 0,
          pr: 0,
          pb: 0,
          pl: 0,
          mt: 0,
          mr: 0,
          mb: 0,
          ml: 0,
        },
        defaultCssCode: "",
        defualtCssClassName: "",
        selectedCssClassName: "",
      });
    },

    setCtaDefaultCss: function (state) {
      const index = state.array.length - 1;
      const item = state.array[index];
      item.defaultCssCode = `
        .${item.id}-default {
          text-align: ${item.css.align};
          padding-top: ${item.css.pt}px;
          padding-right: ${item.css.pr}px;
          padding-bottom: ${item.css.pb}px;
          padding-left: ${item.css.pl}px;
          margin-top: ${item.css.mt}px;
          margin-right: ${item.css.mr}px;
          margin-bottom: ${item.css.mb}px;
          margin-left: ${item.css.ml}px;
        }

        .${item.id}-default button {
          border: none;
          outline: none;
          font-size: ${item.css.fontSize}px;
          color: ${item.css.color};
          background-color: ${item.css.backgroundColor};
          width: ${item.css.width}px;
          height: ${item.css.height}px;
          border-radius: ${item.css.borderRadius}px;
          font-weight: ${item.css.fontWeight};
        }        
      `;
      item.defualtCssClassName = `${item.id}-default`;
      item.selectedCssClassName = `${item.id}-default`;
    },
  },
});

export const {
  setDraggedItem,
  setDraggedLandingPageItemId,
  setDraggedOverLandingPageItemId,
  setSelectedLandingPageItemId,
  setSelectedLandingPageItemType,
  swapArrayItems,
  deleteItem,
  copyItem,
  setText,
  insertImage,
  setImageDefaultCss,
  insertText,
  setTextDefaultCss,
  insertBullet,
  setBulletDefaultCss,
  insertCta,
  setCtaDefaultCss,
} = landingPageSlice.actions;

export const landingPageReducer = landingPageSlice.reducer;
