"use client";

import React, {useEffect} from "react";

import styles from "./Layout.module.scss";
import Header from "@/components/Header";
import {AppType} from "@/types";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "@/requests/getAllCategories";
import {setCategories} from "@/lib/features/productSlice";
import Sidebar from "@/components/Sidebar";

interface  LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps): React.JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllCategories().then(data => dispatch(setCategories(data)));
    }, []);

    return (
        <div className={styles.wrapper}>
            <Sidebar/>

            <div className={styles.inner}>
                <Header/>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}
