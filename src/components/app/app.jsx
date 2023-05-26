import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "./AppHeader/AppHeader";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import Popup from "./Popup/Popup";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
      <Popup/>
    </div>
  );
}

export default App;

