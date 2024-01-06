"use client"

import React from "react";
import Image from "next/image";

import cartSvg from "../../public/cart.svg";

import styles from "./Header.module.scss";
import {InputAdornment, TextField} from "@mui/material";
import {Box} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "@/types";
import {openSideBar} from "@/lib/features/appSlice";

export default function Header(): React.JSX.Element {
  const dispatch = useDispatch();
  const appState = useSelector((state: { app: AppType }) => state.app);

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuButton} onClick={() => dispatch(openSideBar(true))}>
        <MenuIcon/>
      </div>

      <Box className={styles.searchWrapper}>
        <TextField
          label="Search"
          id="outlined-size-small"
          fullWidth
          defaultValue=""
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>,
          }}
        />
      </Box>

      <Image
        priority
        src={cartSvg}
        alt="cart"
        className={styles.cart}
      />
    </div>
  )
}
