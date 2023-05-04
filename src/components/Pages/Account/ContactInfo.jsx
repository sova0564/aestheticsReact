import style from './ContactInfo.module.css';
import CatalogBtn from '../../Utils/CatalogBtn';
import MoreBtn from '../../Utils/MoreBtn';

function ContactInfo() {
    return (<div>
        <form action="" className={style.form}>
            <div>
                <label for="name" className={style.label}>Ваше ім’я </label><br/>
                <input
                  type="text"
                    min="2"
                    id="name"
                    name="name"
                  className={style.input}
                  placeholder="Світлана"
                  required
                /><br/>
                <label for="surname" className={style.label}>Ваше прізвище</label><br/>
                 <input
                  type="text"
                    min="2"
                    id="surname"
                    name="surname"
                  className={style.input}
                  placeholder="Шевченко "
                  required
                /><br/>
                <label for="email" className={style.label}>E-mail </label><br/>
                 <input
                  type="email"
                    min="2"
                    id="email"
                    name="email"
                  className={style.input}
                  placeholder="shevSv002@gmail.com"
                  required
                /><br/>
            </div>
            <div>
                <label for="phoneNumber" className={style.label}>Номер телефону</label><br/>
                 <input
                  type="tel"
                    min="2"
                    id="phoneNumber"
                    name="phoneNumber"
                  className={style.input}
                  placeholder="+38 068 564 77 99"
                  required
                /><br />
                <label for="birthday" className={style.label}>Дата народження</label><br/>
                 <input
                  type="date"
                    min="2"
                    id="birthday"
                    name="birthday"
                  className={style.input}
                  required
                /><br />
                <MoreBtn className='button' description='Вийти'/>
            </div>
        </form>
            <CatalogBtn className='button' description='Зберегти' />
            
    </div>)
}
export default ContactInfo;