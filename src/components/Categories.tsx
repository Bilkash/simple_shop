import React from "react";
import {useSelector} from "react-redux";

import Category from "@/components/Category";

import {ProductSliceType} from "@/types";

import styles from "./Categories.module.scss";

export default function Categories() {
    const {categories} = useSelector((state: {products: ProductSliceType}) => state.products);

    const renderCategories = () => {
        return categories.map((category) => (<Category name={category} key={category}/>));
    };

    return (
        <div className={styles.wrapper}>
            {renderCategories()}
        </div>
    );
}
