import React from 'react'
import styles from './ForgotPassword2.module.css'
import { InputComponent } from '../InputComponent/InputComponent'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

export const ForgotPassword2 = () => {

    return (
      <form className={styles.mainContainer}>
        <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
        {/* ПОМЕНЯТЬ ICON */}
        <InputComponent type='email' placeholder='Введите новый пароль'  icon='DragIcon' /> 
        <div className='mb-4 mt-4'>
            <InputComponent type='email' placeholder='Введите код из письма'/>
        </div>
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