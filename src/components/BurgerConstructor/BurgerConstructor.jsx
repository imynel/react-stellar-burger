import styleBurgerConstructor from './BurgerConstructor.module.css'
import { data } from '../../utils/data'
import { DragIcon, CurrencyIcon, Button, DeleteIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

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
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[1].name}
                            price={data[1].price}
                            thumbnail={data[1].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[2].name}
                            price={data[2].price}
                            thumbnail={data[2].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[3].name}
                            price={data[3].price}
                            thumbnail={data[3].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[4].name}
                            price={data[4].price}
                            thumbnail={data[4].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}> 
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[5].name}
                            price={data[5].price}
                            thumbnail={data[5].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[6].name}
                            price={data[6].price}
                            thumbnail={data[6].image}
                        />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={data[7].name}
                            price={data[7].price}
                            thumbnail={data[7].image}
                        />
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