import React, { useEffect, useState } from 'react';
import styleBurgerIngredients from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIngredients } from '../../services/actions/ingredients';
import thunk from 'redux-thunk';

const BurgerIngredients = ({ handleOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIngredients())
  }, []);

  const dataIngredients = useSelector((store) => store.ingredient.allIngredients);
  const isLoading = useSelector(store => store.ingredient.isLoading)

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
          {isLoading ? null : dataIngredients.map((element) => {
            if (element.type === 'bun') {
              return (
                <React.Fragment key={element._id}>
                  <div
                    className={styleBurgerIngredients.card}
                    onClick={() => {
                      handleOpen(element);
                    }}>
                    <img
                      src={element.image}
                      alt={element.name}
                      className={styleBurgerIngredients.image}
                    />
                    <p className="mt-1 mb-1 text text text_type_digits-default">
                      {element.price}
                      <CurrencyIcon type="primary" />
                    </p>
                    <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>
                      {element.name}
                    </p>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Соусы</h3>
        <div className={styleBurgerIngredients.container}>
          {isLoading ? null : dataIngredients.map((element) => {
            if (element.type === 'sauce') {
              return (
                <React.Fragment key={element._id}>
                  <div
                    className={styleBurgerIngredients.card}
                    onClick={() => {
                      handleOpen(element);
                    }}>
                    <img
                      src={element.image}
                      alt={element.name}
                      className={styleBurgerIngredients.image}
                    />
                    <p className="mt-1 mb-1 text text_type_digits-default">
                      {element.price}
                      <CurrencyIcon type="primary" />
                    </p>
                    <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>
                      {element.name}
                    </p>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Начинки</h3>
        <div className={styleBurgerIngredients.container}>
          { isLoading ? null : dataIngredients.map((element) => {
            if (element.type === 'main') {
              return (
                <React.Fragment key={element._id}>
                  <div
                    className={styleBurgerIngredients.card}
                    onClick={() => {
                      handleOpen(element);
                    }}>
                    <img
                      src={element.image}
                      alt={element.name}
                      className={styleBurgerIngredients.image}
                    />
                    <p className="mt-1 mb-1 text text_type_digits-default">
                      {element.price}
                      <CurrencyIcon type="primary" />
                    </p>
                    <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>
                      {element.name}
                    </p>
                  </div>
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
