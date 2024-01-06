"use client";

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import productSlice from "@/lib/features/productSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productSlice,
    },
});

export default store;
