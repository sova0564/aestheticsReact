import style from './BackToHome.module.css';
import BackArrow from '../../images/icons/back_arrow-left.svg';
import { NavLink } from "react-router-dom";

function BackToHome() {
    return (<div className={style.wrap}>
       <NavLink to='/'>
            <img src={BackArrow} alt='Back' />
       </NavLink>
    </div>)
}

export default BackToHome;