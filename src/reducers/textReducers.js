export function insertTextReducer(state) {
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
}

export function setTextDefaultCssReducer(state) {
  const index = state.array.length - 1;
  const item = state.array[index];
  item.defaultCssCode = `
    .${item.id}-default {
      color: ${item.css.color};
      text-align: ${item.css.align};
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
    .${item.id}-default p {
      font-size: ${item.css.fontSize}px;
    }
  `;
  item.defualtCssClassName = `${item.id}-default`;
  item.selectedCssClassName = `${item.id}-default`;
}

export function updateTextDefaultCssReducer(state) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.defaultCssCode = `
    .${item.id}-default {
      color: ${item.css.color};
      text-align: ${item.css.align};
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
    .${item.id}-default p {
      font-size: ${item.css.fontSize}px;
    }
  `;
}

export function updateTextColorReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.color = action.payload;
}

export function updateTextAlignReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.align = action.payload;
}

export function updateTextFontSizeReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.fontSize = action.payload;
}

export function updateTextLineHeightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.lineHeight = action.payload;
}

export function updateTextPaddingTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pt = action.payload;
}

export function updateTextPaddingRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pr = action.payload;
}

export function updateTextPaddingBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pb = action.payload;
}

export function updateTextPaddingLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pl = action.payload;
}

export function updateTextMarginTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mt = action.payload;
}

export function updateTextMarginRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mr = action.payload;
}

export function updateTextMarginBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mb = action.payload;
}

export function updateTextMarginLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.ml = action.payload;
}
