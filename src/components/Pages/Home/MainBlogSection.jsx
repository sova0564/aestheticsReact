import MoreBtn from '../../Utils/MoreBtn';
import style from './MainBlog.module.css';


function MainBlogSection(props) {
    return (<div key={props.id} className={`${style[props.side]}`}>
        <div>
            <img src={props.image} className={style.image} alt="Blog" />
        </div>
        <div className={style.wrap}>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.text}</p>
            <MoreBtn description='Детальніше' to={`/blog/${props.id}`} className='button'/>
        </div>
    </div>)
}

export default MainBlogSection;