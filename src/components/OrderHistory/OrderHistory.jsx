import React from 'react'
import styles from './OrderHistory.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../services/actions/register'
import { OrderTape } from '../OrderTape/OrderTape'

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const OrderHistory = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout());
      };

    return(
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/profile" className={`${styles.active} ${styles.link} `}>
                    <p className={`${styles.text} text text_type_main-medium`}>Профиль</p>
                </Link>
                <Link to="/profile/orders" className={styles.link}>
                    <p className={`${styles.text} text text_type_main-medium`}>История Заказов</p>
                </Link>
                <Link to="/" className={styles.link}>
                    <p className={`${styles.text} text text_type_main-medium mb-20`} onClick={onLogout}>
                        Выход
                    </p>
                </Link>
                <p className={`${styles.text} text text_type_main-small`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <div className={`${styles.history} pr-2 custom-scroll`}>
                {arr.map(() => {
                    return <OrderTape />
                })}
            </div>
        </section>
        )
}