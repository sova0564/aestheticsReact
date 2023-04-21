import DeliveryAndPaymentInformation from './DeliveryAndPaymentInformation';
import "../../../App.css";

function DeliveryAndPayment(props) {

      let deliverySectionElements = props.deliverySection.map(p => <DeliveryAndPaymentInformation side={p.side} title={p.title} subtitle={p.subtitle} scroll={p.scroll} p1={p.p1} p2={p.p2} p3={p.p3} p4={p.p4} p5={p.p5} p6={p.p6} p7={p.p7} p8={p.p8} p9={p.p9} p10={p.p10} p11={p.p11} p12={p.p12} p13={p.p13} p14={p.p14} />)

      return (<div className='AppLayout' >
          {deliverySectionElements}
    </div>)
}

export default DeliveryAndPayment;