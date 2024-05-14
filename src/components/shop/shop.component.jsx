import { useContext,Fragment  } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoriesPreview from '../category-preview/category-preview.component';
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  
    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
            const products =categoriesMap[title];
            return <CategoriesPreview key={title} title={title} products={products}></CategoriesPreview> 
          })}
      </Fragment>
    );
  };
  
  export default Shop;