"use client";

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import productSlice from "@/lib/features/productSlice";
import cartSlice from "@/lib/features/cartSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productSlice,
        cart: cartSlice,
    },
});

export default store;
