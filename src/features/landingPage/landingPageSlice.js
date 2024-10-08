import { createSlice } from "@reduxjs/toolkit";
import {
  insertImageReducer,
  setImageDefaultCssReducer,
  updateImageAlignReducer,
  updateImageAltReducer,
  updateImageDefaultCssReducer,
  updateImageMarginBottomReducer,
  updateImageMarginLeftReducer,
  updateImageMarginRightReducer,
  updateImageMarginTopReducer,
  updateImagePaddingLeftReducer,
  updateImagePaddingRightReducer,
  updateImagePaddingTopReducer,
  updateImageUrlReducer,
  updateImageWidthReducer,
} from "../../reducers/imageReducers";
import {
  insertTextReducer,
  setTextDefaultCssReducer,
  updateTextAlignReducer,
  updateTextColorReducer,
  updateTextDefaultCssReducer,
  updateTextFontSizeReducer,
  updateTextLineHeightReducer,
  updateTextMarginBottomReducer,
  updateTextMarginLeftReducer,
  updateTextMarginRightReducer,
  updateTextMarginTopReducer,
  updateTextPaddingBottomReducer,
  updateTextPaddingLeftReducer,
  updateTextPaddingRightReducer,
  updateTextPaddingTopReducer,
} from "../../reducers/textReducers";
import {
  insertBulletReducer,
  setBulletDefaultCssReducer,
  updateBulletDefaultCssReducer,
  updateBulletGapReducer,
  updateBulletMarginBottomReducer,
  updateBulletMarginLeftReducer,
  updateBulletMarginRightReducer,
  updateBulletMarginTopReducer,
  updateBulletPaddingBottomReducer,
  updateBulletPaddingLeftReducer,
  updateBulletPaddingRightReducer,
  updateBulletPaddingTopReducer,
  updateBulletPointAlignReducer,
  updateBulletPointColorReducer,
  updateBulletPointFontSizeReducer,
  updateBulletPointLineHeightReducer,
  updateBulletTextAlignReducer,
  updateBulletTextColorReducer,
  updateBulletTextFontSizeReducer,
  updateBulletTextLineHeightReducer,
} from "../../reducers/bulletReducers";
import {
  insertCtaReducer,
  setCtaDefaultCssReducer,
  updateCtaAlignReducer,
  updateCtaBackgroundColorReducer,
  updateCtaBorderRadiusReducer,
  updateCtaColorReducer,
  updateCtaDefaultCssReducer,
  updateCtaFontSizeReducer,
  updateCtaFontWeightReducer,
  updateCtaHeightReducer,
  updateCtaMarginBottomReducer,
  updateCtaMarginLeftReducer,
  updateCtaMarginRightReducer,
  updateCtaMarginTopReducer,
  updateCtaPaddingBottomReducer,
  updateCtaPaddingLeftReducer,
  updateCtaPaddingRightReducer,
  updateCtaPaddingTopReducer,
  updateCtaTextReducer,
  updateCtaWidthReducer,
} from "../../reducers/ctaReducers";
import {
  applyCustomCssReducer,
  copyItemReducer,
  deleteItemReducer,
  resetMetaDataReducer,
  setCustomCssReducer,
  setDraggedItemReducer,
  setDraggedLandingPageItemIdReducer,
  setDraggedOverLandingPageItemIdReducer,
  setLandingPageAssetUrlReducer,
  setLandingPageCampaignNameReducer,
  setLandingPageErrorMessageReducer,
  setLandingPageNameReducer,
  setLandingPageSubjectLineReducer,
  setSelectedLandingPageItemIdReducer,
  setSelectedLandingPageItemTypeReducer,
  setTextReducer,
  swapArrayItemsReducer,
} from "../../reducers/helperReducers";

