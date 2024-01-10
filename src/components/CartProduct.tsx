import React from "react";
import Image from "next/image";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useDispatch} from "react-redux";

import {decrementCount, incrementCount, removeProduct} from "@/lib/features/cartSlice";

import {ProductInCart} from "@/types";

import styles from "./CartProduct.module.scss";

interface CartProductProps {
    product: ProductInCart,
    order?: boolean
}

export default function CartProduct({product, order}: CartProductProps) {
    const {item: {id, title, price, image}, count} = product;
    const dispatch = useDispatch();

    const decrementCartProduct = () => {
        if (count === 1) {
            dispatch(removeProduct(id));
        } else {
            dispatch(decrementCount(id));
        }
    };

    const renderButtons = () => {
        if (order) {
            return null;
        } else {
            return (
                <>
                    <div className={styles.count}>
                        <div
                            className={styles.countButton}
                            onClick={() => decrementCartProduct()}
                        >
                            -
                        </div>

                        <div>{count}</div>

                        <div
                            className={styles.countButton}
                            onClick={() => dispatch(incrementCount(id))}
                        >
                            +
                        </div>
                    </div>

                    <DeleteForeverIcon
                        className={styles.deleteIcon}
                        onClick={() => dispatch(removeProduct(id))}
                    />
                </>
            );
        }
    };

    const renderOrderCount = () => {
        if (order) {
            return (
                <div className={styles.orderCount}>
                    {count} pc.
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className={!order ? styles.wrapper : styles.orderWrapper}>
            <Image
                src={image}
                alt={title}
                className={styles.image}
                width={100}
                height={100}
            />

            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.price}>
                ${price}
            </div>

            {renderOrderCount()}

            {renderButtons()}
        </div>
    );
}
