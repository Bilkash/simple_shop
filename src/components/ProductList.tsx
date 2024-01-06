import React from "react";

import {Product} from "@/types";
import ProductCard from "@/components/ProductCard";

import styles from "./ProductList.module.scss";

interface ProductListProps {
    products: Product[]
}

export default function ProductList({products}: ProductListProps) {
    const renderProducts = () => {
        return products.map((product) => (<ProductCard key={product.id} {...product}/>));
    };

    return (
        <div>
            <div className={styles.productWrapper}>
                {renderProducts()}
            </div>
        </div>
    );
}
