import React, { useState } from 'react';
import styles from './home-page.module.css';
import AppHeader from '../../components/AppHeader/AppHeader';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import Modal from '../../components/Modal/Modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, Router, Routes} from 'react-router-dom'

const HomePage = () => {
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

  const [modalIngredient, setModalIngredient] = useState(false);
  const [ingredient, setIngredient] = useState<element | null>(null);

  const openIngredientsDetails = (item: element) => {
    setModalIngredient(true);
    setIngredient(item);
  };

  const closeModal = () => {
    setModalIngredient(false);
  };

  return (
    <>
      <div className={styles.app}>
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            {<BurgerIngredients handleOpen={openIngredientsDetails} />}
            {<BurgerConstructor />}
          </DndProvider>
        </main>
      </div>
    </>
  );
}

export default HomePage;
