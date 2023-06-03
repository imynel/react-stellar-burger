import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import PopupOrder from "../PopupOrder/PopupOrder";
import PopupInfo from "../PopupInfo/PopupInfo";
import Modal from '../Modal/Modal';

function App() {
  const [productData, setProductData] = useState([]);
  const url = 'https://norma.nomoreparties.space/api/ingredients';

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

  console.log(productData)
  return (
    <>
      <div className={styles.app}>
        <AppHeader/>
        <main className={styles.main}>
          <BurgerIngredients dataIngredients={productData} />
          <BurgerConstructor dataIngredients={productData} />
        </main>
      </div>
      <div id="react-modals" >
        <Modal/>
      </div>
    </>
  );
}

export default App;

