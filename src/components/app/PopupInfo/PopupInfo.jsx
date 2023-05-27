import stylePopupInfo from './PopupInfo.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../../utils/data'


const PopupInfo = (() => {
    return (
        <section className={`${stylePopupInfo.popupInfo}`}>
            <div className={stylePopupInfo.container}>
                <span className={stylePopupInfo.close} onClick={() => {}}><CloseIcon type="primary" /></span>
                <h3 className={`${stylePopupInfo.title} mt-10 text text_type_main-large`}>Детали ингредиента</h3>
                <img className={stylePopupInfo.image} src={data[0].image} alt="" />
                <p className='mt-4 mb-8 text text_type_main-medium'>{data[0].name}</p>
                <div className={`${stylePopupInfo.info}`}>
                    <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Каллории, ккал {'224,4'}</div>
                    <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Белки, г {'12,2'}</div>
                    <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Жиры, г {'17,2'}</div>
                    <div className={`${stylePopupInfo.infoItem} text text_type_main-small`}>Углеводы, г {'10,2'}</div>
                </div>
            </div>
        </section>
    )
})

export default PopupInfo