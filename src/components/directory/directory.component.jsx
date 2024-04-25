
import CategoryItem from '../category-items/category-item.component';
import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className='categories-container'>
          {categories.map((categories)=>(
            <div key={categories.id} className='category-container'>
              <CategoryItem categories={categories} />  
            </div> 
          ))}
        </div>
      );
}



export default Directory;