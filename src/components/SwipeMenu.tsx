"use client";

import React from "react";
import {SwipeableDrawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "@/types";
import {openSideBar} from "@/lib/features/appSlice";
import logoSvg from "../../public/logo.svg";
import Image from "next/image";
import Categories from "@/components/Categories";

import styles from "./SwipeMenu.module.scss";
import Link from "next/link";

export default function SwipeMenu() {
    const dispatch = useDispatch();
    const appState = useSelector((state: { app: AppType }) => state.app);

    const toggleDrawer =
    (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            dispatch(openSideBar(open));
        };

    return (
        <SwipeableDrawer
            anchor={"left"}
            open={appState.isSideBarOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <div className={styles.wrapper}>
                <Link href={"/"}>
                    <Image
                        priority
                        src={logoSvg}
                        alt="logo"
                        className={styles.logo}
                    />
                </Link>

                <Categories/>
            </div>
        </SwipeableDrawer>
    );
}
