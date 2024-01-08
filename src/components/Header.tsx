"use client";

import React from "react";
import Image from "next/image";

import cartSvg from "../../public/cart.svg";

import styles from "./Header.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {openSideBar} from "@/lib/features/appSlice";
import SearchField from "@/components/SearchField";
import Cart from "@/components/Cart";

export default function Header(): React.JSX.Element {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.menuButton} onClick={() => dispatch(openSideBar(true))}>
                <MenuIcon/>
            </div>

            <SearchField/>

            <Cart/>
        </div>
    );
}
