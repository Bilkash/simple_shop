"use client"

import React from "react";

import styles from "./Layout.module.scss"
import Header from "@/components/Header";
import Image from "next/image";
import logoSvg from "../../public/logo.svg";
import smallLogoSvg from "../../public/smallLogo.svg";
import SwipeMenu from "@/components/SwipeMenu";
import { StyledEngineProvider } from '@mui/material/styles';
import {AppType} from "@/types";
import {useSelector} from "react-redux";

interface  LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps): React.JSX.Element {
  const appState = useSelector((state: { app: AppType }) => state.app);

  console.log(appState)

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Image
          priority
          src={logoSvg}
          alt="logo"
          className={styles.logo}
        />

        <Image
          priority
          src={smallLogoSvg}
          alt="smallLogo"
          className={styles.smallLogo}
        />
      </div>

      <div className={styles.inner}>
        <Header/>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
