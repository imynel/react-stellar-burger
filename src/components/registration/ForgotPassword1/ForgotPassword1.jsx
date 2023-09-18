<<<<<<< HEAD
import React, { useState } from 'react'
import styles from './ForgotPassword1.module.css'

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'


export const ForgotPassword1 = () => {
    const [email, setEmail] = useState('')
    return (
        <form className={styles.mainContainer}>
            <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
            <Input 
                type='email' 
                placeholder='Укажите e-mail'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                extraClass='mb-4'
            />
            <div className={styles.button}>
                <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'>Восстановить</Button>
            </div>
            <div className={styles.container}>
                <p className={`${styles.subtitle} mb-4`}>Вспомнили пароль?</p>
                <Button htmlType="button" type="secondary" size="medium">
                    Войти
                </Button>
            </div>
        </form>
    )
}
=======
import React, { useState } from 'react';
import styles from './ForgotPassword1.module.css';
import { InputComponent } from '../InputComponent/InputComponent';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { postEmail } from '../../../utils/api';

export const ForgotPassword1 = () => {
  const [email, setEmail] = useState('');

  const submitEmail = (event) => {
    event.preventDefault();
    postEmail(email);
  };

  return (
    <form className={styles.mainContainer}>
      <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
      <div className="mb-4">
        <InputComponent
          value={email}
          type="email"
          placeholder="Укажите e-mail"
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
          onClick={(event) => submitEmail(event)}>
          Восстановить
        </Button>
      </div>
      <div className={styles.container}>
        <p className={`${styles.subtitle} mb-4`}>Вспомнили пароль?</p>
        <Button htmlType="button" type="secondary" size="medium">
          Войти
        </Button>
      </div>
    </form>
  );
};
>>>>>>> 6fbcc458dcc26290beb65aee24e7bd3c7b77a11c
