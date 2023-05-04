import style from './MainSection.module.css';
import backgroundImg from '../../../images/homeAndBlogPage/woman_leaf_main.png';
import CatalogBtn from '../../Utils/CatalogBtn';

function MainSection() {
    return (
        <div className={style.wrap}>
            <div className={style.background}>
                <img src={backgroundImg} alt='Background page' />
            </div>
            <div className={style.wrapText}>
              <h2 className={style.title}>
                Український бренд доглядової косметики для обличчя
              </h2>
              <p className={style.description}>
                Українська професійна косметика AESTHETICS користується великою
                популярністю завдяки високій якості, ефективності та оптимальної
                вартості. Це косметика для домашнього використання, яка
                забезпечує салонний догляд.
          </p>
          <CatalogBtn to='/catalog' description='Каталог' className='button'/>
            </div>
            </div>
  );
}

export default MainSection;