import React, { useState} from "react";
import styles from './FeedInfo.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { data } from "../../utils/data";


export const FeedInfo = () => {
    const [order, setOrder] = useState('')
    const numberOrder = useParams()
    const orderList = useSelector(store => store.feedReducer.message)

    setOrder(orderList.find(elm => elm.number === numberOrder.id))
    console.log(numberOrder, orderList, order)


    
    return (
        <>
            {!orderList ? null :
                <div className={styles.mainContainer}>
                    <p className={`${styles.orderNumber} mb-10 text text_type_digits-medium`}>#{}</p>
                    <h3 className={`${styles.nameBurger} mb-3 text text_type_main-medium`}>Name Burger</h3>
                    <p className={`${styles.complited} mb-15 text text_type_main-default`}>Выполнен</p>
                    <p className={`${styles.compound} mb-4 text text_type_main-medium`}>Состав:</p>
                    <div className={`${styles.container} custom-scroll pr-6`}>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                        <div className={styles.ingredient}>
                            <img src={data[0].image} alt=""  className={styles.image} />
                            <p className={`${styles.ingregientName} text text_type_main-default`}>name ingredient</p>
                            <p className={`${styles.price} text text_type_digits-default`}>1 x 20 <CurrencyIcon type="primary" /> </p>    
                        </div>
                    </div>
                    <div className={styles.priceContainer}>
                        <p className={`${styles.time} mt-10 text text_type_main-default text_color_inactive`}>Вчера, 13:50 i-GMT+3</p>
                        <p className={`${styles.price} text_type_digits-default`}>500 <CurrencyIcon type="primary" /> </p>
                    </div>
                    
                </div>
            }
        </>
    )
}   