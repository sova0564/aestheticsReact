import style from './RecentProducts.module.css';
import "../../../App.css";

function RecentProducts(props) {
    return (<div className='AppLayout'>
        <h4 className={style.title}>{props.title}</h4>
        <div className={style.wrapProducts}>
        {props.recentProducts.map((p) =>  
            (<div className={style.wrapProduct} key={p.id} id={p.id}>
                <img src={p.image} alt="product" className={style.image} />
                <p className={style.text}>{p.titleProduct}</p>
                <p className={style.price}>{p.price}грн</p>
            </div>))}
        </div>
    </div>)
}

export default RecentProducts;