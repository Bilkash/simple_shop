"use client";

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
