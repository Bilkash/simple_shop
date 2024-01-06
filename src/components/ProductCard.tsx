import React from "react";
import {Product} from "@/types";

import styles from "./ProductCard.module.scss";
import Image from "next/image";

export default function ProductCard({price, title, image, category}: Product) {
    return (
        <div className={styles.wrapper}>
            <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                className={styles.image}
            />

            <div className={styles.title}>{title}</div>

            <div className={styles.category}>Category: {category}</div>

            <div className={styles.footer}>
                <div className={styles.button}>Buy</div>

                <div className={styles.price}>${price}</div>
            </div>
        </div>
    );
}
