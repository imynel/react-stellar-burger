import React, { useState } from 'react'
import styles from './Registration.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

export const Registration  = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
      <form className={styles.mainContainer}>
        <h1 className={`${styles.title} mb-4`}>Регистрация</h1>
        <Input 
          type='text' 
          placeholder='Имя'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <Input 
          type='email' 
          placeholder='E-mail' 
          value={email} 
          onChange={(e) => {setEmail(e.target.value)}} 
          extraClass='mt-4 mb-4'
        />
        <Input 
          type='password' 
          placeholder='Пароль' 
          value={password} 
          onChange={(e) => {setPassword(e.target.value)}}
          extraClass='mb-4'
        />
        <div className={styles.button}>
          <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'>Зарегистрироваться</Button>
        </div>
        <div className={styles.container}>
          <p className={`${styles.subtitle} mb-4`}>Уже зарегистрированы?</p>
          <Link to='/login'>
            <Button htmlType="button" type="secondary" size="medium">
              Войти
            </Button>
          </Link>
        </div>
        
      </form>
    )
}