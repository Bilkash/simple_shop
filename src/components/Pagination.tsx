import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductSliceType} from "@/types";
import {decrementPage, incrementPage, setEndIndex, setStartIndex} from "@/lib/features/productSlice";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import styles from "./Pagination.module.scss";

export default function Pagination() {
    const dispatch = useDispatch();
    const {products, page, pageSize} = useSelector((state: {products: ProductSliceType}) => state.products);
    const totalPages = Math.ceil(products.length / pageSize);

    const setIndexInStore = () => {
        dispatch(setStartIndex());
        dispatch(setEndIndex());
    };

    const nextPage = () => {
        if (page !== totalPages) {
            dispatch(incrementPage());
            setIndexInStore();
        }
    };

    const prevPage = () => {
        if (page !== 1) {
            dispatch(decrementPage());
            setIndexInStore();
        }
    };

    if (products.length > pageSize) {
        return (
            <div className={styles.wrapper}>
                <div onClick={() => prevPage()} className={styles.arrows}>
                    <NavigateBeforeIcon/>
                </div>

                <div>{page}</div>

                <div onClick={() => nextPage()} className={styles.arrows}>
                    <NavigateNextIcon/>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