const initialState = {
  draggedItem: null,
  draggedLandingPageItemId: null,
  draggedOverLandingPageItemId: null,
  selectedLandingPageItemId: null,
  selectedLandingPageItemType: null,

  landingPageName: "",
  landingPageSubjectLine: "",
  landingPageCampaignName: "",
  landingPageAssetUrl: "",
  landingPageErrorMessage: "",

  customCss: {},
  array: [],
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setDraggedItem: setDraggedItemReducer,
    setDraggedLandingPageItemId: setDraggedLandingPageItemIdReducer,
    setDraggedOverLandingPageItemId: setDraggedOverLandingPageItemIdReducer,
    setSelectedLandingPageItemId: setSelectedLandingPageItemIdReducer,
    setSelectedLandingPageItemType: setSelectedLandingPageItemTypeReducer,
    resetMetaData: resetMetaDataReducer,

    swapArrayItems: swapArrayItemsReducer,
    deleteItem: deleteItemReducer,
    copyItem: copyItemReducer,

    setLandingPageName: setLandingPageNameReducer,
    setLandingPageSubjectLine: setLandingPageSubjectLineReducer,
    setLandingPageCampaignName: setLandingPageCampaignNameReducer,
    setLandingPageAssetUrl: setLandingPageAssetUrlReducer,
    setLandingPageErrorMessage: setLandingPageErrorMessageReducer,

    setText: setTextReducer,
    setCustomCss: setCustomCssReducer,
    applyCustomCss: applyCustomCssReducer,

    /**
     * Image
     */
    insertImage: insertImageReducer,
    setImageDefaultCss: setImageDefaultCssReducer,
    updateImageDefaultCss: updateImageDefaultCssReducer,
    updateImageUrl: updateImageUrlReducer,
    updateImageAlt: updateImageAltReducer,
    updateImageWidth: updateImageWidthReducer,
    updateImageAlign: updateImageAlignReducer,
    updateImagePaddingTop: updateImagePaddingTopReducer,
    updateImagePaddingRight: updateImagePaddingRightReducer,
    updateImagePaddingBottom: updateImageMarginBottomReducer,
    updateImagePaddingLeft: updateImagePaddingLeftReducer,
    updateImageMarginTop: updateImageMarginTopReducer,
    updateImageMarginRight: updateImageMarginRightReducer,
    updateImageMarginBottom: updateImageMarginBottomReducer,
    updateImageMarginLeft: updateImageMarginLeftReducer,

    /**
     * Text
     */
    insertText: insertTextReducer,
    setTextDefaultCss: setTextDefaultCssReducer,
    updateTextColor: updateTextColorReducer,
    updateTextDefaultCss: updateTextDefaultCssReducer,
    updateTextColor: updateTextColorReducer,
    updateTextAlign: updateTextAlignReducer,
    updateTextFontSize: updateTextFontSizeReducer,
    updateTextLineHeight: updateTextLineHeightReducer,
    updateTextPaddingTop: updateTextPaddingTopReducer,
    updateTextPaddingRight: updateTextPaddingRightReducer,
    updateTextPaddingBottom: updateTextPaddingBottomReducer,
    updateTextPaddingLeft: updateTextPaddingLeftReducer,
    updateTextMarginTop: updateTextMarginTopReducer,
    updateTextMarginRight: updateTextMarginRightReducer,
    updateTextMarginBottom: updateTextMarginBottomReducer,
    updateTextMarginLeft: updateTextMarginLeftReducer,

    /**
     * Bullet
     */
    insertBullet: insertBulletReducer,
    setBulletDefaultCss: setBulletDefaultCssReducer,
    updateBulletDefaultCss: updateBulletDefaultCssReducer,

    updateBulletPaddingTop: updateBulletPaddingTopReducer,
    updateBulletPaddingRight: updateBulletPaddingRightReducer,
    updateBulletPaddingBottom: updateBulletPaddingBottomReducer,
    updateBulletPaddingLeft: updateBulletPaddingLeftReducer,
    updateBulletMarginTop: updateBulletMarginTopReducer,
    updateBulletMarginRight: updateBulletMarginRightReducer,
    updateBulletMarginBottom: updateBulletMarginBottomReducer,
    updateBulletMarginLeft: updateBulletMarginLeftReducer,
    updateBulletGap: updateBulletGapReducer,

    updateBulletPointColor: updateBulletPointColorReducer,
    updateBulletPointAlign: updateBulletPointAlignReducer,
    updateBulletPointFontSize: updateBulletPointFontSizeReducer,
    updateBulletPointLineHeight: updateBulletPointLineHeightReducer,

    updateBulletTextColor: updateBulletTextColorReducer,
    updateBulletTextAlign: updateBulletTextAlignReducer,
    updateBulletTextFontSize: updateBulletTextFontSizeReducer,
    updateBulletTextLineHeight: updateBulletTextLineHeightReducer,

    /**
     * Cta
     */
    insertCta: insertCtaReducer,
    setCtaDefaultCss: setCtaDefaultCssReducer,
    updateCtaDefaultCss: updateCtaDefaultCssReducer,
    updateCtaText: updateCtaTextReducer,
    updateCtaFontSize: updateCtaFontSizeReducer,
    updateCtaColor: updateCtaColorReducer,
    updateCtaBackgroundColor: updateCtaBackgroundColorReducer,
    updateCtaWidth: updateCtaWidthReducer,
    updateCtaHeight: updateCtaHeightReducer,
    updateCtaBorderRadius: updateCtaBorderRadiusReducer,
    updateCtaAlign: updateCtaAlignReducer,
    updateCtaFontWeight: updateCtaFontWeightReducer,
    updateCtaPaddingTop: updateCtaPaddingTopReducer,
    updateCtaPaddingRight: updateCtaPaddingRightReducer,
    updateCtaPaddingBottom: updateCtaPaddingBottomReducer,
    updateCtaPaddingLeft: updateCtaPaddingLeftReducer,
    updateCtaMarginTop: updateCtaMarginTopReducer,
    updateCtaMarginRight: updateCtaMarginRightReducer,
    updateCtaMarginBottom: updateCtaMarginBottomReducer,
    updateCtaMarginLeft: updateCtaMarginLeftReducer,
  },
});

