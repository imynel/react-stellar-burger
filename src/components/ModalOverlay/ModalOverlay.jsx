import styles from './ModalOverlay.module.css'

const ModalOverlay = ({closeModal}) => {

    return (
        <section className={styles.modalOverlay} onClick={closeModal} >
        </section>
    )
}

export default ModalOverlay