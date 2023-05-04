import style from './CatalogMoreBtn.module.css';

function CatalogMoreBtn(props) {
  return (
    <div>
      <button className={style.button} onClick={props.onClick}>{props.description}</button>
    </div>
  )
}

export default CatalogMoreBtn;