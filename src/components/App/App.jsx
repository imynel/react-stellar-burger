import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { getIngredients } from '../../utils/api';
import { getAllIngredients } from '../../services/actions/ingredients';

import { useSelector } from 'react-redux';

function App() {
  const dataIngredients = useSelector((store) => store.ingredient.allIngredients);

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
          {<BurgerIngredients handleOpen={openIngredientsDetails} />}
          {<BurgerConstructor />}
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

export default App;
