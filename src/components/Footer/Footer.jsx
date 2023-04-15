import ContactIcons from './ContactIcons';
import style from './Footer.module.css';
import FooterLinks from './FooterLinks';

function Footer() {
    return (<div>
        <div className={`${style.wrapContactIcons} ${style.wrap}`}>
            <ContactIcons />
        </div>
        <div className={style.wrapFooterLinks}>
            <div className={style.wrap}>
                <FooterLinks/>
            </div>
        </div>
    </div>);
};

export default Footer;