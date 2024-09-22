import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: "add",
};

const uiManagerSlice = createSlice({
  name: "uiManager",
  initialState,
  reducers: {
    setSelectedItem: function (state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = uiManagerSlice.actions;
export const uiManagerReducer = uiManagerSlice.reducer;
