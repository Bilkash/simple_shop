'use client';

import Layout from "@/components/Layout";
import {getAllProducts} from "@/requests/getAllProducts";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setLoading, setPageItems} from "@/lib/features/productSlice";
import {Product, ProductSliceType} from "@/types";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import Loading from "@/components/Loading";
import {useRouter} from "next/navigation";

export default function Home() {
    const routes = useRouter();
    const dispatch = useDispatch();
    const {
        products,
        items,
        startIndex,
        endIndex,
        searchStr,
        loading,
    } = useSelector(
        (state: {products: ProductSliceType}) => state.products
    );

    useEffect(() => {
        dispatch(setLoading(true));
        getAllProducts().then(data => {
            dispatch(getProducts(data));
            dispatch(setLoading(false));
        }).catch((er: Error) => {
            routes.push("/error");
        });
    }, []);

    useEffect(() => {
        if (products.length) {
            dispatch(setPageItems());
        }
    }, [startIndex, endIndex, products]);

    useEffect(() => {
        if (searchStr) {
            const searchResult = products
                .filter((item: Product) => item
                    .title
                    .toLowerCase()
                    .includes(searchStr.toLowerCase()));
            dispatch(getProducts(searchResult));
        } else {
            getAllProducts().then(data => dispatch(getProducts(data)));
        }
    }, [searchStr]);

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
