import React, { useState } from 'react';
import CatalogBtn from "../../Utils/CatalogBtn";
import MoreBtn from "../../Utils/MoreBtn";
import style from './Catalog.module.css';
import favoriteDefault from '../../../images/icons/favorite_default.svg';
import favoriteHover from '../../../images/icons/favorite_active.svg';

function Product(props) {
    const [favoriteIcon, setFavoriteIcon] = useState(favoriteDefault);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        setFavoriteIcon(isFavorite ? favoriteDefault : favoriteHover);
    };
    return (<div key={props.id} className={style.wrapProduct}>
        <div className={style.wrapImage}>
            <img src={favoriteIcon} className={style.favoriteIcon}  onClick={handleFavoriteClick} alt='favorite'/>
            <img src={props.image} alt="Product" className={style.image} />
        </div>
        <div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.price}>{props.price}грн</p>
            <div className={style.wrapBtn}>
                <MoreBtn description='Детальніше' to={`/product/${props.id}`} className='buttonSmall'/>
                <CatalogBtn description='В кошик' className='buttonSmall' />
            </div>
        </div>
    </div>)
};

export default Product;