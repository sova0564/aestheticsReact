import Product from "./Product";
import style from './Catalog.module.css';

function Products(props) {
    let productElements = props.products.map(p => <Product key={p.id} id={p.id} image={p.image} title={p.title} price={p.price} />)
    return (<div className={style.wrapProducts}>
        {productElements}
    </div>)
};

export default Products;