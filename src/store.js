import { configureStore } from "@reduxjs/toolkit";
import { landingPageReducer } from "./features/landingPage/landingPageSlice";
import { uiManagerReducer } from "./features/uiManager/uiManagerSlice";
import { userReducer } from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    landingPage: landingPageReducer,
    uiManager: uiManagerReducer,
    user: userReducer,
  },
});

export default store;
