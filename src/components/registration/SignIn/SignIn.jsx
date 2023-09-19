import React, { useState } from 'react'
import styles from './SignIn.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    return (
        <form className={styles.mainContainer}>
          <h1 className={`${styles.title} mb-4`}>Вход</h1>
          <Input 
            type='email' 
            placeholder='E-mail'
            value={email} 
            onChange={(e) => {setEmail(e.target.value)}}
            />
          <Input 
            type='password' 
            placeholder='Пароль'
            extraClass='mt-4 mb-4'  
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <div className={styles.button}>
            <Button 
              htmlType="submit" 
              type="primary" 
              size="medium" 
              extraClass='mb-20'
              disabled={email && password ? false : true}
            >Войти</Button>
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