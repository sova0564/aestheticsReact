import MainBlogSection from './MainBlogSection';
import "../../../App.css";

function MainBlog(props) {
   

    let blogMainSectionElements = props.blogMainSection.map(p => <MainBlogSection key={p.id} id={p.id} side={p.side} image={p.image} title={p.title} text={p.text} />)
    
    return (<div className='AppLayout'>
        {/* <MainBlogSection side='imageLeft' image={eyeBlogImg} title='Акне та стрес' text='Досить часто високий рівень кортизолу буває в людей, які не дотримуються «біологічного годинника». Природа нам дала режим : «лягай спати об 10-11 вечора, в цей час твоє тіло випрацьовує мелатонін -  один із щитів захисту твого організму». Тепер питання: «о котрій годині лягаєте спати ви?...'/>
        <MainBlogSection side='imageRight' image={faceBlogImg} title='Догляд за обличчям' text='Добре відомо що тип шкіри можна поділити на 4 види (є й інші розподіли, наводжу цей, бо як на мене він найзрозуміліший): нормальна – в міру суха та зволожена, добре збалансована; суха – груба на дотик , шершава, тьмяна; жирна – блищить та має видимі розкриті пори...'/>
        <MainBlogSection side='imageLeft' image={creamBlogImg} title='Звикання до косметики' text='Медицина говорить про те, що справжнє звикання може бути до антибіотиків та гормонів. І то через безконтрольне і неправильне застосування. Що ховається за тим, що нам здається, що шкіра звикла? Результат був, а зараз ні?...'/> */}
         {blogMainSectionElements} 
    </div>);
}

export default MainBlog; 