import './category-item.styles.scss';

const CategoryItem=({categories})=>{

    return(
        <div className='background-image' style={{backgroundImage:`url(${categories.imageUrl})`}}>
        <div className='category-body-container'>
          <h2>{categories.title}</h2>
          <p>Shope Now</p>
          </div>
        </div>
    )

}

export default CategoryItem;