"use client";

import React, {useEffect, useState} from "react";
import Layout from "@/components/Layout";
import {usePathname} from "next/navigation";
import {Product} from "@/types";
import getProduct from "@/requests/getProduct";

import styles from "./page.module.scss";
import Image from "next/image";

export default function ProductPage() {
    const [productData, setProductData] = useState<Product | null>(null);
    const pathname = usePathname();
    const productId = pathname.split("/")[2];

    useEffect(() => {
        getProduct(productId).then(data => setProductData(data));
    }, []);

    console.log(productData);

    return (
        <Layout>
            {/*<div className={styles.wrapper}>*/}
            {/*    <div>*/}
            {/*        <Image*/}
            {/*            src={productData.image}*/}
            {/*            alt={productData.title}*/}
            {/*            width={100}*/}
            {/*            height={100}*/}
            {/*            className={styles.image}*/}
            {/*        />*/}

            {/*        <div>Category: {productData.category}</div>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <div>{productData.title}</div>*/}
            {/*        <div>{productData.description}</div>*/}
            {/*        <div>Rating {productData.rating.rate} from {productData.rating.count} users.</div>*/}
            {/*        <div>*/}
            {/*            <div>{productData.price}</div>*/}
            {/*            <div>Buy</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Layout>
    );

    // if (!productData) {
    //     return (
    //         <Layout>
    //             <div className={styles.wrapper}>
    //                 <div>
    //                     <Image
    //                         src={productData.image}
    //                         alt={productData.title}
    //                         width={100}
    //                         height={100}
    //                         className={styles.image}
    //                     />
    //
    //                     <div>Category: {productData.category}</div>
    //                 </div>
    //
    //                 <div>
    //                     <div>{productData.title}</div>
    //                     <div>{productData.description}</div>
    //                     <div>Rating {productData.rating.rate} from {productData.rating.count} users.</div>
    //                     <div>
    //                         <div>{productData.price}</div>
    //                         <div>Buy</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Layout>
    //     );
    // } else {
    //     return null;
    // }
}
