export function setDraggedItemReducer(state, action) {
  state.draggedItem = action.payload;
}

export function setDraggedLandingPageItemIdReducer(state, action) {
  state.draggedLandingPageItemId = action.payload;
}

export function setDraggedOverLandingPageItemIdReducer(state, action) {
  state.draggedOverLandingPageItemId = action.payload;
}

export function setSelectedLandingPageItemIdReducer(state, action) {
  state.selectedLandingPageItemId = action.payload;
}

export function setSelectedLandingPageItemTypeReducer(state, action) {
  state.selectedLandingPageItemType = action.payload;
}

export function resetMetaDataReducer(state) {
  state.draggedItem = null;
  state.draggedLandingPageItemId = null;
  state.draggedOverLandingPageItemId = null;
  state.selectedLandingPageItemId = null;
  state.selectedLandingPageItemType = null;
}

export function swapArrayItemsReducer(state) {
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
}

export function deleteItemReducer(state) {
  const id = state.selectedLandingPageItemId;
  const arrayAfterDeletingItem = state.array.filter(function (item) {
    return item.id !== id;
  });
  state.array = arrayAfterDeletingItem;
}

export function copyItemReducer(state) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });
  let deepCopy = JSON.parse(JSON.stringify(item));

  const deepCopyId = deepCopy.id.split("-")[0] + "-" + Date.now();
  const deepCopyDefualtCssClassName = `${deepCopyId}-default`;
  const deepCopySelectedCssClassName = `${deepCopyId}-default`;
  const deepCopyDefaultCssCode = deepCopy.defaultCssCode.replaceAll(
    id,
    deepCopyId
  );

  deepCopy = {
    ...deepCopy,
    id: deepCopyId,
    defaultCssCode: deepCopyDefaultCssCode,
    defualtCssClassName: deepCopyDefualtCssClassName,
    selectedCssClassName: deepCopySelectedCssClassName,
  };
  state.array.push(deepCopy);
}

export function setLandingPageNameReducer(state, action) {
  state.landingPageName = action.payload;
}

export function setLandingPageSubjectLineReducer(state, action) {
  state.landingPageSubjectLine = action.payload;
}

export function setLandingPageCampaignNameReducer(state, action) {
  state.landingPageCampaignName = action.payload;
}

export function setLandingPageAssetUrlReducer(state, action) {
  state.landingPageAssetUrl = action.payload;
}

export function setLandingPageErrorMessageReducer(state, action) {
  state.landingPageErrorMessage = action.payload;
}

export function setTextReducer(state, action) {
  const index = state.array.findIndex((item) => {
    return item.id === state.selectedLandingPageItemId;
  });
  if (index > -1) state.array[index].text = action.payload;
}

export function setCustomCssReducer(state, action) {
  const { cssClassName, cssCode, cssType } = action.payload;
  state.customCss[cssClassName] = { cssType, cssCode };
}

export function applyCustomCssReducer(state, action) {
  const id = state.selectedLandingPageItemId;
  const item = state.array.find(function (item) {
    return item.id === id;
  });

  if (action.payload === "default") {
    item.selectedCssClassName = item.defualtCssClassName;
  } else {
    item.selectedCssClassName = action.payload;
  }
}
