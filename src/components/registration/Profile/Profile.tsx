import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, refreshUser } from '../../../services/actions/register';

export const Profile = (): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const emailServer = useSelector(store => store.registerReducer.user.email)
  const nameServer = useSelector(store => store.registerReducer.user.name)

  useEffect(() => {
    setLogin(emailServer)
    setName(nameServer)
  }, [])

  const onLogout = () => {
    dispatch(logout());
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(refreshUser(login, name, password))
  }

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to="/profile" className={`${styles.active} ${styles.link} `}>
          <p className={`${styles.text} text text_type_main-medium`}>Профиль</p>
        </Link>
        <Link to="/profile/orders" className={styles.link}>
          <p className={`${styles.text} text text_type_main-medium`}>История Заказов</p>
        </Link>
        <Link to="/" className={styles.link}>
          <p className={`${styles.text} text text_type_main-medium mb-20`} onClick={onLogout}>
            Выход
          </p>
        </Link>
        <p className={`${styles.text} text text_type_main-small`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <div className={styles.containerInputs}>
          <Input
            type="text"
            placeholder="Имя"
            icon="CurrencyIcon"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Логин"
            icon="CurrencyIcon"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Пароль"
            icon="CurrencyIcon"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.containerSubmit}>
          <Button htmlType="button" type="secondary" size="medium">
            Отмена
          </Button>
          <Button htmlType='submit' type="primary" size="medium" disabled={name && login && password ? false : true}>Сохранить</Button>
        </div>
      </form>
    </section>
  );
};
