import React, { useState } from 'react';
import styles from './Registration.module.css';
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { postRegisterProfile } from '../../services/actions/register';
import { useDispatch } from '../../services/hooks/hooks';

export const Registration = (): JSX.Element => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(postRegisterProfile(email, password, name));
    navigate('/profile');
  };

  return (
    <form className={styles.mainContainer} onSubmit={(e) => onSubmit(e)}>
      <h1 className={`${styles.title} mb-4`}>Регистрация</h1>
      <Input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <EmailInput
        placeholder="E-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        extraClass="mt-4 mb-4"
      />
      <PasswordInput
        placeholder="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        extraClass="mb-4"
      />
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
          disabled={name && email && password ? false : true}>
          Зарегистрироваться
        </Button>
      </div>
      <div className={styles.container}>
        <p className={`${styles.subtitle} mb-4`}>Уже зарегистрированы?</p>
        <Link to="/login">
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
};
