import { NavLink } from "react-router-dom";
import style from './CatalogBtn.module.css';

function CatalogBtn(props) {
    return (<div>
        <NavLink to={props.to} onClick={props.onClick} className={`${style[props.className]}`}>{props.description}</NavLink>
    </div>);
}

export default CatalogBtn;