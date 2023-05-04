import { Outlet, Link } from "react-router-dom";
import style from './Cart.module.css';
import "../../../App.css";
import CatalogBtn from "../../Utils/CatalogBtn";
import fluid from '../../../images/products/fluid_dry_skin.png';

function Cart() {
    return <div className='AppLayout'>
            <div className={style.wrap}>
            <h3 className={style.title}>Оформлення замовлення</h3>
            <ul className={style.list}>
                <li className={style.wrapList}><div className={style.numberLink}>1</div><Link to="/cart/" className={style.listItem}>Особисті данні </Link></li>
                <li className={style.wrapList}><div className={style.numberLink}>2</div><Link to="/cart/payment" className={style.listItem}>Оплата / Доставка</Link></li>
            </ul>
        <Outlet />
        </div>
        <div className={style.wrapCartProducts}>
            <div className={style.wrapScroll}>
                <div className={style.wrapCartProduct}>
                    <img src={fluid} alt="product" className={style.image} />
                    <p className={style.titleProduct}>Флюид для обличчя для сухої шкіри</p>
                    <input type="number" min='1' max='10' placeholder='1' step="1" className={style.input} />
                    <p className={style.price}> 630 грн </p>
                    <div className={style.button}>X</div>
                </div>
            </div>
            <p className={style.textPrice}>Загальна сумма: 2800 грн</p> 
        </div>
        <div className={style.wrapButton}>
            <CatalogBtn className="button" description="Оформити"/>
        </div>
    </div>
}

export default Cart;