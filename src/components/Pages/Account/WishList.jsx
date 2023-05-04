import CatalogBtn from '../../Utils/CatalogBtn';
import style from './WishList.module.css';
import fluid from '../../../images/products/fluid_dry_skin.png';
import star from '../../../images/icons/star_hover.svg';

function WishList() {
    return (<div className={style.wrapScroll}>
        <div className={style.wrap}>
            <div className={style.wrapImgAndBtn}>
            <img src={fluid} alt="product" className={style.image} />
            <div className={style.wrapBtn}>
                <img src={star} alt="stars" className={style.imgStar} />
                <p className={style.links}>В наявності</p>
            </div>
            </div>
            <p className={style.title}>Флюид для обличчя для сухої шкіри</p>
            <p className={style.text}> 630 грн </p>
            <div className={style.wrapBtn}>
                <CatalogBtn className="buttonSmall" description='В кошик' />
                <p className={style.links}>Видалити</p>
            </div>
        </div>
    </div>)
}
export default WishList;