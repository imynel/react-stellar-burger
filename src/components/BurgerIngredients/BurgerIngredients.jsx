import React from "react";
import styleBurgerIngredients from "./BurgerIngredients.module.css"
import { 
    Tab,
    CurrencyIcon,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { element } from "prop-types";

const BurgerIngredients = (props) => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={styleBurgerIngredients.BurgerIngredients}>
            <h2 className={`${styleBurgerIngredients.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
            <div className={`${styleBurgerIngredients.tab} mb-10`}>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styleBurgerIngredients.mainContainer} custom-scroll`}>
                <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Булки</h3>
                <div className={styleBurgerIngredients.container}>
                    {props.dataIngredients.map((element) => {
                        if (element.type === 'bun') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className='mt-1 mb-1 text text text_type_digits-default'>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>{element.name}</p>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
                <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Соусы</h3>
                <div className={styleBurgerIngredients.container}>
                {props.dataIngredients.map((element) => {
                        if (element.type === 'sauce') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className='mt-1 mb-1 text text_type_digits-default'>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>{element.name}</p>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
                <h3 className={`${styleBurgerIngredients.subtitle} text text_type_main-medium`}>Начинки</h3>
                <div className={styleBurgerIngredients.container}>
                {props.dataIngredients.map((element) => {
                        if (element.type === 'main') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className='mt-1 mb-1 text text_type_digits-default'>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={`${styleBurgerIngredients.name} text text_type_main-small`}>{element.name}</p>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients