import styles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ handleClose, children }) => {
  useEffect(() => {
    const escClose = (e) => {
      e.key === 'Escape' && handleClose();
    };
    document.addEventListener('keydown', escClose);
    return () => {
      document.removeEventListener('keydown', escClose);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={handleClose} />
      <section className={styles.modal}>
        <div className={styles.close}>
          <CloseIcon onClick={handleClose} />
        </div>
        {children}
      </section>
    </>,
    modalRoot,
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