export const {
  /**helper */
  setDraggedItem,
  setDraggedLandingPageItemId,
  setDraggedOverLandingPageItemId,
  setSelectedLandingPageItemId,
  setSelectedLandingPageItemType,
  swapArrayItems,
  deleteItem,
  copyItem,
  setLandingPageName,
  setLandingPageSubjectLine,
  setLandingPageCampaignName,
  setLandingPageAssetUrl,
  setLandingPageErrorMessage,
  setText,
  setCustomCss,
  applyCustomCss,

  /**Image */
  insertImage,
  setImageDefaultCss,
  updateImageDefaultCss,
  updateImageUrl,
  updateImageAlt,
  updateImageWidth,
  updateImageAlign,
  updateImagePaddingTop,
  updateImagePaddingRight,
  updateImagePaddingBottom,
  updateImagePaddingLeft,
  updateImageMarginTop,
  updateImageMarginRight,
  updateImageMarginBottom,
  updateImageMarginLeft,

  /**Text */
  insertText,
  setTextDefaultCss,
  updateTextDefaultCss,
  updateTextColor,
  updateTextAlign,
  updateTextFontSize,
  updateTextLineHeight,
  updateTextPaddingTop,
  updateTextPaddingRight,
  updateTextPaddingBottom,
  updateTextPaddingLeft,
  updateTextMarginTop,
  updateTextMarginRight,
  updateTextMarginBottom,
  updateTextMarginLeft,

  /**Bullet */
  insertBullet,
  setBulletDefaultCss,
  updateBulletDefaultCss,

  updateBulletPaddingTop,
  updateBulletPaddingRight,
  updateBulletPaddingBottom,
  updateBulletPaddingLeft,
  updateBulletMarginTop,
  updateBulletMarginRight,
  updateBulletMarginBottom,
  updateBulletMarginLeft,
  updateBulletGap,

  updateBulletPointColor,
  updateBulletPointAlign,
  updateBulletPointFontSize,
  updateBulletPointLineHeight,

  updateBulletTextColor,
  updateBulletTextAlign,
  updateBulletTextFontSize,
  updateBulletTextLineHeight,

  /**Cta */
  insertCta,
  setCtaDefaultCss,
  updateCtaDefaultCss,
  updateCtaText,
  updateCtaFontSize,
  updateCtaColor,
  updateCtaBackgroundColor,
  updateCtaWidth,
  updateCtaHeight,
  updateCtaBorderRadius,
  updateCtaAlign,
  updateCtaFontWeight,
  updateCtaPaddingTop,
  updateCtaPaddingRight,
  updateCtaPaddingBottom,
  updateCtaPaddingLeft,
  updateCtaMarginTop,
  updateCtaMarginRight,
  updateCtaMarginBottom,
  updateCtaMarginLeft,
} = landingPageSlice.actions;

export const landingPageReducer = landingPageSlice.reducer;
