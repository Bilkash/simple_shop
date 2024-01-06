"use client"

import React, {useState} from "react";
import {SwipeableDrawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "@/types";
import {openSideBar} from "@/lib/features/appSlice";

interface SwipeMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SwipeMenu() {
  const dispatch = useDispatch();
  const appState = useSelector((state: { app: AppType }) => state.app);

  console.log(appState)

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

        dispatch(openSideBar(open))
      };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={appState.isSideBarOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      content
    </SwipeableDrawer>
  )
}
