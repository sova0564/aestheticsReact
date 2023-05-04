import style from './Personal.module.css';

function PersonalInfoCart() {
    return (<div>
        <form className={style.form}>
            <label for="name" className={style.label}>Ваше ім’я та прізвище </label>
                <input
                  type="text"
                    min="2"
                    id="name"
                    name="name"
                  className={style.input}
                  placeholder="Шевченко Світлана"
                  required
            />
            <label for="email" className={style.label}>E-mail </label>
                <input
                  type="email"
                    min="2"
                    id="email"
                    name="email"
                  className={style.input}
                  placeholder="shevSv002@gmail.com"
                  required
            />
            <label for="tel" className={style.label}>Номер телефону</label>
                <input
                  type="tel"
                    min="2"
                    id="tel"
                    name="tel"
                  className={style.input}
                  placeholder="+38 068 564 77 99"
                  required
                />
            </form>
    </div>)
}

export default PersonalInfoCart;