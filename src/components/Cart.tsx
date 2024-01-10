import React from "react";
import Image from "next/image";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";

import cartSvg from "../../public/cart.svg";

import {CartSliceType} from "@/types";

import styles from "./Cart.module.scss";

export default function Cart() {
    const {items} = useSelector((state: {cart: CartSliceType}) => state.cart);
    const router = useRouter();

    const handleClick = () => {
        if (items.length) {
            router.push("/cart");
        }
    };

    const renderCount = () => {
        const total = items.reduce((total, item) => total + item.count, 0);

        if (total) {
            return (
                <div className={styles.count}>
                    {total}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div onClick={() => handleClick()} className={styles.wrapper}>
            <Image
                priority
                src={cartSvg}
                alt="cart"
                width={50}
                height={50}
                className={styles.cart}
            />

            {renderCount()}
        </div>
    );
}
