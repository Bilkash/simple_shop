"use client";

import React from "react";
import {MyButton} from "@/components/MyButton";
import {useRouter} from "next/navigation";

import styles from "./Error.module.scss";

export default function Error() {
    const routes = useRouter();
    return (
        <div className={styles.wrapper}>
            <div>
                Something went wrong :(
            </div>

            <MyButton onClick={() => routes.push("/")}>To main</MyButton>
        </div>
    );
}
