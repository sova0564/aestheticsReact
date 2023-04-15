import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import cabinetImgDefault from '../../images/icons/cabinet_default.svg';
import cabinetImgHover from '../../images/icons/cabinet_hover.svg';
import favoriteImgDefault from '../../images/icons/favorite_default.svg';
import favoriteImgHover from '../../images/icons/favorite_hover.svg';
import basketImgDefault from '../../images/icons/basket_default.svg';
import basketImgHover from '../../images/icons/basket_hover.svg';

function UserLinks() {
  const [cabinetIcon, setCabinetIcon] = useState(cabinetImgDefault);
  const [favoriteIcon, setFavoriteIcon] = useState(favoriteImgDefault);
  const [basketIcon, setBasketIcon] = useState(basketImgDefault);

  const handleCabinetMouseOver = () => {
    setCabinetIcon(cabinetImgHover);
  };

  const handleCabinetMouseOut = () => {
    setCabinetIcon(cabinetImgDefault);
  };

  const handleFavoriteMouseOver = () => {
    setFavoriteIcon(favoriteImgHover);
  };

  const handleFavoriteMouseOut = () => {
    setFavoriteIcon(favoriteImgDefault);
  };

  const handleBasketMouseOver = () => {
    setBasketIcon(basketImgHover);
  };

  const handleBasketMouseOut = () => {
    setBasketIcon(basketImgDefault);
  };

  return (
    <div>
      <ul className={style.listStyle}>
        <li className={style.iconSize}>
          <Link to="/home">
            <img
              src={cabinetIcon}
              alt="Cabinet"
              onMouseOver={handleCabinetMouseOver}
              onMouseOut={handleCabinetMouseOut}
            />
          </Link>
        </li>
        <li className={style.iconSize}>
          <Link to="/home">
            <img
              src={favoriteIcon}
              alt="Favorite"
              onMouseOver={handleFavoriteMouseOver}
              onMouseOut={handleFavoriteMouseOut}
            />
          </Link>
        </li>
        <li className={style.iconSize}>
          <Link to="/home">
            <img
              src={basketIcon}
              alt="Basket"
              onMouseOver={handleBasketMouseOver}
              onMouseOut={handleBasketMouseOut}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserLinks;