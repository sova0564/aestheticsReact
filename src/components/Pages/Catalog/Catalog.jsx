import BackToHome from '../../Utils/BackToHome';
import "../../../App.css";
import Products from './Products';
import style from './Catalog.module.css';
import Sorting from './Sorting';
import AccordionType from './AccodionType';

function Catalog(props) {

    return (<div className='AppLayout'>
        <BackToHome />
        <div className={style.wrapCatalog}>
            <AccordionType accordionType={props.accordionType} />
            <div>
            <Sorting/>
                <Products products={props.products} />
                </div>
            </div>
    </div>)
}

export default Catalog;