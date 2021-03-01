import React from 'react';
import CategoryCards from '../../Parts/CategoryCards/CategoryCards';
import './Categories.styles.css';

const Categories=(props)=>{
  return(
  <div className='categories' >
    {props.categories.map((category)=><CategoryCards name={category.category_name}
     imageUrl={category.category_image_url}
     id={category.category_id}
     />)}
  </div>
);
};



export default Categories;
