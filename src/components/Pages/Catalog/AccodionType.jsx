import style from './AccordionType.module.css';
import React, { useState } from "react";
import checkboxDefault from '../../../images/icons/checkbox_default.svg';
import checkboxHover from '../../../images/icons/checkbox_hover.svg';

function AccordionType(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFavoriteClick = (item) => {
    item.isFavorite = !item.isFavorite;
  };
  
  return (
    <div className={style.wrap}>
       <aside>
     <ul className={style.list}>
          {props.accordionType.map((accordion, index) => (
            <li key={accordion.id}>
              <h3 className={style.title} onClick={() => handleAccordionClick(index)}>
                {accordion.title}
              </h3>
              {activeIndex === index && (
                <ul className={style.list}>
                  {accordion.items.map((item) => (
                      <li key={item.id} className={style.listItem}>
                          <img src={item.isFavorite ? checkboxHover : checkboxDefault} onClick={() => handleFavoriteClick(item)} alt='checkbox'/>
                      <p className={style.item}>{item.item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
    </aside>
    </div>
  );
}

export default AccordionType;