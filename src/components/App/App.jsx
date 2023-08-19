import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { getIngredients } from '../../utils/api';
import { async } from 'q';

import { DataContext } from '../../services/dataContext'; //ПОДКЛЮЧАЕМ КОНТЕКСТ ДАТЫ
import { data } from '../../utils/data';

function App() {
  const [productData, setProductData] = useState(null); // СТЕЙТ ДАННЫХ АПИ

  const [modalIngredient, setModalIngredient] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    async function getProductData() {
      try {
        const { data } = await getIngredients();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProductData();
  }, []);

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
          {productData !== null && <BurgerIngredients handleOpen={openIngredientsDetails} />}
          {/* {productData !== null && <BurgerConstructor />} */}
        </main>
      </div>
      <div>
        {modalIngredient && (
          <Modal handleClose={closeModal}>
            <IngredientDetails ingredint={ingredient} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
