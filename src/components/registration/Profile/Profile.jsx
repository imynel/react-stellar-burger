import React, { useState } from 'react'
import styles from './Profile.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'


export const Profile = () => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <p className={`${styles.text} ${styles.active_text} text text_type_main-medium`}>Профиль</p>
                <p className={`${styles.text} text text_type_main-medium`}>История Заказов</p>
                <p className={`${styles.text} text text_type_main-medium mb-20`}>Выход</p>
                <p className={`${styles.text} text text_type_main-small`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <form className={styles.form}>
                <Input type='text' placeholder='Имя' icon='CurrencyIcon' value={name} onChange={(e) => {setName(e.target.value)}} />
                <Input type='text' placeholder='Логин' icon='CurrencyIcon' value={login} onChange={(e) => {setLogin(e.target.value)}} />
                <Input type='password' placeholder='Пароль' icon='CurrencyIcon' value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </form>
        </section>
    )
}