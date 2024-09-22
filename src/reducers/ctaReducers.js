export function insertCtaReducer(state) {
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
}

export function setCtaDefaultCssReducer(state) {
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
}

export function updateCtaDefaultCssReducer(state) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });

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
}

export function updateCtaTextReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.text = action.payload;
}

export function updateCtaFontSizeReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.fontSize = action.payload;
}

export function updateCtaColorReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.color = action.payload;
}

export function updateCtaBackgroundColorReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.backgroundColor = action.payload;
}

export function updateCtaWidthReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.width = action.payload;
}

export function updateCtaHeightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.height = action.payload;
}

export function updateCtaBorderRadiusReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.borderRadius = action.payload;
}

export function updateCtaAlignReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.align = action.payload;
}

export function updateCtaFontWeightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.fontWeight = action.payload;
}

// export function updateCtaHeightReducer(state, action) {
//   const id = state.selectedLandingPageItemId;
//   const item = state.array.find(function (item) {
//     return item.id === id;
//   });
//   item.css.height = action.payload;
// }

export function updateCtaPaddingTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pt = action.payload;
}

export function updateCtaPaddingRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pr = action.payload;
}

export function updateCtaPaddingBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pb = action.payload;
}

export function updateCtaPaddingLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pl = action.payload;
}

export function updateCtaMarginTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mt = action.payload;
}

export function updateCtaMarginRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mr = action.payload;
}

export function updateCtaMarginBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mb = action.payload;
}

export function updateCtaMarginLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.ml = action.payload;
}
