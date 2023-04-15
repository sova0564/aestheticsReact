import { NavLink } from 'react-router-dom';
import style from './Footer.module.css';
import React, { useState } from 'react';
import instagramImgDefault from '../../images/icons/instagram_default.svg';
import instagramImgHover from '../../images/icons/instagram_hover.svg';
import emailImgDefault from '../../images/icons/email_default.svg';
import emailImgHover from '../../images/icons/email_hover.svg';
import phoneImgDefault from '../../images/icons/phone_default.svg';
import phoneImgHover from '../../images/icons/phone_hover.svg';
import addressImgDefault from '../../images/icons/address_default.svg';
import addressImgHover from '../../images/icons/address_hover.svg';

function ContactIcons() {
    const [instagramIcon, setInstagramIcon] = useState(instagramImgDefault);
    const [emailIcon, setEmailIcon] = useState(emailImgDefault);
    const [phoneIcon, setPhoneIcon] = useState(phoneImgDefault);
    const [addressIcon, setAddressIcon] = useState(addressImgDefault);

  const handleInstagramMouseOver = () => {
    setInstagramIcon(instagramImgHover);
  };

  const handleInstagramMouseOut = () => {
    setInstagramIcon(instagramImgDefault);
  };
    
    const handleEmailMouseOver = () => {
    setEmailIcon(emailImgHover);
  };

  const handleEmailMouseOut = () => {
    setEmailIcon(emailImgDefault);
  };
    
    const handlePhoneMouseOver = () => {
    setPhoneIcon(phoneImgHover);
  };

  const handlePhoneMouseOut = () => {
    setPhoneIcon(phoneImgDefault);
  };
    
    const handleAddressMouseOver = () => {
    setAddressIcon(addressImgHover);
  };

  const handleAddressMouseOut = () => {
    setAddressIcon(addressImgDefault);
  };
    return (<div>
<ul className={style.listStyleIcon}>
        <li className={style.iconSize}>
          <NavLink to="/">
            <img
              src={instagramIcon}
              alt="Instagram"
              onMouseOver={handleInstagramMouseOver}
              onMouseOut={handleInstagramMouseOut}
            />
          </NavLink>
        </li>
        <li className={style.iconSize}>
          <NavLink to="/">
            <img
              src={emailIcon}
              alt="Email"
              onMouseOver={handleEmailMouseOver}
              onMouseOut={handleEmailMouseOut}
            />
          </NavLink>
        </li>
        <li className={style.iconSize}>
          <NavLink to="/">
            <img
              src={phoneIcon}
              alt="Phone"
              onMouseOver={handlePhoneMouseOver}
              onMouseOut={handlePhoneMouseOut}
            />
          </NavLink>
            </li>
            <li className={style.iconSize}>
          <NavLink to="/">
            <img
              src={addressIcon}
              alt="Address"
              onMouseOver={handleAddressMouseOver}
              onMouseOut={handleAddressMouseOut}
            />
          </NavLink>
        </li>
      </ul>
    </div>);
}

export default ContactIcons;