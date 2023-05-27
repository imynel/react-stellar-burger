import stylePopup from './PopupOrder.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import done from '../../../images/graphics.svg'


const PopupOrder = () => {
    return (
        <section className={`${stylePopup.popup}`}>
            <div className={stylePopup.container}>
                <span className={stylePopup.close} onClick={() => {document.querySelector('.Popup_popup__iVW7J').classList.remove('Popup_popupOpened__oXF2R')}}><CloseIcon type="primary" /></span>
                <p className={`${stylePopup.number} text text_type_digits-large mt-30 mb-8`}>034536</p>
                <h3 className={`${stylePopup.identifier} text text_type_main-medium`}>Идентификатор заказа</h3>
                <img className={`${stylePopup.done} mt-15 mb-15`} src={done} alt='Сделал'></img>
                <p className={`${stylePopup.text} mb-2 text text_type_main-small`}>Ваш заказ начали готовить</p>
                <p className={`${stylePopup.subtext} mb-30 text text_type_main-small`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        </section>
    )
}

export default PopupOrder