import { useNavigate } from 'react-router-dom';
import styles from './ModalOverlay.module.css';
type Props = {
  closeModal: () => void;
}

const ModalOverlay = ({ closeModal }: Props): JSX.Element => {
  return <section className={styles.modalOverlay} onClick={closeModal}></section>;
};

export default ModalOverlay;
