import React from "react";
import Layout from "@/components/Layout";
import ProductInCartList from "@/components/ProductInCartList";
import ConfirmOrder from "@/components/ConfirmOrder";

export default function OrderPage() {
    return (
        <Layout>
            <ConfirmOrder>
                <ProductInCartList order/>
            </ConfirmOrder>
        </Layout>
    );
}
