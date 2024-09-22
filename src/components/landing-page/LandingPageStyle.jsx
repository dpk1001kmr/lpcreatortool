import React from "react";
import { useSelector } from "react-redux";

function LandingPageStyle() {
  const customCss = useSelector(function (state) {
    return state.landingPage.customCss;
  });

  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  let style = "";

  Object.values(customCss).forEach((item, index) => {
    style += item.cssCode + "\n";
  });

  style += array
    .map(function (item) {
      return item.defaultCssCode;
    })
    .join("");
  return <style>{style}</style>;
}

export default LandingPageStyle;
