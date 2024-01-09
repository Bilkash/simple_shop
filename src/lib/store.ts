"use client";

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import productSlice from "@/lib/features/productSlice";
import cartSlice from "@/lib/features/cartSlice";
import userSlice from "@/lib/features/userSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productSlice,
        cart: cartSlice,
        user: userSlice,
    },
});

export default store;
