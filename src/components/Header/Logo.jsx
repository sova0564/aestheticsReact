import logoImg from '../../images/logos/logo_green.svg';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <div>
            <NavLink to="/">
                <img src={logoImg} alt="Aesthetics" />
            </NavLink>
        </div>
    );
}

export default Logo;