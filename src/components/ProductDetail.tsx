import React from "react";
import {Product} from "@/types";
import Image from "next/image";
import BuyButton from "@/components/BuyButton";

import styles from "./ProductDetail.module.scss";

type ProductDetailProps = {
    productData: Product
}

export default function ProductDetail({productData}: ProductDetailProps) {
    return  (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <Image
                    src={productData.image}
                    alt={productData.title}
                    width={100}
                    height={100}
                    className={styles.image}
                />

                <div className={styles.category}>Category: {productData.category}</div>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.title}>{productData.title}</div>

                <div className={styles.description}>{productData.description}</div>

                <div className={styles.rating}>Rating {productData.rating.rate} from {productData.rating.count} users.</div>

                <div className={styles.priceSection}>
                    <div>${productData.price}</div>

                    <BuyButton id={productData.id}/>
                </div>
            </div>
        </div>
    );
}
