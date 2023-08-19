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

const initialTotelPrice = {
  totalPrice: 0,
  id: [],
};

const BurgerConstructor = () => {
  const isLoading = useSelector(store => store.ingredient.isLoading)
  console.log(isLoading)
  const dataIngredients = useContext(DataContext);
  const [state, dispatch] = useReducer(reducer, initialTotelPrice, undefined);
  const [buttonState, setButtonState] = useState(null);
  const [modalOrder, setModalOrder] = useState(false); //БУЛЕВОЕ СОСТОЯНИЕ ОКНА ЗАКАЗА
  const [orderNumber, setOrderNumber] = useState(null);
  const ids = state.id;

  useEffect(() => {
    dispatch({ type: 'addPrice' });
  }, [dataIngredients]);

  const pay = state.totalPrice;

  const handleClickButton = () => {
    setModalOrder(true);
    setButtonState(true);
  };

  function closeModal() {
    setModalOrder(false);
  }

  function reducer(state, action) {
    const bun = dataIngredients.find((item) => item.type === 'bun');
    const noBuns = dataIngredients.filter((item) => item.type !== 'bun');
    switch (action.type) {
      case 'addPrice':
        const price = bun.price * 2 + noBuns.reduce((a, b) => a + b.price, 0);
        const arrayId = [bun._id, ...noBuns.map((id) => id._id)];
        return { totalPrice: price, id: arrayId };
      default:
        return state;
    }
  }

  const openOrederDetails = () => {
    setModalOrder(true);
  };

  useEffect(() => {
    async function postProductData() {
      try {
        const res = await postIngredients(ids);
        const number = res.order.number;
        setOrderNumber(number);
      } catch (error) {
        console.error(error);
      }
    }
    if (ids.length > 0) {
      postProductData();
    }
  }, [buttonState]);

  return (
    <section className={styleBurgerConstructor.burgerConstructor}>
      <ul className={styleBurgerConstructor.mainContainer}>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={` (вверх)`} // ИСПРАВИТЬ
              price={''}
              thumbnail={''}
            />
          </div>
        </li>
        <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
          {isLoading ? null : dataIngredients.map((ingredient) => {
            if (ingredient.type === 'main') {
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
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={` (низ)`} // ИСПРАВИТЬ dataIngredients[0].name
              price={''}
              thumbnail={''}
            />
          </div>
        </li>
      </ul>
      <div className={styleBurgerConstructor.subContainer}>
        <p className="mr-4 text text_type_digits-medium">{pay}</p>
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
