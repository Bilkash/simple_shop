import { createSlice} from "@reduxjs/toolkit";
import {ProductSliceType} from "@/types";

const initialState: ProductSliceType = {
    products: [],
    page: 1,
    pageSize: 6,
    startIndex: 0,
    endIndex: 6,
    items: [],
    categories: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        incrementPage: (state) => {
            state.page = state.page + 1;
        },
        decrementPage: (state) => {
            state.page = state.page - 1;
        },
        setStartIndex: (state) => {
            state.startIndex = (state.page - 1) * state.pageSize;
        },
        setEndIndex: (state) => {
            state.endIndex = state.startIndex + state.pageSize;
        },
        setPageItems: (state) => {
            state.items = state.products.slice(state.startIndex, state.endIndex);
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        wipeProducts: (state) => {
            state.page = 1;
            state.startIndex = 1;
            state.endIndex = 6;
            state.products = [];
            state.items = [];
        }
    }
});

export const {
    getProducts,
    incrementPage,
    decrementPage,
    setStartIndex,
    setEndIndex,
    setPageItems,
    setCategories,
    wipeProducts,
} = productSlice.actions;

export default productSlice.reducer;
