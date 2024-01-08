"use client";

import React from "react";

import styles from "./BuyButton.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {CartItem, CartSliceType} from "@/types";
import {addProduct, incrementCount} from "@/lib/features/cartSlice";
import {useSnackbar} from "notistack";

interface BuyButtonProps {
    id: number
}

export default function BuyButton({id}: BuyButtonProps) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const {items} = useSelector((state: {cart: CartSliceType}) => state.cart);

    const buyHandler = () => {
        const targetItem = items.find((it: CartItem) => it.id === id);

        enqueueSnackbar("Product add to cart", {autoHideDuration: 1500});

        if (!targetItem) {
            dispatch(addProduct(id));
        } else {
            dispatch(incrementCount(id));
        }
    };

    return (
        <div
            className={styles.button}
            onClick={() => buyHandler()}
        >
            Buy
        </div>
    );
}
