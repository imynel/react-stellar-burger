import React, { useState, useEffect} from 'react';
import style from './Ingredient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Ingredient = ({ item, handleOpen }) => {

  const [meter, setMeter] = useState(0);
  const {bun, currentIngredients} = useSelector(store => store.ingredient)
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: (monitor) => ({
      didDrop: monitor.didDrop(),
      item: monitor.getItem(),
    }),
  });

  useEffect(() => {
    let counter = 0
    if (bun && item.type === "bun" && item._id === bun._id) {
        counter = 1;
    } else {
        counter = currentIngredients.filter((element) => element._id === item._id).length;
    }
    setMeter(counter)
  }, [ bun, currentIngredients])

  return (
    <div
      className={style.card}
      onClick={() => {
        handleOpen(item);
      }}
      ref={dragRef}
      >
      {meter > 0 &&  <Counter count={meter} />}
      <img src={item.image} alt={item.name} className={style.image} />
      <p className="mt-1 mb-1 text text text_type_digits-default">
        {item.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${style.name} text text_type_main-small`}>{item.name}</p>
    </div>
  );
};

Ingredient.propTypes = {
  handleOpen: PropTypes.func,
  item: PropTypes.object,
};

export default Ingredient;
