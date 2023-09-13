import React from 'react'
import styles from './SignIn.module.css'
import { InputComponent } from '../InputComponent/InputComponent'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
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
            <Link to='/registration'>
              <Button htmlType="button" type="secondary" size="medium">
                Зарегистрироваться
              </Button>
            </Link>
          </div>
          <div className={styles.container}>
            <p className={styles.subtitle}>Забыли пароль?</p>
            <Link to='/forgot-password'>
              <Button htmlType="button" type="secondary" size="medium">
                Восстановить пароль
              </Button>
            </Link>
          </div>
        </form>
    )
}