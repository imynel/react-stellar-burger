import React from 'react'
import styles from './Registration.module.css'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { InputComponent } from '../InputComponent/InputComponent'

export const Registration  = () => {

    return (
      <form className={styles.mainContainer}>
        <h1 className={`${styles.title} mb-4`}>Регистрация</h1>
        <InputComponent type='text' placeholder='Имя'/>
        <div className='mt-4 mb-4'>
          <InputComponent type='email' placeholder='E-mail'/>
        </div>
        <div className='mb-4'>
          <InputComponent type='password' placeholder='Пароль'/>
        </div>
        <div className={styles.button}>
          <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'>Зарегистрироваться</Button>
        </div>
        <div className={styles.container}>
          <p className={`${styles.subtitle} mb-4`}>Уже зарегистрированы?</p>
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </div>
        
      </form>
    )
}