import style from './Header.module.css';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import UserLinks from './UserLinks';

function Header() {
    
    return (<div className={style.wrap}>
        <Logo />
        <NavigationLinks />
        <UserLinks />
    </div>);
}

export default Header;