import styleHeader from './AppHeader.module.css'
import { 
    Logo,
    BurgerIcon, 
    ListIcon,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <header className={styleHeader.header}>
            <div className={styleHeader.container}>
                <BurgerIcon type="primary" />
                <p className='mr-5 ml-2 text text_type_main-default'>Конструктор</p>
            </div>
            <div className={styleHeader.container}>
                <ListIcon type="secondary" />
                <p className='mr-5 ml-2 text text_type_main-default'>Лента Заказов</p>
            </div>
            <div className={styleHeader.logo}>    
                <Logo/>
            </div>
            <div className={styleHeader.container}>
                <ProfileIcon type="secondary" />
                <p className='mr-5 ml-2 text text_type_main-default'>Личный кабинет</p>
            </div>
        </header>
    )    
}

export default AppHeader