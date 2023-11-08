import React, { useEffect } from 'react';
import styles from './Feed.module.css';
import { OrderTape } from '../OrderTape/OrderTape';
import { useDispatch, useSelector } from 'react-redux';
import { wsConnection, wsDisconnect } from '../../services/actions/feedActions';
import { WSS_URL } from '../../utils/api';
import { Link, useLocation } from 'react-router-dom';

export const Feed = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const { message, total, totalToday } = useSelector((store) => store.feedReducer);

  useEffect(() => {
    dispatch(wsConnection(`${WSS_URL}/all`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, []);
  return (
    <>
      {!message ? null : (
        <div className={styles.mainContainer}>
          <h1 className={`${styles.title}`}>Лента заказов</h1>
          <div className={styles.container}>
            <div className={`${styles.ribbon} pr-2 custom-scroll`}>
              {message.map((elm) => {
                return (
                  <Link to={`/feed/${elm.number}`} className={styles.link} state={{background: location}}>
                    <OrderTape order={elm} />
                  </Link>
                )
              })}
            </div>
            <div className={styles.stats}>
              <div className={styles.statsContainer}>
                <div className={styles.ready}>
                  <h3 className="text text_type_main-medium">Готовы:</h3>
                  {message.map((elm, index) => {
                    if (elm.status === 'done' && index < 10)
                      return (
                        <p className={`${styles.readyNumber} text text_type_digits-default`}>
                          {elm.number}
                        </p>
                      );
                  })}
                </div>
                <div className={styles.inProgress}>
                  <h3 className="text text_type_main-medium">В работе:</h3>
                  {message.map((elm, index) => {
                    if (elm.status !== 'done' && index < 10)
                      return (
                        <p className={`${styles.readyNumber} text text_type_digits-default`}>
                          {elm.number}
                        </p>
                      );
                  })}
                </div>
              </div>
              <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
              <p className="text text_type_digits-large">{total}</p>
              <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
              <p className="text text_type_digits-large">{totalToday}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};