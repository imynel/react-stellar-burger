import React from "react";
import styles from './OrderTape.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export const OrderTape = ({order}) => {
    const ingredients = useSelector(store => store.ingredientsReducer.allIngredients)

    const currentIngredients = []
    order.ingredients.forEach(elm => {
        currentIngredients.push(ingredients.find(element => element._id === elm))
    })

    const price = currentIngredients.reduce((a, b) => a + b.price, 0)


    return (
        <Link to={`/feed/${order.number}`} className={styles.link}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <p className={`${styles.orderNumber} text text_type_digits-default`}>#{order.number}</p>
                    <p className={`${styles.time} text text_type_main-default text_color_inactive`}>{order.createAt}</p>
                </div>
                <p className={`${styles.nameBurger} text text_type_main-medium`}>
                    {order.name}
                </p>
                <div className={styles.ingredientsContainer}>
                    {currentIngredients.map((elm, index) => {
                        return <img className={styles.img} style={{zIndex: currentIngredients.length - index}} src={elm.image} alt={elm.name} />
                    })}
                    <p className={`${styles.price} text text_type_digits-default`}>{price} <CurrencyIcon /></p>
                </div>
            </div>
        </Link>
    )
}