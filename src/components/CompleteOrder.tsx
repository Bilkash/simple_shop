"use client";

import React from "react";

import CheckIcon from '@mui/icons-material/Check';

import styles from "./CompleteOrder.module.scss";

import {MyButton} from "@/components/MyButton";
import {useRouter} from "next/navigation";
import {wipeCart} from "@/lib/features/cartSlice";
import {useDispatch} from "react-redux";

export default function CompleteOrder() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(wipeCart());
        router.push("/");
    };

    return (
        <div className={styles.wrapper}>
            <CheckIcon/>

            <div>Thanks for order!</div>

            <div>We will contact to you for details.</div>

            <MyButton onClick={() => handleClick()}>To Main</MyButton>
        </div>
    );
}
