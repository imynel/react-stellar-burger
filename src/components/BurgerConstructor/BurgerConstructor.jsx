import React, { useState, useContext, useEffect, useReducer } from 'react';
import styleBurgerConstructor from './BurgerConstructor.module.css';
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngregientsInConstructor from '../IngregientsInConstructor/IngregientsInConstructor';
import PropTypes from 'prop-types';
import { DataContext } from '../../services/dataContext';
import { postIngredients } from '../../utils/api';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useSelector } from 'react-redux';

const BurgerConstructor = () => {
  const { bun, currentIngredients } = useSelector((store) => store.ingredient);
  const [buttonState, setButtonState] = useState(null);
  const [modalOrder, setModalOrder] = useState(false); //БУЛЕВОЕ СОСТОЯНИЕ ОКНА ЗАКАЗА
  const [orderNumber, setOrderNumber] = useState(null);
  const [price, setPrice] = useState(null);


  useEffect(() => {
    let totalPrice = currentIngredients.reduce((acc, item) => acc + item.price, 0);
    if (bun) {
      totalPrice = totalPrice + bun * 2;
    }
    setPrice(totalPrice);
  }, [currentIngredients]);

  const handleClickButton = () => {
    setModalOrder(true);
    setButtonState(true);
  };

  function closeModal() {
    setModalOrder(false);
  }

  const openOrederDetails = () => {
    setModalOrder(true);
  };

  return (
    <section className={styleBurgerConstructor.burgerConstructor}>
      <ul className={styleBurgerConstructor.mainContainer}>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            {
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`(вверх)`} // ИСПРАВИТЬ
                price={''}
                thumbnail={''}
              />
            }
          </div>
        </li>
        <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
          {currentIngredients.map((ingredient) => {
            if (ingredient.type !== 'bun') {
              return (
                <React.Fragment key={ingredient._id}>
                  <li className={styleBurgerConstructor.card}>
                    <IngregientsInConstructor
                      name={ingredient.name}
                      price={ingredient.price}
                      image={ingredient.image}
                    />
                  </li>
                </React.Fragment>
              );
            }
          })}
        </div>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            {
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={` (низ)`} // ИСПРАВИТЬ dataIngredients[0].name
                price={''}
                thumbnail={''}
              />
            }
          </div>
        </li>
      </ul>
      <div className={styleBurgerConstructor.subContainer}>
        <p className="mr-4 text text_type_digits-medium">{price}</p>
        <div className="mr-10">
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={handleClickButton}>
          Оформить заказ
        </Button>
      </div>
      {modalOrder && (
        <Modal handleClose={closeModal}>
          <OrderDetails number={orderNumber} onClick={openOrederDetails} />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  handleOpen: PropTypes.func,
  dataIngredients: PropTypes.array,
};

export default BurgerConstructor;
