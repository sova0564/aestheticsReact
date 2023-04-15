import style from './Footer.module.css';

function Contacts() {
  return (<div>
    <nav>
      <ul className={`${style.listStyle} ${style.navDecoration}`}>
        <li className={style.listItem}>Політика конфіденційності</li>
        <li className={style.listItem}>+38 (063) 554 22 21 </li>
        <li className={style.listItem}>+38 (095) 678 99 00 </li>
      </ul>
    </nav>
  </div>);
}

export default Contacts;