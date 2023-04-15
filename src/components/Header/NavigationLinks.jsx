import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function NavigationLinks() {
  return (<div>
    <nav>
      <ul className={`${style.listStyle} ${style.navDecoration}`}>
        <li><NavLink to="/catalog" className={style.listItem}>Каталог</NavLink></li>
        <li><NavLink to="/delivery" className={style.listItem}>Доставка та оплата</NavLink></li>
        <li><NavLink to="/blog" className={style.listItem}>Блог</NavLink></li>
        <li><NavLink to="/contacts" className={style.listItem}>Контакти</NavLink></li>
      </ul>
    </nav>
  </div>);
}

export default NavigationLinks;