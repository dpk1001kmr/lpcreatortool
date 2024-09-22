export function insertImageReducer(state) {
  state.array.push({
    id: "image" + "-" + Date.now(),
    type: "image",
    src: "http://visionayrsolutions.com/sstcp/ss_at/at/AMD-LP-Logo.png",
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
}

export function setImageDefaultCssReducer(state) {
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
}

export function updateImageDefaultCssReducer(state) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
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
  // item.defualtCssClassName = `${item.id}-default`;
  // item.selectedCssClassName = `${item.id}-default`;
}

export function updateImageUrlReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.src = action.payload;
}

export function updateImageAltReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.alt = action.payload;
}

export function updateImageWidthReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.width = action.payload;
}

export function updateImageAlignReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.align = action.payload;
}

export function updateImagePaddingTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pt = action.payload;
}

export function updateImagePaddingRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pr = action.payload;
}

export function updateImagePaddingBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pb = action.payload;
}

export function updateImagePaddingLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.pl = action.payload;
}

export function updateImageMarginTopReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mt = action.payload;
}

export function updateImageMarginRightReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mr = action.payload;
}

export function updateImageMarginBottomReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.mb = action.payload;
}

export function updateImageMarginLeftReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  item.css.ml = action.payload;
}
