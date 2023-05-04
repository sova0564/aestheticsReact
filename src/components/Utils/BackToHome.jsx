import style from './BackToHome.module.css';
import BackArrow from '../../images/icons/back_arrow-left.svg';
import { NavLink } from "react-router-dom";

function BackToHome(props) {
    return (<div className={style.wrap}>
       <NavLink to={props.to}>
            <img src={BackArrow} alt='Back' />
       </NavLink>
    </div>)
}

export default BackToHome;