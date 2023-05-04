import style from './History.module.css';
import fluid from '../../../images/products/fluid_dry_skin.png';
import star from '../../../images/icons/star_hover.svg';
import MoreBtn from '../../Utils/MoreBtn';

function History() {
    return (<div className={style.wrap}>
        <div className={style.wrapOrders}>
        <div className={style.wrapOrder}>
            <p className={style.text}>Замовлення №5647</p>
            <div className={style.wrapText}>
                <div>
                <p className={style.text}>Дата замовлення: </p>
                <p className={style.text}>9.08.2022</p>
            </div>
                <div>
                <p className={style.text}>Статус: </p>
                <p className={style.text}>В обробці</p>
            </div>
            </div>
            <div className={style.scroll}>
            <div className={style.wrapProduct}>
                <div className={style.wrapImageAndText}>
                <img src={fluid} alt="product" className={style.image} />
                <div className={style.wrapTextProduct}>
                    <p className={style.title}>Флюид для обличчя для сухої шкіри</p>
                     <p className={style.textProduct}>1 шт</p>
                </div>
                </div>
                <div className={style.wrapTextProduct}>
                    <img src={star} alt="star" className={style.imgStar} />
                     <p className={style.textProduct}>630 грн</p>
                </div>
                </div>  
            </div>
            <p className={style.text}>Загальна сумма: 3220 грн</p>
        </div>
        </div>
        <div className={style.wrapButton}>
            <MoreBtn className="button" description="Показати ще" />
        </div>
         
    </div>
    )
}
export default History;