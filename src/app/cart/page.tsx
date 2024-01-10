"use client";

import React from "react";
import Link from "next/link";
import ProductInCartList from "@/components/ProductInCartList";
import Layout from "@/components/Layout";

import styles from "./page.module.scss";

export default function CartPage() {
    return (
        <Layout>
            <ProductInCartList order={false}/>

            <Link href={"/order"}>
                <div className={styles.orderButton}>Place Order</div>
            </Link>
        </Layout>
    );
}
