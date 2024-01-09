"use client";

import React from "react";

import styles from "./UserForm.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {CartSliceType, UserSliceType} from "@/types";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {setUserContactNumber, setUserEmail, setUserName} from "@/lib/features/userSlice";
import {useRouter} from "next/navigation";
import {wipeCart} from "@/lib/features/cartSlice";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const OrderUserValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    contactNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
});

export default function UserForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {name, email, contactNumber} = useSelector((state: {user: UserSliceType}) => state.user);
    const {items} = useSelector((state: {cart: CartSliceType}) => state.cart);

    return (
        <Formik
            initialValues={{
                name,
                email,
                contactNumber
            }}
            validationSchema={OrderUserValidationSchema}
            onSubmit={values => {
                router.push("/orderComplete");

                dispatch(setUserName(values.name));
                dispatch(setUserEmail(values.email));
                dispatch(setUserContactNumber(values.contactNumber));

                console.log("\n");
                console.log("Order Data");
                console.log({user: values, cart: items});
                console.log("\n");
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div  className={styles.wrapper}>
                        <Field
                            className={styles.input}
                            name={"name"}
                            placeholder={"Name"}
                        />

                        <div className={styles.error}>
                            {errors.name && touched.name
                                ? errors.name
                                : null}
                        </div>

                        <Field
                            className={styles.input}
                            name={"email"}
                            placeholder={"Email"}
                        />

                        <div className={styles.error}>
                            {errors.email && touched.email
                                ? errors.email
                                : null}
                        </div>

                        <Field
                            className={styles.input}
                            name={"contactNumber"}
                            placeholder={"Phone number"}
                        />

                        <div className={styles.error}>
                            {errors.contactNumber && touched.contactNumber
                                ? errors.contactNumber
                                : null}
                        </div>

                        <button
                            className={styles.button}
                            type="submit"
                        >
                            Confirm
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
