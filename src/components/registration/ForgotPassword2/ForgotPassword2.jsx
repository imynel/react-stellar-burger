import React, { useState } from 'react'
import styles from './ForgotPassword2.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

export const ForgotPassword2 = () => {
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    return (
      <form className={styles.mainContainer}>
        <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
        {/* ПОМЕНЯТЬ ICON */}
        <Input 
            type='password' 
            placeholder='Введите новый пароль'  
            icon='DragIcon' 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
        /> 
        <Input 
            type='text' 
            placeholder='Введите код из письма' 
            value={code} 
            onChange={(e) => {setCode(e.target.value)}} 
            extraClass='mt-4 mb-4'
        />
        <div className={styles.button}>
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'>Сохранить</Button>
        </div>
        <div className={styles.container}>
            <p className={`${styles.subtitle} mb-4`}>Вспомнили пароль?</p>
            <Link to='/login'>
                <Button htmlType="button" type="secondary" size="medium">
                    Войти
                </Button>
            </Link>
        </div>
      </form>
    )
}