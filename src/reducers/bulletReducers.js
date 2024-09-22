export function insertBulletReducer(state) {
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
      gap: 7,
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
}

export function setBulletDefaultCssReducer(state) {
  const index = state.array.length - 1;
  const item = state.array[index];
  item.defaultCssCode = `.${item.id}-default {
    display: flex;
    gap: ${item.bulletCss.gap}px;
    padding-top: ${item.bulletCss.pt}px;
    padding-right: ${item.bulletCss.pr}px;
    padding-bottom: ${item.bulletCss.pb}px;
    padding-left: ${item.bulletCss.pl}px;
    margin-top: ${item.bulletCss.mt}px;
    margin-right: ${item.bulletCss.mr}px;
    margin-bottom: ${item.bulletCss.mb}px;
    margin-left: ${item.bulletCss.ml}px;
  }
  .${item.id}-default .bullet {
    color: ${item.bulletPointCss.color};
    text-align: ${item.bulletPointCss.align};
    line-height: ${item.bulletPointCss.lineHeight}px;
  }

  .${item.id}-default .bullet p {
    font-size: ${item.bulletPointCss.fontSize}px;
  }

  .${item.id}-default .text {
    color: ${item.bulletTextCss.color};
    text-align: ${item.bulletTextCss.align};
    line-height: ${item.bulletTextCss.lineHeight}px;
    flex-grow: 1;
  }

  .${item.id}-default .text p {
    font-size: ${item.bulletTextCss.fontSize}px;
  }
`;
  item.defualtCssClassName = `${item.id}-default`;
  item.selectedCssClassName = `${item.id}-default`;
}

export function updateBulletDefaultCssReducer(state) {
  // alert("hello");
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.defaultCssCode = `.${item.id}-default {
    display: flex;
    gap: ${item.bulletCss.gap}px;
    padding-top: ${item.bulletCss.pt}px;
    padding-right: ${item.bulletCss.pr}px;
    padding-bottom: ${item.bulletCss.pb}px;
    padding-left: ${item.bulletCss.pl}px;
    margin-top: ${item.bulletCss.mt}px;
    margin-right: ${item.bulletCss.mr}px;
    margin-bottom: ${item.bulletCss.mb}px;
    margin-left: ${item.bulletCss.ml}px;
  }
  .${item.id}-default .bullet {
    color: ${item.bulletPointCss.color};
    text-align: ${item.bulletPointCss.align};
    font-size: ${item.bulletPointCss.fontSize}px;
    line-height: ${item.bulletPointCss.lineHeight}px;
  }
  .${item.id}-default .bullet p {
    font-size: ${item.bulletPointCss.fontSize}px;
  }
  .${item.id}-default .text {
    color: ${item.bulletTextCss.color};
    text-align: ${item.bulletTextCss.align};
    font-size: ${item.bulletTextCss.fontSize}px;
    line-height: ${item.bulletTextCss.lineHeight}px;
    flex-grow: 1;
  }
  .${item.id}-default .text p {
    font-size: ${item.bulletTextCss.fontSize}px;
  }
`;
}

export function updateBulletPaddingTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.pt = action.payload;
}

export function updateBulletPaddingRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.pr = action.payload;
}

export function updateBulletPaddingBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.pb = action.payload;
}

export function updateBulletPaddingLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.pl = action.payload;
}

export function updateBulletMarginTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.mt = action.payload;
}

export function updateBulletMarginRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.mr = action.payload;
}

export function updateBulletMarginBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.mb = action.payload;
}

export function updateBulletMarginLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.ml = action.payload;
}

export function updateBulletGapReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletCss.gap = action.payload;
}

export function updateBulletPointColorReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletPointCss.color = action.payload;
}

export function updateBulletPointAlignReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletPointCss.align = action.payload;
}

export function updateBulletPointFontSizeReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletPointCss.fontSize = action.payload;
}

export function updateBulletPointLineHeightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletPointCss.lineHeight = action.payload;
}

export function updateBulletTextColorReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletTextCss.color = action.payload;
}

export function updateBulletTextAlignReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletTextCss.align = action.payload;
}

export function updateBulletTextFontSizeReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletTextCss.fontSize = action.payload;
}

export function updateBulletTextLineHeightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.bulletTextCss.lineHeight = action.payload;
}
