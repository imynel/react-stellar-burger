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
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  getOrderNumder,
  changeIngedients,
} from '../../services/actions/constructor';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { TIngredient } from '../../services/types/types';

const BurgerConstructor = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { bun, currentIngredients } = useSelector((store) => store.constructorReducer);
  const { isAuthCheck, user } = useSelector((store) => store.registerReducer);
  const [price, setPrice] = useState(null);
  const ID = currentIngredients.map((item: TIngredient) => {
    return item._id;
  });

  useEffect(() => {
    let totalPrice = currentIngredients.reduce((acc: any, item: any) => acc + item.price, 0);
    if (bun) {
      totalPrice = totalPrice + bun.price * 2;
    }
    setPrice(totalPrice);
  }, [currentIngredients, bun]);

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (ingredient: TIngredient) => {
      dispatch(addIngredient(ingredient));
    },
  });

  const onSubmit = () => {
    if (ID.length) {
      dispatch(getOrderNumder(ID));
    }
  };

  const change = useCallback((dragIndex, hoverIndex) => {
    dispatch(changeIngedients(dragIndex, hoverIndex));
  }, []);

  return (
    <section className={styleBurgerConstructor.burgerConstructor} ref={dropRef}>
      <ul className={styleBurgerConstructor.mainContainer}>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            {bun && (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (вверх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
          </div>
        </li>
        <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
          {currentIngredients.map((ingredient: any, index: any) => {
            if (ingredient.type !== 'bun') {
              return (
                <React.Fragment key={uuidv4()}>
                  <li className={styleBurgerConstructor.card}>
                    <IngregientsInConstructor ingredient={ingredient} swap={change} index={index} />
                  </li>
                </React.Fragment>
              );
            }
          })}
        </div>
        <li className={styleBurgerConstructor.card}>
          <div className="ml-8">
            {bun && (
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            )}
          </div>
        </li>
      </ul>
      <div className={styleBurgerConstructor.subContainer}>
        <p className="mr-4 text text_type_digits-medium">{price}</p>
        <div className="mr-10">
          <CurrencyIcon type="primary" />
        </div>
        <Link
          to={user && isAuthCheck ? '/order' : '/login'}
          onClick={(e) => (!currentIngredients.length || !bun ? e.preventDefault() : null)}
          state={{ background: location }}>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={user && isAuthCheck ? onSubmit : undefined}
            disabled={currentIngredients.length && bun ? false : true}>
            Оформить заказ
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BurgerConstructor;
