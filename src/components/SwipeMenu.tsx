"use client"

import React, {useState} from "react";
import {SwipeableDrawer} from "@mui/material";

interface SwipeMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SwipeMenu({open, setOpen}: SwipeMenuProps) {
  // const [open, setOpen] = useState<boolean>(false);

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

        setOpen(open);
      };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      content
    </SwipeableDrawer>
  )
}
