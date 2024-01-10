"use client";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";

import {addProduct, incrementCount} from "@/lib/features/cartSlice";
import {MyButton} from "@/components/MyButton";

import {CartItem, CartSliceType} from "@/types";

interface BuyButtonProps {
    id: number
}

export default function BuyButton({id}: BuyButtonProps) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const {items} = useSelector((state: {cart: CartSliceType}) => state.cart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

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
        <MyButton onClick={() => buyHandler()}>Buy</MyButton>
    );
}
