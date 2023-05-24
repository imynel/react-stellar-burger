import styleBurgerConstructor from './burgerConstructor.module.css'
import { data } from '../../../utils/data'
import { DragIcon, CurrencyIcon, LockIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
    return (
        <section className={styleBurgerConstructor.burgerConstructor}>
            <ul className={styleBurgerConstructor.mainContainer}>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[0].image} alt={data[0].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[0].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[0].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[6].image} alt={data[6].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[6].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[4].image} alt={data[4].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[4].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[4].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}> 
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[7].image} alt={data[7].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[7].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[7].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[8].image} alt={data[8].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[8].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[8].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[8].image} alt={data[8].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p className={`${styleBurgerConstructor.name} mr-5`}>{data[8].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[8].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
                <li className={styleBurgerConstructor.card}>
                    <DragIcon type="primary" />
                    <div className={`${styleBurgerConstructor.container} pt-4 pb-4`}>
                        <img src={data[0].image} alt={data[0].name} className={`${styleBurgerConstructor.image} mr-5 ml-6`}/>
                        <p classNam0e={`${styleBurgerConstructor.name} mr-5`}>{data[0].name}</p>
                        <p className={`${styleBurgerConstructor.price} mr-2`}>{data[0].price}</p>
                        <CurrencyIcon type="primary" />
                        <div className='mr-8 ml-5'>
                            <LockIcon type="secondary" />
                        </div>
                    </div>
                </li>
            </ul>
            <div className={styleBurgerConstructor.subContainer}>
                <p className='mr-4 text text_type_digits-medium'>610</p>
                <div className='mr-10'>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
} 

export default BurgerConstructor