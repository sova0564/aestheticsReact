import style from './DeliveryAndPayment.module.css';

function DeliveryAndPaymentInformation(props) {
    return (<div className={style.wrap}>
        <div className={`${style[props.side]}`}>
        <div className={style.wrapTitle}>
            <h2 className={style.title}>{props.title}</h2>
            <p className={style.subtitle}>{props.subtitle}</p>
            </div>
            </div>
        <div className={`${style[props.scroll]} ${style.wrapDesc}`}>
            <p className={style.description}>{props.p1} <br /> <br /> {props.p2} <br /><br /> {props.p3} <br /><br /> {props.p4} <br /><br /> {props.p5} <br /><br /> {props.p6} <br /><br /> {props.p7} <br /><br /> {props.p8} <br /><br /> {props.p9} <br /><br /> {props.p10} <br /><br /> {props.p11} <br /><br /> {props.p12} <br /><br /> {props.p13} <br /><br /> {props.p14} </p>
        </div>
    </div>)
}

export default DeliveryAndPaymentInformation;