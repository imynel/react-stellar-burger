import React, { useState } from 'react'
import styles from './Profile.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const Profile = () => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <p className={`${styles.text} text text_type_main-medium`}><Link to='/profile' activeClass={styles.active}>Профиль</Link></p>
                <Link to='/profile/orders' ><p className={`${styles.text} text text_type_main-medium`}>История Заказов</p></Link>
                <Link to='/' ><p className={`${styles.text} text text_type_main-medium mb-20`}>Выход</p></Link>
                <p className={`${styles.text} text text_type_main-small`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <form className={styles.form}>
                <Input 
                    type='text' 
                    placeholder='Имя' 
                    icon='CurrencyIcon' 
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}} 
                />
                <Input 
                    type='text' 
                    placeholder='Логин' 
                    icon='CurrencyIcon' 
                    value={login}
                    onChange={(e) => {setLogin(e.target.value)}} 
                />
                <Input 
                    type='password' 
                    placeholder='Пароль' 
                    icon='CurrencyIcon' 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}} 
                />
            </form>
        </section>
    )
}