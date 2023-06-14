import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

const Modal = ({handleClose, children}) => {

    const modalRoot = document.getElementById("react-modals");

    const escClose = (e) => {
        (e.key === 'Escape' && handleClose())
      }
        useEffect(() => {
          document.addEventListener('keydown', escClose);
          return () => {
              document.removeEventListener('keydown', escClose)
          }
      })    


    return ReactDOM.createPortal ( (
        <>
            <ModalOverlay/>
            <section className={styles.modal}>
                <div className={styles.close}><CloseIcon onClick={handleClose}/></div>
                {children}
            </section>
        </>
    ), modalRoot
    )

}

Modal.propTypes ={ 
    handleClose: PropTypes.func,
    children: PropTypes.element,
}

export default Modal