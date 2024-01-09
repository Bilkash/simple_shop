"use client";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CartSliceType, ProductInCart, ProductSliceType} from "@/types";
import {getAllProducts} from "@/requests/getAllProducts";
import {getProducts} from "@/lib/features/productSlice";
import CartProduct from "@/components/CartProduct";

import styles from "./ProductInCartList.module.scss";

interface ProductInCartListProps {
    order: boolean
}

export default function ProductInCartList({order}: ProductInCartListProps) {
    const dispatch = useDispatch();
    const {items} = useSelector((state: {cart: CartSliceType}) => state.cart);
    const {products} = useSelector((state: {products: ProductSliceType}) => state.products);

    useEffect(() => {
        getAllProducts().then(data => dispatch(getProducts(data)));
    }, []);

    const getItemInProduct = () => {
        return products.reduce((acc: ProductInCart[], product) => {
            const targetProduct = items.find((item) => item.id === product.id);

            if (targetProduct) {
                const cartItem = {item: product, count: targetProduct.count };

                acc.push(cartItem);

                return acc;
            }

            return acc;
        }, []);
    };

    const renderItems = () => {
        return getItemInProduct().map((it) => <CartProduct key={it.item.id} order={order} product={it}/>);
    };

    return (
        <div className={styles.wrapper}>{renderItems()}</div>
    );
};
