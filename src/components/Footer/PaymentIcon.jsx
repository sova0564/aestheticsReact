import style from './Footer.module.css';
import React, { useState } from 'react';
import mastercardImgDefault from '../../images/icons/mastercard_default.svg';
import mastercardImgHover from '../../images/icons/mastercard_hover.svg';
import visaImgDefault from '../../images/icons/visa_default.svg';
import visaImgHover from '../../images/icons/visa_hover.svg';
import apayImgDefault from '../../images/icons/apay_default.svg';
import apayImgHover from '../../images/icons/apay_hover.svg';

function Payment() {
    const [mastercardIcon, setMastercardIcon] = useState(mastercardImgDefault);
    const [visaIcon, setVisaIcon] = useState(visaImgDefault);
    const [apayIcon, setApayIcon] = useState(apayImgDefault);

  const handleMastercardMouseOver = () => {
    setMastercardIcon(mastercardImgHover);
  };

  const handleMastercardMouseOut = () => {
    setMastercardIcon(mastercardImgDefault);
  };
    
    const handleVisaMouseOver = () => {
    setVisaIcon(visaImgHover);
  };

  const handleVisaMouseOut = () => {
    setVisaIcon(visaImgDefault);
  };
    
    const handleApayMouseOver = () => {
    setApayIcon(apayImgHover);
  };

  const handleApayMouseOut = () => {
    setApayIcon(apayImgDefault);
  };
    return (<div>
        <ul className={style.listStyleIcon}>
        <li className={style.iconSize}>
            <img
              src={mastercardIcon}
              alt="Mastercard"
              onMouseOver={handleMastercardMouseOver}
              onMouseOut={handleMastercardMouseOut}
            />
            </li>
             <li className={style.iconSize}>
            <img
              src={visaIcon}
              alt="Visa"
              onMouseOver={handleVisaMouseOver}
              onMouseOut={handleVisaMouseOut}
            />
            </li>
             <li className={style.iconSize}>
            <img
              src={apayIcon}
              alt="Apay"
              onMouseOver={handleApayMouseOver}
              onMouseOut={handleApayMouseOut}
            />
            </li>
            </ul>
    </div>);
}

export default Payment;