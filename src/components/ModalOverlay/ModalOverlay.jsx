import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {

    return (
        <section className={styles.modalOverlay}>
            {props.children}
        </section>
    )
}

export default ModalOverlay