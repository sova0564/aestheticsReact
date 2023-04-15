import logoImg from '../../images/logos/logo_white.svg';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div>
            <Link to="/">
                <img src={logoImg} alt="Aesthetics" />
            </Link>
        </div>
    );
}

export default Logo;