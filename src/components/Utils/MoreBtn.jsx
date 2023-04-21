import style from './MoreBtn.module.css';
import { NavLink } from "react-router-dom";

function MoreBtn(props) {
    return (<div>
        <NavLink to={props.to} className={`${style[props.className]}`}>{props.description}</NavLink>
    </div>)
}

export default MoreBtn;