import React, { useEffect, useState } from 'react';
import styleBurgerIngredients from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';
import { useSelector } from '../../services/hooks/hooks';
import { TIngredient } from '../../services/types/types';

type Props = {
  handleOpen: (item: TIngredient) => void;
}

const BurgerIngredients = ({ handleOpen }: Props): JSX.Element => {
  const dataIngredients = useSelector((store) => store.ingredientsReducer.allIngredients);
  const ingredient: TIngredient[] = dataIngredients;

  const [activeTab, setActiveTab] = React.useState('bun');

  useEffect(() => {
    const handleScroll = () => {
      const distances = ['.bun', '.sauce', '.main'].map((section) => {
        const element = document.querySelector(section)!;
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

   
    const scrollWrapper = document.querySelector('.custom-scroll')!;
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
          {ingredient.map((element: TIngredient) => {
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
          {ingredient.map((element: TIngredient) => {
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
          {ingredient.map((element: TIngredient) => {
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


export default BurgerIngredients;
