import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./slices/modalSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: { auth: authReducer, modal: modalReducer },
});

export default store;
