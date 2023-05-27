import React from "react";
import styleBurgerIngredients from "./BurgerIngredients.module.css"
import { 
    Tab,
    CurrencyIcon,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from "../../../utils/data";
import { element } from "prop-types";

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={styleBurgerIngredients.BurgerIngredients}>
            <h2 className={styleBurgerIngredients.title}>Соберите бургер</h2>
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
                <h3 className={styleBurgerIngredients.subtitle}>Булки</h3>
                <div className={styleBurgerIngredients.container}>
                    {data.map((element) => {
                        if (element.type === 'bun') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className={styleBurgerIngredients.price}>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={styleBurgerIngredients.name}>{element.name}</p>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
                <h3 className={styleBurgerIngredients.subtitle}>Соусы</h3>
                <div className={styleBurgerIngredients.container}>
                {data.map((element) => {
                        if (element.type === 'sauce') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className={styleBurgerIngredients.price}>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={styleBurgerIngredients.name}>{element.name}</p>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
                <h3 className={styleBurgerIngredients.subtitle}>Начинки</h3>
                <div className={styleBurgerIngredients.container}>
                {data.map((element) => {
                        if (element.type === 'main') {
                            return (
                                <React.Fragment key={element._id}>
                                    <div className={styleBurgerIngredients.card}>
                                        <img src={element.image} alt={element.name} className={styleBurgerIngredients.image}/>
                                        <p className={styleBurgerIngredients.price}>
                                            {element.price}
                                            <CurrencyIcon type="primary" />
                                            </p>
                                        <p className={styleBurgerIngredients.name}>{element.name}</p>
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