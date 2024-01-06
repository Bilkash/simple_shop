import React from "react";
import Logo from "@/components/Logo";
import Categories from "@/components/Categories";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>

            <Categories/>
        </div>
    );
}
