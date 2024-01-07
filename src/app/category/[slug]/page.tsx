"use client";

import React, {useEffect} from "react";
import Layout from "@/components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {ProductSliceType} from "@/types";
import {usePathname} from "next/navigation";
import getProductsByCategory from "@/requests/getProductsByCategory";
import {getProducts, setPageItems} from "@/lib/features/productSlice";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";

export default function CategoryPage () {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const {
        products,
        items,
        startIndex,
        endIndex,
    } = useSelector(
        (state: {products: ProductSliceType}) => state.products
    );
    const categoryName = pathname.split("/")[2];

    useEffect(() => {
        getProductsByCategory(categoryName).then(data => dispatch(getProducts(data)));
    }, []);

    useEffect(() => {
        if (products.length) {
            dispatch(setPageItems());
        }
    }, [startIndex, endIndex, products]);

    return (
        <Layout>
            <ProductList products={items}/>
            <Pagination/>
        </Layout>
    );
}
