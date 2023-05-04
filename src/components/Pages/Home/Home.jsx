import style from './Home.module.css'
import CatalogBtn from "../../Utils/CatalogBtn";
import MainSection from "./MainSection";
import Slider from "./Slider";
import MainBlog from './MainBlog';
import CatalogMoreBtn from '../../Utils/CatalogMoreBtn';
import { useState } from 'react';


function Home(props) {

    const [numBlogs, setNumBlogs] = useState(3);
  const allBlogsDisplayed = numBlogs >= props.blogMainSection.length;

  const handleMoreBlogsClick = () => {
    setNumBlogs(numBlogs + 1);
  };

  const displayedBlogs = props.blogMainSection.slice(0, numBlogs);
    
    return <div>
        <MainSection />
        <Slider />
            <div className={style.MainButton}>
                <CatalogBtn to='/catalog' description='Каталог' className='button' />
            </div>
        <MainBlog blogMainSection={displayedBlogs} />
        {!allBlogsDisplayed && (
        <div className={style.MainButton}>
            <CatalogMoreBtn  description='Показати ще' onClick={handleMoreBlogsClick}/>
            </div>
            )}
    </div>
}
     
export default Home;