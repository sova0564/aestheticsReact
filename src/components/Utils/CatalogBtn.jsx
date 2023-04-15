import { NavLink } from "react-router-dom";
import style from './CatalogBtn.module.css';

function CatalogBtn() {
    return (<div>
        <NavLink to='/' className={style.button}>Каталог</NavLink>
    </div>);
}

export default CatalogBtn;