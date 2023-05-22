import styles from "./app.module.css";
import { data } from "../../utils/data";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

function App() {
  return (
    <div className={styles.app}>
      <Logo/>
    </div>
  );
}

export default App;

