"use client";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {usePathname, useRouter} from "next/navigation";

import getProductsByCategory from "@/requests/getProductsByCategory";
import {getProducts, setLoading, setPageItems} from "@/lib/features/productSlice";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";

import {ProductSliceType} from "@/types";

export default function CategoryPage () {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const routes = useRouter();
    const {
        products,
        items,
        startIndex,
        endIndex,
        loading,
    } = useSelector(
        (state: {products: ProductSliceType}) => state.products
    );
    const categoryName = pathname.split("/")[2];

    useEffect(() => {
        dispatch(setLoading(true));
        getProductsByCategory(categoryName).then(data => {
            dispatch(getProducts(data));
            dispatch(setLoading(false));
        }).catch((er: Error) => {
            console.log(er.message);
            routes.push("/error");
        });
    }, []);

    useEffect(() => {
        if (products.length) {
            dispatch(setPageItems());
        }
    }, [startIndex, endIndex, products]);

    return (
        <Layout>
            {loading
                ? (
                    <Loading/>
                )
                : (
                    <>
                        <ProductList products={items}/>
                        <Pagination/>
                    </>
                )}
        </Layout>
    );
}
