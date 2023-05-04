import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import "../../../App.css";
import style from './ProductCard.module.css';
import BackToHome from '../../Utils/BackToHome';
import CatalogBtn from "../../Utils/CatalogBtn";
import favoriteDefault from '../../../images/icons/favorite_default.svg';
import favoriteHover from '../../../images/icons/favorite_active.svg';
import RecentProducts from "../Catalog/RecentProducts";
 

function ProductCard(props) {
    const { id } = useParams();
    const product = props.products.find((a) => a.id === parseInt(id));

    const [favoriteIcon, setFavoriteIcon] = useState(favoriteDefault);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        setFavoriteIcon(isFavorite ? favoriteDefault : favoriteHover);
    }
    return (<div className='AppLayout'>
        <BackToHome to='/catalog' />
        <div className={style.wrapRow}>
            <img src={product.image} alt='product' className={style.image} />
            <div className={style.wrapColmn}>
                <h2 className={style.title}>{product.title}</h2>
                
                <p className={style.desc}>{product.desc}</p>
                <div className={style.wrapRow}>
                    <p className={style.title}>{product.price} грн</p>
                    <img src={favoriteIcon} className={style.favoriteIcon}  onClick={handleFavoriteClick} alt='favorite'/>
                </div>
                <div className={style.wrapRow}>
                    <input type="number" min='1' max='10' placeholder='1' step="1" className={style.input} />
                    <CatalogBtn className='button' description='В кошик'/>
                </div>
                
            </div>
        </div>
        <div>
        <div className={style.wrapComposition}>
            <h3 className={style.title}>Склад</h3>
            <h3 className={style.title}>Відгуки</h3>
        </div>
            <div>
                <p className={style.desc}>{product.composition}</p>
            </div>
        </div>
        <RecentProducts title='Схожі товари:' recentProducts={props.recentProducts}/>
    </div>)
};

export default ProductCard;