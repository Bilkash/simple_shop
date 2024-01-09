import {CartItem, CartSliceType} from "@/types";
import {createSlice} from "@reduxjs/toolkit";
import it from "node:test";

const initialState: CartSliceType = {
    items: [],
    sum: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items = [...state.items, {id: action.payload, count: 1}];
        },
        incrementCount: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);

            if (existingItem) {
                existingItem.count += 1;
            }
        },
        decrementCount: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if (existingItem && existingItem.count > 0) {
                existingItem.count -= 1;
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        wipeCart: (state) => {
            state.items = [];
        }
    }
});

export const {
    addProduct,
    incrementCount,
    decrementCount,
    removeProduct,
    wipeCart
} = cartSlice.actions;

export default cartSlice.reducer;
