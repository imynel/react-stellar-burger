import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "./AppHeader/AppHeader";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients/>
        
      </main>
    </div>
  );
}

export default App;

