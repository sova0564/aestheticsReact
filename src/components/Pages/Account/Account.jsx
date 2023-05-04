import { Outlet, Link } from "react-router-dom";
import style from './Account.module.css';
import "../../../App.css";

function Account(props) {

    return (
        <div className='AppLayout'>
        <div className={style.wrap}>
            <h3 className={style.title}>Особистий кабінет</h3>
            <ul className={style.list}>
                <li><Link to="/account/" className={style.listItem}>Контактна інформація </Link></li>
                <li><Link to="/account/address" className={style.listItem}>Адресна книга</Link></li>
                <li><Link to="/account/wishList" className={style.listItem}>Список бажань</Link></li>
                <li><Link to="/account/history" className={style.listItem}>Історія замовлень</Link></li>
            </ul>
        <Outlet />
        </div>
      </div>
    )
}

export default Account;