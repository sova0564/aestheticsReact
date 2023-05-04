import style from './Catalog.module.css';
import React, { useState } from "react";

function Sorting(props) {
    const [isOpen, setIsOpen] = useState(false);

  const handleSortingClick = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSortingOptionClick = (option) => {
    props.onSortingOptionSelect(option);
    setIsOpen(false);
  };


    return (<div className={style.sorting}>
        <h3 onClick={handleSortingClick} className={style.titleSorting}> Сортування &#8595;</h3>
        {isOpen && (
                <ul className={style.listSorting}>
                <li className={style.itemSorting} onClick={() => handleSortingOptionClick("popularity")}>За популярністю </li>
                <li className={style.itemSorting} onClick={() => handleSortingOptionClick('rating')}>За рейтингом </li>
                <li className={style.itemSorting} onClick={() => handleSortingOptionClick('price-high')}>За ціною: від вищої </li>
                <li className={style.itemSorting} onClick={() => handleSortingOptionClick('price-low')}>За ціною: від нищої </li>
            </ul>
             )}
    </div>)
};

export default Sorting;