// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

type AppSliceType = {
  isSideBarOpen: boolean
}

const initialState: AppSliceType = {
  isSideBarOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSideBar: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
  },
});

export const { openSideBar } = appSlice.actions;

export default appSlice.reducer;
