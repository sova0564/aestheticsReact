import style from './Footer.module.css';

function Schedule() {
  return (<div>
    <nav>
      <ul className={`${style.listStyle} ${style.navDecoration}`}>
        <li className={style.listItem}>Режим роботи:</li>
        <li className={style.listItem}>Понеділок - Субота</li>
        <li className={style.listItem}>З 9:00 до 21:00</li>
      </ul>
    </nav>
  </div>);
}

export default Schedule;