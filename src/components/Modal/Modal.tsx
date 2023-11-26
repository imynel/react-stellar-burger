import styles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { closeModal } from '../../services/actions/modal';
import { useDispatch } from '../../services/hooks/hooks';

const modalRoot = document.getElementById('react-modals');

type Props = {
  children: React.ReactNode;
  onClose: () => void
}

const Modal = ({ children, onClose}: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlerClose = () => {
    dispatch(closeModal());
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const escClose = (e: KeyboardEvent) => {
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
          <CloseIcon type='primary'onClick={() => handlerClose()} />
        </div>
        {children}
      </section>
    </>,
    modalRoot as HTMLElement,
  );
};


export default Modal;
