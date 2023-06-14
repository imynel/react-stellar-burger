import React from 'react'
import styleBurgerConstructor from './BurgerConstructor.module.css'
import { CurrencyIcon, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import IngregientsInConstructor from '../IngregientsInConstructor/IngregientsInConstructor'
import PropTypes from 'prop-types';

const BurgerConstructor = ({dataIngredients, handleOpen}) => {
    return (
        <section className={styleBurgerConstructor.burgerConstructor}>
            <ul className={styleBurgerConstructor.mainContainer}>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${dataIngredients[0].name} (вверх)`}
                            price={dataIngredients[0].price}
                            thumbnail={dataIngredients[0].image}
                        />
                    </div>
                </li>
                <div className={`${styleBurgerConstructor.scroll} custom-scroll`}>
                    {dataIngredients.map(ingredient => {
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
                </div>
                <li className={styleBurgerConstructor.card}>
                    <div className='ml-8'>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${dataIngredients[0].name} (низ)`}
                            price={dataIngredients[0].price}
                            thumbnail={dataIngredients[0].image}
                        />
                    </div>
                </li>
            </ul>
            <div className={styleBurgerConstructor.subContainer}>
                <p className='mr-4 text text_type_digits-medium'>610</p>
                <div className='mr-10'>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={() => {handleOpen()}}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
} 

BurgerConstructor.propTypes = {
    handleOpen: PropTypes.func,
    dataIngredients: PropTypes.array,  
}

export default BurgerConstructor