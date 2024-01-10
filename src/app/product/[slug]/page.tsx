"use client";

import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

import Layout from "@/components/Layout";
import getProduct from "@/requests/getProduct";
import ProductDetail from "@/components/ProductDetail";
import Loading from "@/components/Loading";

import {Product} from "@/types";

export default function ProductPage() {
    const [productData, setProductData] = useState<Product | null>(null);
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const routes = useRouter();

    useEffect(() => {
        getProduct(productId)
            .then(data => setProductData(data))
            .catch((er: Error) => {
                console.log(er.message);
                routes.push("/error");
            });
    }, []);

    if (productData) {
        return (
            <Layout>
                <ProductDetail productData={productData}/>
            </Layout>
        );
    } else {
        return (
            <Layout>
                <Loading/>
            </Layout>
        );
    }
}
