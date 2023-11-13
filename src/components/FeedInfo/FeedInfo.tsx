import React, { useState } from 'react';
import styles from './FeedInfo.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from '../../utils/data';
import { element } from 'prop-types';

export const FeedInfo = (): JSX.Element => {
  const location = useLocation();
  const { numberOrder } = useParams();
  const orderList = useSelector((store) => store.feedReducer.message);
  const order = orderList.find((elm) => elm.number === parseInt(numberOrder));
  const allIngredients = useSelector((store) => store.ingredientsReducer.allIngredients);
  const currentIngredients = [];

  order &&
    order.ingredients.forEach((elm) => {
      currentIngredients.push(allIngredients.find((element) => element._id === elm));
    });

  const price = currentIngredients.reduce((a, b) => a + b.price, 0);

  // Функция, которая проверяет уникальность объектов
  function isObjectUnique(value, index, self) {
    // Преобразуем объект в строку и сравниваем
    const objAsString = JSON.stringify(value);
    return self.findIndex((obj) => JSON.stringify(obj) === objAsString) === index;
  }

  const uniqueObjects = currentIngredients.filter(isObjectUnique);

  return (
    <>
      {!orderList ? null : (
        <div
          className={`${styles.mainContainer} ${
            location.pathname === `/feed/${numberOrder}` ||
            location.pathname === `/profile/orders/${numberOrder}`
              ? styles.popap
              : null
          }`}>
          <p className={`${styles.orderNumber} mb-10 text text_type_digits-medium`}>
            #{order.number}
          </p>
          <h3 className={`${styles.nameBurger} mb-3 text text_type_main-medium`}>{order.name}</h3>
          <p className={`${styles.complited} mb-15 text text_type_main-default`}>
            {order.status === 'done' ? 'Выполнен' : 'Готовится'}
          </p>
          <p className={`${styles.compound} mb-4 text text_type_main-medium`}>Состав:</p>
          <div className={`${styles.container} custom-scroll pr-6`}>
            {uniqueObjects.map((element) => {
              let count = 0;
              currentIngredients.forEach((elm) => {
                if (element._id === elm._id) {
                  count++;
                }
              });
              return (
                <div className={styles.ingredient}>
                  <img src={element.image} alt={element.name} className={styles.image} />
                  <p className={`${styles.ingregientName} text text_type_main-default`}>
                    {element.name}
                  </p>
                  <p className={`${styles.price} text text_type_digits-default`}>
                    {count} x {element.price} <CurrencyIcon type="primary" />
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.priceContainer}>
            <p className={`${styles.time} mt-10 text text_type_main-default text_color_inactive`}>
              Вчера, 13:50 i-GMT+3
            </p>
            <p className={`${styles.price} text_type_digits-default`}>
              {price} <CurrencyIcon type="primary" />{' '}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
