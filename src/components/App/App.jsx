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

function App() {
  const [productData, setProductData] = useState(null);
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const [modalOrder, setModalOrder] = useState(false);
  const [modalIngredient, setModalIngredient] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    async function getProductData() {
      const { data } = await getIngredients();
      setProductData(data);
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
      <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          {productData !== null && (
            <BurgerIngredients dataIngredients={productData} handleOpen={openIngredientsDetails} />
          )}
          {productData !== null && (
            <BurgerConstructor dataIngredients={productData} handleOpen={openOrederDetails} />
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
    </>
  );
}

export default App;
