import style from './Payment.module.css';

function PaymentCart() {
    return (<div className={style.wrap}>
        <div className={style.wrapList}>
            <p className={style.text}>Оберіть спосіб доставки:</p>
            <ul className={style.list}>
                <li className={style.text}>Нова пошта</li>
                <li className={style.text}>Доставка кур’єром (безкоштовно від 2000 грн)</li>
            </ul>
            <p className={style.text}>Оберіть спосіб оплати:</p>
            <ul className={style.list}>
                <li className={style.text}>Оплата при отриманні</li>
                <li className={style.text}>Банківською картою</li>
            </ul>
        </div>
        <div className={style.wrapList}>
            <p className={style.text}>Оберіть адресу доставки:</p>
            <ul className={style.list}>
                <li className={style.wrapDelivery}>
                    <p className={style.text}>Шевченко Світлана</p>
                    <p className={style.text}>Місто КиЇв </p>
                    <p className={style.text}>Градинська 11б, 85</p>
                    <p className={style.text}>+38 068 564 77 99</p>
                </li >
                <li className={style.wrapDelivery} >
                    <p className={style.text}>Шевченко Світлана</p>
                    <p className={style.text}>Місто КиЇв </p>
                    <p className={style.text}>Градинська 11б, 85</p>
                    <p className={style.text}>+38 068 564 77 99</p>
                </li>
            </ul>
        </div>
    </div>)
}

export default PaymentCart;