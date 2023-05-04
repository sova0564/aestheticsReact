import { useState } from 'react';
import style from './Address.module.css';
import CatalogBtn from '../../Utils/CatalogBtn';

function Address() {

  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAddress = {
      name: event.target.name.value,
      сity: event.target.сity.value,
      street: event.target.street.value,
      housing: event.target.housing.value,
      apartment: event.target.apartment.value,
      post: event.target.post.value,
      phone: event.target.phone.value,
    };

    setAddresses([...addresses, newAddress]);
    event.target.reset();
  };

  const handleSave = () => {
    console.log('Сохранено:', addresses);
  }

  const handleDelete = (index) => {
    const filteredAddresses = addresses.filter((address, i) => i !== index);
    setAddresses(filteredAddresses);
  };
  
    return (<div >
      <div className={style.wrap}>
        <div className={style.wrapInform}>
            {addresses.map((address, index) => (
        <div key={index}>
          <div className={style.ellipse}>
            <p className={style.ellipseNum}>{index + 1}</p>
          </div>
          <div className={style.wrapText}>
            <p>{address.name}</p>
            <p>{address.сity}</p>
            <p>
              {address.street}, {address.housing}, {address.apartment}
            </p>
            <p>{address.phone}</p>
            <div className={style.button}>
              <button>Редагувати</button>
              <button onClick={() => handleDelete(index)}>Видалити</button>
            </div>
          </div>
        </div>
      ))}
      </div>         
            
            <form onSubmit={handleSubmit} className={style.form}>
                <h3 className={style.title}>Додати нову адресу:</h3>
                <input
                  type="text"
                  min="2"
                  id="name"
                  name="name"
                  className={style.input}
                  placeholder="ПІБ"
                  required
                /><br />
                <input
                  type="text"
                  min="2"
                  id="сity"
                  name="сity"
                  className={style.input}
                  placeholder="Місто"
                  required
                /><br />
                <input
                  type="text"
                  min="2"
                  id="street"
                  name="street"
                  className={style.inputSmall}
                  placeholder="Вулиця "
                  required
                />
                <input
                  type="number"
                  id="housing"
                  name="housing"
                  className={style.inputSmall}
                  placeholder="Корпус"
                  required
                />
                <input
                  type="number"
                  id="apartment"
                  name="apartment"
                  className={style.inputSmall}
                  placeholder="Квартира"
                  required
                /><br />
                <input
                  type="number"
                  id="post"
                  name="post"
                  className={style.input}
                  placeholder="Поштове відділення"
                  required
                /><br />
                <input
                  type="tel"
                  min="2"
                  id="phone"
                  name="phone"
                  className={style.input}
                  placeholder="Номер телефону"
                  required
                /><br/>
            </form>
        </div>
         <CatalogBtn className='button' description='Зберегти' onClick={handleSave}/>
    </div>)
}
export default Address;