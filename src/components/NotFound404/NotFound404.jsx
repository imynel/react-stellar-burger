import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound404.module.css';
import pageNotFound from "../../images/404.png";

export const NotFound404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="page not found" src={pageNotFound} />
        <br />
        <Link to='/' className={styles.link}>Перейти в список чатов</Link>
      </div>
    </div>
  );
}; 