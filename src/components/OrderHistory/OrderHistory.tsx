import React, { useEffect } from 'react';
import styles from './OrderHistory.module.css';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../services/actions/register';
import { OrderTape } from '../OrderTape/OrderTape';
import { wsConnection, wsDisconnect } from '../../services/actions/ordersActions';
import { WSS_URL } from '../../utils/api';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { TOrder } from '../../services/types/types';

export const OrderHistory = (): JSX.Element => {

  const orderList = useSelector((store) => store.ordersReducer.message);
  const dispatch = useDispatch();
  const location = useLocation()
  const token = localStorage.getItem('accessToken')!;
  const tokenAPI = token.replace('Bearer ', '');

  useEffect(() => {
    dispatch(wsConnection(`${WSS_URL}?token=${tokenAPI}`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, []);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!orderList ? null : (
        <section className={styles.mainContainer}>
          <div className={styles.container}>
            <Link to="/profile" className={`${styles.active} ${styles.link} `}>
              <p className={`${styles.text} text text_type_main-medium`}>Профиль</p>
            </Link>
            <Link to="/profile/orders" className={styles.link}>
              <p className={`${styles.text} text text_type_main-medium`}>История Заказов</p>
            </Link>
            <Link to="/" className={styles.link}>
              <p className={`${styles.text} text text_type_main-medium mb-20`} onClick={onLogout}>
                Выход
              </p>
            </Link>
            <p className={`${styles.text} text text_type_main-small`}>
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
          <div className={`${styles.history} pr-2 custom-scroll`}>
            {orderList.map((element, index) => {
              return (
                <React.Fragment key={index}>
                  <Link to={`/profile/orders/${element.number}`} className={styles.linkUrl} state={{background: location}}>
                    <OrderTape order={element} success={false} name={''} ingredients={[]} status={''} number={0} createdAt={''} _id={''} price={''} />
                  </Link>
                </React.Fragment>
              )
            })}
          </div>
        </section>
      )}
    </>
  );
};
