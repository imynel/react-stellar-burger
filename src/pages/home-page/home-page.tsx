import { useState } from 'react';
import styles from './home-page.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TIngredient } from '../../services/types/types';

const HomePage = () => {

  const [modalIngredient, setModalIngredient] = useState(false);
  const [ingredient, setIngredient] = useState<TIngredient | null>(null);

  const openIngredientsDetails = (item: TIngredient) => {
    setModalIngredient(true);
    setIngredient(item);
  };

  // const closeModal = () => {
  //   setModalIngredient(false);
  // };

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
