import React from "react";
import {Box} from "@mui/system";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

import styles from "./SearchField.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {ProductSliceType} from "@/types";
import {setSearchStr} from "@/lib/features/productSlice";
import {usePathname} from "next/navigation";

export default function SearchField() {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const {searchStr} = useSelector(
        (state: {products: ProductSliceType}) => state.products
    );

    if (pathname === "/") {
        return (
            <Box className={styles.searchWrapper}>
                <TextField
                    label="Search"
                    id="outlined-size-small"
                    fullWidth
                    size="small"
                    value={searchStr}
                    onChange={(event) => dispatch(setSearchStr(event.target.value))}
                    InputProps={{
                        endAdornment: searchStr
                            ? <InputAdornment
                                position="end"
                                onClick={() => dispatch(setSearchStr(""))}
                            >
                                <CloseIcon/>
                            </InputAdornment>
                            : <InputAdornment position="end">
                                <SearchIcon/>
                            </InputAdornment>,
                    }}
                />
            </Box>
        );
    } else {
        return (
            <Box className={styles.searchWrapper}/>
        );
    }
}
