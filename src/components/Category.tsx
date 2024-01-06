import React from "react";
import Link from 'next/link';

import styles from "./Category.module.scss";

type CategoryProps = {
    name: string
}


export default function Category({name}: CategoryProps) {
    return (
        <Link className={styles.link} href={`/category/${name}`}>
            <div className={styles.category}>
                {name}
            </div>
        </Link>
    );
}
