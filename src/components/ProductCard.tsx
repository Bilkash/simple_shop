import React from "react";
import {Product} from "@/types";

import styles from "./ProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";

export default function ProductCard({id, price, title, image, category}: Product) {
    return (
        <div className={styles.wrapper}>
            <Link href={`/product/${id}`}>
                <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    className={styles.image}
                />
            </Link>

            <Link href={`/product/${id}`} className={styles.link}>
                <div className={styles.title}>{title}</div>
            </Link>

            <div className={styles.category}>Category: {category}</div>

            <div className={styles.footer}>
                <BuyButton/>

                <div className={styles.price}>${price}</div>
            </div>
        </div>
    );
}
