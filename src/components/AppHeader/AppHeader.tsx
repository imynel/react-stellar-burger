import styleHeader from './AppHeader.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom'

const AppHeader = (): JSX.Element => {
  return (
    <header className={styleHeader.header}>
      <Link to='/' className={styleHeader.link}>
        <div className={styleHeader.container}>
          <BurgerIcon type="primary" />
          <p className="mr-5 ml-2 text text_type_main-default">Конструктор</p>
        </div>
      </Link>
      <Link to='/feed' className={styleHeader.link}>
        <div className={styleHeader.container}>
          <ListIcon type="secondary" />
          <p className="mr-5 ml-2 text text_type_main-default">Лента Заказов</p>
        </div>
      </Link>
      <div className={styleHeader.logo}>
        <Logo />
      </div>
      <Link to='/profile' className={styleHeader.link}>
        <div className={styleHeader.container}>
          <ProfileIcon type="secondary" />
          <p className='mr-5 ml-2 text text_type_main-default'>Личный кабинет</p>
        </div>
      </Link>
    </header>
  );
};

export default AppHeader;
