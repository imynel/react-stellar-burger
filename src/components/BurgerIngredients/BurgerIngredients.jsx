import React, { useEffect, useState } from 'react';
import styleBurgerIngredients from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIngredients } from '../../services/actions/ingredients';
import thunk from 'redux-thunk';
import Ingredient from '../Ingredient/Ingredient';

const BurgerIngredients = ({ handleOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients());
  }, []);

  const dataIngredients = useSelector((store) => store.ingredient.allIngredients);
  const ingredient = dataIngredients;

  const [current, setCurrent] = useState('one');

  return (
    <section className={styleBurgerIngredients.BurgerIngredients}>
      <h2 className={`${styleBurgerIngredients.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <div className={`${styleBurgerIngredients.tab} mb-10`}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styleBurgerIngredients.mainContainer} custom-scroll`}>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Булки</h3>
        <div className={styleBurgerIngredients.container}>
          {ingredient.map((element) => {
            if (element.type === 'bun') {
              return (
                <React.Fragment key={element._id}>
                  <Ingredient item={element}></Ingredient>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Соусы</h3>
        <div className={styleBurgerIngredients.container}>
          {ingredient.map((element) => {
            if (element.type === 'sauce') {
              return (
                <React.Fragment key={element._id}>
                  <Ingredient item={element}></Ingredient>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Начинки</h3>
        <div className={styleBurgerIngredients.container}>
          {ingredient.map((element) => {
            if (element.type === 'main') {
              return (
                <React.Fragment key={element._id}>
                  <Ingredient item={element} handleOpen={handleOpen}></Ingredient>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  handleOpen: PropTypes.func,
  dataIngredients: PropTypes.array,
};

export default BurgerIngredients;
