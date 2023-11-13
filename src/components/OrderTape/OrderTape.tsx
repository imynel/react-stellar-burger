import React from 'react';
import styles from './OrderTape.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderTape = ({ order }: any): JSX.Element => {

  type element = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  }

  const ingredients = useSelector((store) => store.ingredientsReducer.allIngredients);

  const currentIngredients: element[] = [];
  order.ingredients.forEach((elm: element) => {
    currentIngredients.push(ingredients.find((element: element) => element._id === elm));
  });

  const price = currentIngredients.reduce((a, b) => a + b.price, 0);

  return (
    
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{order.number}</p>
          <p className={`${styles.time} text text_type_main-default text_color_inactive`}>
            {order.createAt}
          </p>
        </div>
        <p className={`${styles.nameBurger} text text_type_main-medium`}>{order.name}</p>
        <div className={styles.ingredientsContainer}>
          {currentIngredients.map((elm, index) => {
            return (
              <img
                className={styles.img}
                style={{ zIndex: currentIngredients.length - index }}
                src={elm.image}
                alt={elm.name}
              />
            );
          })}
          <p className={`${styles.price} text text_type_digits-default`}>
            {price} <CurrencyIcon type='primary'/>
          </p>
        </div>
      </div>
  );
};
