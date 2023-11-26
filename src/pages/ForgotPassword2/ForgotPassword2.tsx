import React, { useState } from 'react';
import styles from './ForgotPassword2.module.css';
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { postPasswordReset } from '../../services/actions/password-reset';
import { useDispatch } from '../../services/hooks/hooks';

export const ForgotPassword2 = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postPasswordReset(password, code));
    navigate('/');
  };

  return (
    <form className={styles.mainContainer} onSubmit={(e) => onSubmit(e)}>
      <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
      {/* ПОМЕНЯТЬ ICON */}
      <PasswordInput
        name={'password'}
        placeholder="Введите новый пароль"
        icon="ShowIcon"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Введите код из письма"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        extraClass="mt-4 mb-4"
      />
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
          disabled={password && code ? false : true}>
          Сохранить
        </Button>
      </div>
      <div className={styles.container}>
        <p className={`${styles.subtitle} mb-4`}>Вспомнили пароль?</p>
        <Link to="/login">
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
};
