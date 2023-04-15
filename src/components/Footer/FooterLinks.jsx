import Contacts from './Contacts';
import style from './Footer.module.css';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import Payment from './PaymentIcon';
import Schedule from './Schedule';

function FooterLinks() {
    return (<div className={style.wrapFooterLinks}>
        <div className={style.bottomFooterLinks}>
        <Logo />
        <NavigationLinks />
            <Schedule />
            <div>
                <Contacts />
                <Payment/>
            </div>
        </div>
    </div>
    );
}

export default FooterLinks;