import React from "react";

import styles from "./ConfirmOrder.module.scss";
import UserForm from "@/components/UserForm";

export default function ConfirmOrder({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.wrapper}>
            {children}

            <UserForm/>
        </div>
    );
}
