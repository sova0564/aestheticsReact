import BackToHome from '../../Utils/BackToHome';
import "../../../App.css";
import Products from './Products';
import style from './Catalog.module.css';
import Sorting from './Sorting';
import AccordionType from './AccodionType';
import AccordionList from './AccordionList';
import RecentProducts from './RecentProducts';
import CatalogMoreBtn from '../../Utils/CatalogMoreBtn';
import { useState } from 'react';

function Catalog(props) {

    const [numProducts, setNumProducts] = useState(10);
    const allProductsDisplayed = numProducts >= props.products.length;
    const [sortingCriteria, setSortingCriteria] = useState(null);

    const handleMoreProductsClick = () => {
    setNumProducts(numProducts + 10);
    };

    const displayedProducts = props.products.slice(0, numProducts);

    const sortProducts = (products, criteria) => {
        switch (criteria) {
        case 'popularity':
            return products.sort((a, b) => b.popularity - a.popularity);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        default:
            return products;
        }
    };

    const sortedProducts = sortingCriteria ? sortProducts(displayedProducts, sortingCriteria) : displayedProducts;

    const handleSortingOptionSelect = (option) => {
        setSortingCriteria(option);
    };

    return (<div className='AppLayout'>
        <BackToHome to='/'/>
        <div className={style.wrapCatalog}>
            <AccordionList accordionType={props.accordionType} />
            <div>
            <Sorting onSortingOptionSelect={handleSortingOptionSelect}/>
                <Products products={sortedProducts} />
          {!allProductsDisplayed && (
            <div className={style.buttonPosition}>
              <CatalogMoreBtn description='Показати ще' onClick={handleMoreProductsClick} /> 
            </div>
          )}
                </div>
        </div>
        <div className={style.recentProducts}>
            <RecentProducts title='Ви нещодавно переглядали:' recentProducts={props.recentProducts} />
            </div>
    </div>)
}

export default Catalog;