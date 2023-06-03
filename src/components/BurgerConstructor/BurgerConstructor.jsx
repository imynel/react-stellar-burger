import React from 'react'
import styleBurgerConstructor from './BurgerConstructor.module.css'
import { DragIcon, CurrencyIcon, Button, DeleteIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import IngregientsInConstructor from '../IngregientsInConstructor/IngregientsInConstructor'
import { element } from 'prop-types'

const BurgerConstructor = (props) => {
    return (
        <section className={styleBurgerConstructor.burgerConstructor}>
            <ul className={styleBurgerConstructor.mainContainer}>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`(вверх)`}
                            price={0}
                            thumbnail={''}
                        />
                    </div>
                </li>
                <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
                    {props.dataIngredients.map(ingredient => {
                        console.log(ingredient)
                        if (ingredient.type === 'main') {
                            return (
                                <React.Fragment key={ingredient._id}>
                                    <li className={styleBurgerConstructor.card}>
                                        <IngregientsInConstructor name={ingredient.name} price={ingredient.price} image={ingredient.image} />
                                    </li>
                                </React.Fragment>   
                            )
                        }
                    })}
                    
                    {/* <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...props.dataIngredients[2]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...props.dataIngredients[3]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...props.dataIngredients[4]} />
                    </li>
                    <li className={styleBurgerConstructor.card}> 
                        <IngregientsInConstructor {...props.dataIngredients[5]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...props.dataIngredients[6]} />
                    </li>
                    <li className={styleBurgerConstructor.card}>
                        <IngregientsInConstructor {...props.dataIngredients[7]} />
                    </li> */}
                </div>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={` (низ)`}
                            price={0}
                            thumbnail={''}
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