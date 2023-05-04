import { Link } from 'react-router-dom';
import style from './Footer.module.css';

function NavigationLinks() {
  return (<div>
    <nav>
      <ul className={`${style.listStyle} ${style.navDecoration}`}>
        <li><Link to="/catalog" className={`${style.listItem} ${style.listItemLinks}`}>Каталог</Link></li>
        <li><Link to="/delivery" className={`${style.listItem} ${style.listItemLinks}`}>Доставка та оплата</Link></li>
        <li><Link to="/blog/1" className={`${style.listItem} ${style.listItemLinks}`}>Блог</Link></li>
        <li><Link to="/contacts" className={`${style.listItem} ${style.listItemLinks}`}>Контакти</Link></li>
      </ul>
    </nav>
  </div>);
}

export default NavigationLinks;