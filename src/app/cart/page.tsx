"use client";

import React from "react";
import Layout from "@/components/Layout";

import styles from "./page.module.scss";
import Link from "next/link";
import ProductInCartList from "@/components/ProductInCartList";

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
