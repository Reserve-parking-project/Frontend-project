import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitValues = { isAuth: false };
const authSlice = createSlice({
  name: "auth",
  initialState: authInitValues,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const modalInitValue = { isOpen: false };
const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitValue,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, modal: modalSlice.reducer },
});

export default store;
export const authActions = authSlice.actions;
export const modalActions = modalSlice.actions;
