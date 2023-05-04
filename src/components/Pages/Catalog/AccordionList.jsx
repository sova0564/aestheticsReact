import style from './AccordionType.module.css';
import React, { useState } from "react";

function AccordionList() {
    const [checkedItems, setCheckedItems] = useState({});
    const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxClick = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item]
    });
  };
    
    const handleTitleClick = (item) => {
    setIsOpen({...isOpen, [item]: !isOpen[item]});
  };

    return (<div className={style.wrap}>
        <aside>
            <ul className={style.list}>
                <li>
                    <div className={style.wrapTitle}>
                    <h3 className={style.title} onClick={() => handleTitleClick("Група товару")}>Група товару</h3>
                        <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Група товару"] ? "-" : "+"} </span>
                        </div>
                    {isOpen["Група товару"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["Гель для вмивання"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Гель для вмивання")}></div>
                                <p className={style.item}>Гель для вмивання</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Крем для обличчя"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Крем для обличчя")}></div>
                                <p className={style.item}>Крем для обличчя</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Маска для обличчя"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Маска для обличчя")}></div>
                                <p className={style.item}>Маска для обличчя</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Пінка для вмивання"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Пінка для вмивання")}></div>
                                <p className={style.item}>Пінка для вмивання</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Сироватка для обличчя"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Сироватка для обличчя")}></div>
                                <p className={style.item}>Сироватка для обличчя</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Тонік для обличчя"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Тонік для обличчя")}></div>
                                <p className={style.item}>Тонік для обличчя</p>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div className={style.wrapTitle}>
                        <h3 className={style.title} onClick={() => handleTitleClick("Вік")}>Вік</h3>
                        <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Вік"] ? "-" : "+"} </span>
                        </div>
                    {isOpen["Вік"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["18+"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("18+")}></div>
                                <p className={style.item}>18+</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["35+"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("35+")}></div>
                                <p className={style.item}>35+</p>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                     <div className={style.wrapTitle}>
                        <h3 className={style.title} onClick={() => handleTitleClick("Призначення")}>Призначення </h3>
                         <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Призначення"] ? "-" : "+"} </span>
                    </div>
                    {isOpen["Призначення"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["Антивіковий"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Антивіковий")}></div>
                                <p className={style.item}>Антивіковий</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Антиоксидант"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Антиоксидант")}></div>
                                <p className={style.item}>Антиоксидант</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Зволоження"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Зволоженняя")}></div>
                                <p className={style.item}>Зволоження</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Матування"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Матування")}></div>
                                <p className={style.item}>Матування</p>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                     <div className={style.wrapTitle}>
                        <h3 className={style.title} onClick={() => handleTitleClick("Час застосування")}>Час застосування </h3>
                         <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Час застосування"] ? "-" : "+"} </span>
                    </div>
                    {isOpen["Час застосування"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["Денний"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Денний")}></div>
                                <p className={style.item}>Денний</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Нічний"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Нічний")}></div>
                                <p className={style.item}>Нічний</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Універсальний"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Універсальний")}></div>
                                <p className={style.item}>Універсальний</p>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                     <div className={style.wrapTitle}>
                        <h3 className={style.title} onClick={() => handleTitleClick("Ступінь захисту")}>Ступінь захисту </h3>
                         <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Ступінь захисту"] ? "-" : "+"} </span>
                    </div>
                    {isOpen["Ступінь захисту"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["SPF 15"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("SPF 15")}></div>
                                <p className={style.item}>SPF 15</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["SPF 30"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("SPF 30")}></div>
                                <p className={style.item}>SPF 30</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["SPF 50"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("SPF 50")}></div>
                                <p className={style.item}>SPF 50</p>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                     <div className={style.wrapTitle}>
                        <h3 className={style.title} onClick={() => handleTitleClick("Тип шкіри")}>Тип шкіри </h3>
                         <span className={style.titleStatus} onClick={handleTitleClick}> {isOpen["Тип шкіри"] ? "-" : "+"} </span>
                    </div>
                    {isOpen["Тип шкіри"] && (
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <div className={checkedItems["Усі типи"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Усі типи")}></div>
                                <p className={style.item}>Усі типи</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Жирна"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Жирна")}></div>
                                <p className={style.item}>Жирна</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Комбінован"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Комбінован")}></div>
                                <p className={style.item}>Комбінован</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Нормальна"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Нормальна")}></div>
                                <p className={style.item}>Нормальна</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Проблемна"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Проблемна")}></div>
                                <p className={style.item}>Проблемна</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Суха"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Суха")}></div>
                                <p className={style.item}>Суха</p>
                            </li>
                            <li className={style.listItem}>
                                <div className={checkedItems["Чутлива"] ? style.checkboxHover : style.checkboxDefault}
                                    onClick={() => handleCheckboxClick("Чутлива")}></div>
                                <p className={style.item}>Чутлива</p>
                            </li>
                        </ul>
                    )}
                    <li>
                        <h3 className={style.title}>Ціна</h3>
                    </li>
                </li>
            </ul>
        </aside>
    </div>)
};

export default AccordionList;