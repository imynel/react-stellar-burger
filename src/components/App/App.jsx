import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import getIngredients from '../../utils/api';
import { async } from 'q';

import { DataContext } from '../../services/dataContext' //ПОДКЛЮЧАЕМ КОНТЕКСТ ДАТЫ
import { data } from '../../utils/data';

function App() {
  const [productData, setProductData] = useState(null); // СТЕЙТ ДАННЫХ АПИ

  const [modalOrder, setModalOrder] = useState(false); //БУЛЕВОЕ СОСТОЯНИЕ ОКНА ЗАКАЗА
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

  const openOrederDetails = () => {
    setModalOrder(true);
  };

  const closeModal = () => {
    setModalOrder(false);
    setModalIngredient(false);
  };

  return (
    <>
      <DataContext.Provider value={productData}>
        <div className={styles.app}>
          <AppHeader />
          <main className={styles.main}>
            {productData !== null && (
              <BurgerIngredients handleOpen={openIngredientsDetails} />
            )}
            {productData !== null && (
              <BurgerConstructor handleOpen={openOrederDetails} />
            )}
          </main>
        </div>
        <div>
          {modalOrder && (
            <Modal handleClose={closeModal}>
              <OrderDetails />
            </Modal>
          )}
          {modalIngredient && (
            <Modal handleClose={closeModal}>
              <IngredientDetails ingredint={ingredient} />
            </Modal>
          )}
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
