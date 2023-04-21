import style from './AccordionType.module.css';
import React, { useState } from "react";

function AccordionType(props) {
     const [active, setActive] = useState(-1);

  function togglePanel(id) {
    setActive(id === active ? -1 : id);
  }
    return (<div className={style.wrap}>
        <aside>
      <ul>
        {props.accordionType.map((accordionType, id) => (
          <li key={id}>
            <button
              className="accordion"
              onClick={() => togglePanel(id)}
              aria-expanded={active === id}
            >
              {accordionType.title}
            </button>
            <ul
              className={`panels ${active === id ? "active" : ""}`}
              id={`panel${id}`}
            >
              {props.accordionType.map((item1, i) => (
                <li key={item1} className="panel">
                  <label htmlFor={`checkbox${id}-${i}`}>
                    <input
                      type="checkbox"
                      id={`checkbox${id}-${i}`}
                      value={item1}
                      onChange={props.handleCheckboxChange}
                    />
                    <p className="item_list">{props.accordionType.item1}</p>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
    </div>)
};

export default AccordionType;