import stylePopup from './OrderDetails.module.css';
import done from '../../images/graphics.svg';
import { useSelector } from '../../services/hooks/hooks';

const OrderDetails = (): JSX.Element => {
  const orderNumber = useSelector(store => store.constructorReducer.order.number)
  return (
    <>
      <p className={`${stylePopup.number} text text_type_digits-large mt-30 mb-8`}>{orderNumber}</p>
      <h3 className={`${stylePopup.identifier} text text_type_main-medium`}>
        Идентификатор заказа
      </h3>
      <img className={`${stylePopup.done} mt-15 mb-15`} src={done} alt="Сделал"></img>
      <p className={`${stylePopup.text} mb-2 text text_type_main-small`}>
        Ваш заказ начали готовить
      </p>
      <p className={`${stylePopup.subtext} mb-30 text text_type_main-small`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
