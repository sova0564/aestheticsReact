import style from './Home.module.css'
import CatalogBtn from "../../Utils/CatalogBtn";
import MainSection from "./MainSection";
import Slider from "./Slider";
import MainBlog from './MainBlog';
import MoreBtn from '../../Utils/MoreBtn';



function Home(props) {
    
    return <div>
        <MainSection />
        <Slider />
        <div className={style.MainButton}>
             <CatalogBtn description='Каталог' className='button'/>
        </div>
        <MainBlog blogMainSection={props.blogMainSection} />
        <div className={style.MainButton}>
            <MoreBtn description='Показати ще' className='button'/>
        </div>
    </div>
}
     
export default Home;