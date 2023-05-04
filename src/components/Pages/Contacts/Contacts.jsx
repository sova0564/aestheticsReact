import { useState } from 'react';
import "../../../App.css";
import style from './Contacts.module.css';
import background from '../../../images/contactsPage/background.png';
import CatalogBtn from "../../Utils/CatalogBtn";

function Contacts() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  }

    return <div className='AppLayout'>
        <div className={style.background}>
        <img src={background} alt="background" />
        {showMessage ?
          <div className={style.wrap}>
            <h2 className={style.title}>Дякуємо!</h2>
            <p className={style.subtitle}>Ми вже телефонуємо вам</p>
          </div>  :
          <div className={style.wrap}>
            <ul className={style.list}>
              <li>Режим роботи:</li>
              <li>Понеділок - Субота</li>
              <li>З 9:00 до 21:00</li>
              <li>+38 (063) 554 22 21</li>
              <li>+38 (095) 678 99 00</li>
            </ul>
            <div className={style.whiteLine}></div>
            <div className={style.wrapFromAndBtn}>
              <form action="" className={style.form}>
                <input
                  type="text"
                  min="2"
                  className={style.input}
                  placeholder="Ваше им’я"
                  required
                />
                <input
                  type="tel"
                  maxlength="16"
                  className={style.input}
                  placeholder="Номер телефону"
                  required
                />
            
              </form>
              <CatalogBtn className='buttonWhite' description='Передзвоніть'onClick={handleButtonClick}/>
            </div>
          </div>}
            </div>
    </div>
}

export default Contacts;