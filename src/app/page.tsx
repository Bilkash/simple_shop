'use client';

import Layout from "@/components/Layout";
import {getAllProducts} from "@/requests/getAllProducts";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setCategories, setPageItems, wipeProducts} from "@/lib/features/productSlice";
import {ProductSliceType} from "@/types";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import styles from "./page.module.scss";
import ProductList from "@/components/ProductList";

export default function Home() {
    const dispatch = useDispatch();
    const {
        products,
        items,
        startIndex,
        endIndex,
    } = useSelector(
        (state: {products: ProductSliceType}) => state.products
    );

    useEffect(() => {
        getAllProducts().then(data => dispatch(getProducts(data)));
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
