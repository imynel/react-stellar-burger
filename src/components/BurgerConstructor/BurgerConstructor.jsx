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
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={data[0].image}
                        />
                    </div>
                </li>
                <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[6].image} alt={data[6].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[6].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[6].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[6].image} alt={data[6].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[6].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[6].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[6].image} alt={data[6].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[6].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[6].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[4].image} alt={data[4].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[4].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[4].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}> 
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[7].image} alt={data[7].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[7].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[7].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[8].image} alt={data[8].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[8].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[8].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <DragIcon type="primary" />
                        <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                            <img src={data[8].image} alt={data[8].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                            <p className={`${styleBurgerConstructor.name} mr-5 text_type_main-small`}>{data[8].name}</p>
                            <p className={`${styleBurgerConstructor.price} mr-2 text_type_digits-default`}>{data[8].price}</p>
                            <CurrencyIcon type="primary" />
                            <div className='mr-8 ml-5'>
                                <DeleteIcon type="primary" />
                            </div>
                        </div>
                    </li>
                </div>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
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