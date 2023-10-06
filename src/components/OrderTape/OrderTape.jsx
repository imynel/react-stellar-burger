import React from "react";
import styles from './OrderTape.module.css'
import { data } from "../../utils/data";


export const OrderTape = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <p className={`${styles.orderNumber} text text_type_digits-default`}>#00000</p>
                <p className={`${styles.time} text text_type_main-default text_color_inactive`}>сегодня, 16:20 i-GMT+3</p>
            </div>
            <p className={`${styles.nameBurger} text text_type_main-medium`}>
                burger name
            </p>
            <div className={styles.ingredientsContainer}>
                <img className={styles.img} src={data[7].image} alt="" />
                <p className={`${styles.price} text text_type_digits-default`}>500</p>
            </div>
        </div>
    )
}