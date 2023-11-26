import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/hooks/hooks';
import { login } from '../../services/actions/register';

export const SignIn = (): JSX.Element => {

  const dispath = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(login(email, password));
  };

  return (
    <form className={styles.mainContainer} onSubmit={(e) => onSubmit(e)}>
      <h1 className={`${styles.title} mb-4`}>Вход</h1>
      <EmailInput
        placeholder="E-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <PasswordInput
        placeholder="Пароль"
        extraClass="mt-4 mb-4"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
          disabled={email && password ? false : true}>
          Войти
        </Button>
      </div>
      <div className={styles.container}>
        <p className={`${styles.subtitle} mb-4`}>Вы — новый пользователь?</p>
        <Link to="/registration">
          <Button htmlType="button" type="secondary" size="medium">
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={styles.container}>
        <p className={styles.subtitle}>Забыли пароль?</p>
        <Link to="/forgot-password">
          <Button htmlType="button" type="secondary" size="medium">
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </form>
  );
};
