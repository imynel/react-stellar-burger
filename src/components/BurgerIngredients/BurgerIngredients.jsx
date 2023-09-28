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
  const dataIngredients = useSelector((store) => store.ingredientsReducer.allIngredients);
  const ingredient = dataIngredients;

  useEffect(() => {
    dispatch(getAllIngredients());
  }, []);

  const [activeTab, setActiveTab] = React.useState('bun');

  useEffect(() => {
    const handleScroll = () => {
      const distances = ['.bun', '.sauce', '.main'].map((section) => {
        const element = document.querySelector(section);
        const distance = Math.abs(element.getBoundingClientRect().top - 90);
        return { section, distance };
      });

      //находим блмжайшую секцию
      const closestSection = distances.reduce((closest, current) =>
        current.distance < closest.distance ? current : closest,
      );

      //устанавливаем активную ближайшую секцию
      setActiveTab(closestSection.section.slice(1));
    };

    const scrollWrapper = document.querySelector('.custom-scroll');
    scrollWrapper.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollWrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styleBurgerIngredients.BurgerIngredients}>
      <h2 className={`${styleBurgerIngredients.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <div className={`${styleBurgerIngredients.tab} mb-10`}>
        <Tab
          value="bun"
          active={activeTab === 'bun'}
          onClick={() => {
            setActiveTab('bun');
          }}>
          Булки
        </Tab>
        <Tab value="sauce" active={activeTab === 'sauce'} onClick={() => setActiveTab('sauce')}>
          Соусы
        </Tab>
        <Tab value="main" active={activeTab === 'main'} onClick={() => setActiveTab('main')}>
          Начинки
        </Tab>
      </div>
      <div className={`${styleBurgerIngredients.mainContainer} custom-scroll`}>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Булки</h3>
        <div className={`${styleBurgerIngredients.container} bun`}>
          {ingredient.map((element) => {
            if (element.type === 'bun') {
              return (
                <React.Fragment key={element._id}>
                  <Ingredient item={element} handleOpen={handleOpen}></Ingredient>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Соусы</h3>
        <div className={`${styleBurgerIngredients.container} sauce`}>
          {ingredient.map((element) => {
            if (element.type === 'sauce') {
              return (
                <React.Fragment key={element._id}>
                  <Ingredient item={element} handleOpen={handleOpen}></Ingredient>
                </React.Fragment>
              );
            }
          })}
        </div>
        <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Начинки</h3>
        <div className={`${styleBurgerIngredients.container} main`}>
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
};

export default BurgerIngredients;
