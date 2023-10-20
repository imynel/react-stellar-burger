import styles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions/modal';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ children, onClose }) => {
  const dispatch = useDispatch();

  const handlerClose = () => {
    dispatch(closeModal());
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const escClose = (e) => {
    if (e.key === 'Escape') {
      handlerClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);
    return () => {
      document.removeEventListener('keydown', escClose);
    };
  });

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={() => handlerClose()} />
      <section className={styles.modal}>
        <div className={styles.close}>
          <CloseIcon onClick={() => handlerClose()} />
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
