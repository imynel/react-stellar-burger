import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from '../Modal/Modal';


function App() {
  const [productData, setProductData] = useState(null);
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const [modalOrder , setModalOrder] = useState(false)
  const [modalIngredient, setModalIngredient] = useState(false) 
  const [ingredient, setIngredient] = useState(null)

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProductData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
    
  }, []);

  const openIngredientsDetails = (item) => {
    setModalIngredient(true)
    setIngredient(item)
  }

  const openOrederDetails = () => {
    setModalOrder(true)
  }

  const closeModal = () => {
    setModalOrder(false)
    setModalIngredient(false)
  }

  return (
    <>
      <div className={styles.app}>
        <AppHeader/>
        <main className={styles.main}>
          {productData !== null && <BurgerIngredients dataIngredients={productData} handleOpen={openIngredientsDetails} />}
          {productData !== null && <BurgerConstructor dataIngredients={productData} handleOpen={openOrederDetails} />}
        </main>
      </div>
      <div id="react-modals" >
        {modalOrder && <Modal handleClose={closeModal}>
            <OrderDetails/>
          </Modal>}
        {modalIngredient && <Modal handleClose={closeModal}>
            <IngredientDetails ingredint={ingredient}/>
          </Modal>}
      </div>
    </>
  );
}

export default App;

