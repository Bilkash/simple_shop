"use client";

import React, {useEffect, useState} from "react";
import Layout from "@/components/Layout";
import {usePathname} from "next/navigation";
import {Product} from "@/types";
import getProduct from "@/requests/getProduct";

import styles from "./page.module.scss";
import Image from "next/image";
import BuyButton from "@/components/BuyButton";
import ProductDetail from "@/components/ProductDetail";

export default function ProductPage() {
    const [productData, setProductData] = useState<Product | null>(null);
    const pathname = usePathname();
    const productId = pathname.split("/")[2];

    useEffect(() => {
        getProduct(productId).then(data => setProductData(data));
    }, []);

    console.log(productData);

    if (productData) {
        return (
            <Layout>
                <ProductDetail productData={productData}/>
            </Layout>
        );
    } else {
        return null;
    }
}
