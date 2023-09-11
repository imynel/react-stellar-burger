import React from 'react'
import styles from './SignIn.module.css'
import { InputComponent } from '../InputComponent/InputComponent'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

export const SignIn = () => {

    return (
        <form className={styles.mainContainer}>
          <h1 className={`${styles.title} mb-4`}>Вход</h1>
          <InputComponent type='email' placeholder='E-mail'/>
          <div className='mt-4 mb-4'>
            <InputComponent type='password' placeholder='Пароль'/>
          </div>
          <div className={styles.button}>
            <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'>Войти</Button>
          </div>
          <div className={styles.container}>
            <p className={`${styles.subtitle} mb-4`}>Вы — новый пользователь?</p>
            <Button htmlType="button" type="secondary" size="medium">
              Зарегистрироваться
            </Button>
          </div>
          <div className={styles.container}>
            <p className={styles.subtitle}>Забыли пароль?</p>
            <Button htmlType="button" type="secondary" size="medium">
              Восстановить пароль
            </Button>
          </div>
        </form>
    )
}