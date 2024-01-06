import React from "react";
import Image from "next/image";
import logoSvg from "../../public/logo.svg";

import styles from "./Logo.module.scss";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                priority
                src={logoSvg}
                alt="logo"
                className={styles.logo}
            />
        </Link>
    );
}
