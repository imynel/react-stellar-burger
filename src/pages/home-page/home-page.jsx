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

  const [modalIngredient, setModalIngredient] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const openIngredientsDetails = (item) => {
    setModalIngredient(true);
    setIngredient(item);
  };

  const closeModal = () => {
    setModalIngredient(false);
  };

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            {<BurgerIngredients handleOpen={openIngredientsDetails} />}
            {<BurgerConstructor />}
          </DndProvider>
        </main>
      </div>
      <div>
        {modalIngredient && (
          <Modal handleClose={closeModal}>
            <IngredientDetails ingredient={ingredient} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default HomePage;
