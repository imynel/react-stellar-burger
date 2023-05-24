import React from "react";
import styleBurgerIngredients from "./BurgerIngredients.module.css"
import { 
    Tab,
    CurrencyIcon,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from "../../../utils/data";

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={styleBurgerIngredients.BurgerIngredients}>
            <h2 className={styleBurgerIngredients.title}>Соберите бургер</h2>
            <div style={{ display: 'flex' }} className="mb-10">
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
                    <div className={styleBurgerIngredients.card}>
                        <Counter count={1} size="default" extraClass="m-1" />
                        <img src={data[0].image} alt={data[0].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[0].price}
                            <CurrencyIcon type="primary" />
                            </p>
                        <p className={styleBurgerIngredients.name}>{data[0].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[14].image} alt={data[14].name} className={styleBurgerIngredients.image} />
                        <p className={styleBurgerIngredients.price}>
                            {data[14].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[14].name}</p>
                    </div>
                </div>
                <h3 className={styleBurgerIngredients.subtitle}>Соусы</h3>
                <div className={styleBurgerIngredients.container}>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[3].image} alt={data[3].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[3].price}
                            <CurrencyIcon type="primary" />
                    </p>
                        <p className={styleBurgerIngredients.name}>{data[3].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[6].image} alt={data[6].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[6].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[6].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[5].image} alt={data[5].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[5].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[5].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[9].image} alt={data[9].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[9].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[9].name}</p>
                    </div>
                </div>
                <h3 className={styleBurgerIngredients.subtitle}>Начинки</h3>
                <div className={styleBurgerIngredients.container}>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[1].image} alt={data[1].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[1].price}
                            <CurrencyIcon type="primary" />
                    </p>
                        <p className={styleBurgerIngredients.name}>{data[1].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[2].image} alt={data[2].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[2].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[2].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[4].image} alt={data[4].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[4].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[4].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[7].image} alt={data[7].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[7].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[7].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[8].image} alt={data[8].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[8].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[8].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[10].image} alt={data[10].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[10].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[10].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[11].image} alt={data[11].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[11].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[11].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[12].image} alt={data[12].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[12].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[12].name}</p>
                    </div>
                    <div className={styleBurgerIngredients.card}>
                        <img src={data[13].image} alt={data[13].name} className={styleBurgerIngredients.image}/>
                        <p className={styleBurgerIngredients.price}>
                            {data[13].price}
                            <CurrencyIcon type="primary" />
                        </p>
                        <p className={styleBurgerIngredients.name}>{data[13].name}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients