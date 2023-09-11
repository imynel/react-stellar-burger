import React, { useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SignIn } from '../registration/SignIn/SignIn';

function App() {

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
        <SignIn />
          {/* <DndProvider backend={HTML5Backend}>
            {<BurgerIngredients handleOpen={openIngredientsDetails} />}
            {<BurgerConstructor />}
          </DndProvider> */}
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
