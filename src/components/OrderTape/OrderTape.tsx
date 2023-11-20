import React from 'react';
import styles from './OrderTape.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks/hooks';
import { TIngredient, TOrder } from '../../services/types/types';

export const OrderTape = ({ order }: TOrder): JSX.Element => {

  const ingredients = useSelector((store) => store.ingredientsReducer.allIngredients);

  const currentIngredients: TIngredient[] = [];
  order.ingredients.forEach((elm: TIngredient) => {
    const foundIngredient = ingredients.find((element: TIngredient) => element._id === elm._id);
    if (foundIngredient) {
      currentIngredients.push(foundIngredient);
    }
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
