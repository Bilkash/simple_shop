import React from "react";

import styles from "./MyButton.module.scss";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export const MyButton:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <button className={styles.button} {...rest}>{children}</button>
    );
};
