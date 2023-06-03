import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const Modal = (props) => {

    return (
        <section className={styles.modal}>
            <ModalOverlay/>
        </section>
    )
}

export default Modal