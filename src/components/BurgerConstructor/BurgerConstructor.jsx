import styleBurgerConstructor from './BurgerConstructor.module.css'
import { data } from '../../utils/data'
import { DragIcon, CurrencyIcon, Button, DeleteIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import IngregientsInConstructor from '../IngregientsInConstructor/IngregientsInConstructor'

const BurgerConstructor = () => {
    return (
        <section className={styleBurgerConstructor.burgerConstructor}>
            <ul className={styleBurgerConstructor.mainContainer}>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${data[0].name} (вверх)`}
                            price={data[0].price}
                            thumbnail={data[0].image}
                        />
                    </div>
                </li>
                <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[1]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[2]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[3]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[4]} />
                    </li>
                    <li className={styleBurgerConstructor.card}> 
                        <IngregientsInConstructor {...data[5]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[6]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...data[7]} />
                    </li>
                </div>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${data[0].name} (низ)`}
                            price={data[0].price}
                            thumbnail={data[0].image}
                        />
                    </div>
                </li>
            </ul>
            <div className={styleBurgerConstructor.subContainer}>
                <p className='mr-4 text text_type_digits-medium'>610</p>
                <div className='mr-10'>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={() => {
                    document.querySelector('.PopupOrder_popup__JdUqc').classList.add('opupOrder_popupOpened__Dq4pJ')
                }}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
} 

export default BurgerConstructor