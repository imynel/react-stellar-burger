import React, { useState, useEffect, useCallback } from 'react';
import styleBurgerConstructor from './BurgerConstructor.module.css';
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngregientsInConstructor from '../IngregientsInConstructor/IngregientsInConstructor';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  getOrderNumder,
  changeIngedients,
} from '../../services/actions/constructor';
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, currentIngredients } = useSelector((store) => store.ingredient);
  const [buttonState, setButtonState] = useState(null);
  const [modalOrder, setModalOrder] = useState(false); //БУЛЕВОЕ СОСТОЯНИЕ ОКНА ЗАКАЗА
  const [price, setPrice] = useState(null);
  const ID = currentIngredients.map((item) => {
    return item._id;
  });

  useEffect(() => {
    let totalPrice = currentIngredients.reduce((acc, item) => acc + item.price, 0);
    if (bun) {
      totalPrice = totalPrice + bun.price * 2;
    }
    setPrice(totalPrice);
  }, [currentIngredients, bun]);

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (ingredient) => {
      dispatch(addIngredient(ingredient));
    },
  });

  const handleClickButton = () => {
    dispatch(getOrderNumder(ID));
    setModalOrder(true);
    setButtonState(true);
  };

  const change = useCallback((dragIndex, hoverIndex) => {
    dispatch(changeIngedients(dragIndex, hoverIndex));
  }, []);

  function closeModal() {
    setModalOrder(false);
  }

  const openOrederDetails = () => {
    setModalOrder(true);
  };

  return (
    <section className={styleBurgerConstructor.burgerConstructor} ref={dropRef}>
      <ul className={styleBurgerConstructor.mainContainer}>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            {
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (вверх)`} // ИСПРАВИТЬ
                price={bun.price}
                thumbnail={bun.image}
              />
            }
          </div>
        </li>
        <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
          {currentIngredients.map((ingredient, index) => {
            if (ingredient.type !== 'bun') {
              return (
                <React.Fragment>
                  <li className={styleBurgerConstructor.card}>
                    <IngregientsInConstructor
                      key={uuidv4()}
                      ingredient={ingredient}
                      swap={change}
                      index={index}
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
                text={`${bun.name} (низ)`} // ИСПРАВИТЬ dataIngredients[0].name
                price={bun.price}
                thumbnail={bun.image}
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
          <OrderDetails onClick={openOrederDetails} />
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
