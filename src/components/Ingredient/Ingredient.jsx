import React from 'react';
import style from './Ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

const Ingredient = ({ item, handleOpen }) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: (monitor) => ({
      didDrop: monitor.didDrop(),
      item: monitor.getItem(),
    }),
  });

  return (
    <div
      className={style.card}
      onClick={() => {
        // handleOpen(element);
      }}
      ref={dragRef}>
      <img src={item.image} alt={item.name} className={style.image} />
      <p className="mt-1 mb-1 text text text_type_digits-default">
        {item.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${style.name} text text_type_main-small`}>{item.name}</p>
    </div>
  );
};

export default Ingredient;
