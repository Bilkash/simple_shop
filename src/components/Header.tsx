"use client"

import React from "react";
import Image from "next/image";

import cartSvg from "../../public/cart.svg";

import styles from "./Header.module.scss";
import {InputAdornment, TextField} from "@mui/material";
import {Box} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(): React.JSX.Element {

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuButton}>
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
