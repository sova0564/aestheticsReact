import BackToHome from '../../Utils/BackToHome';
import style from './Blog.module.css';
import "../../../App.css";
import { useParams } from "react-router-dom";




function Blog(props) {
    const { id } = useParams();
    const blog = props.blogMainSection.find((a) => a.id === parseInt(id));
    return <div className='AppLayout'>
        <BackToHome to='/'/>
        <h3 className={style.title}>{blog.title}</h3>
        <div className={style.wrap}>
            <img src={blog.image} alt="eye" className={style.image} />
            <p className={style.description}>{blog.p1}</p>
        </div>
        <p className={style.description}>{blog.p2}</p>
        <div className={style.wrap}> 
            <p className={style.description}> {blog.p3} </p>
              <img src={blog.imageRight} alt="eye" className={style.image}/>
        </div>
        <p className={style.description}>{blog.p4}</p>
    </div>
}

export default Blog;