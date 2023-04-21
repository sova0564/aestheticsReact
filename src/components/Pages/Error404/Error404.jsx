import errorImg from '../../../images/errorPage/error.png';
import style from './Error404.module.css';

function Error404() {
    return (<div>
        <div className={style.wrap}> 
            <img src={errorImg} alt='error'  className={style.image}/>
        </div>
    </div>)
}

export default Error404;