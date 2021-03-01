import React from 'react';
import {Link} from 'react-router-dom';
import './CategoryCards.styles.css';

const CategoryCards=(props)=>(
  <Link style={{textDecoration:'none'}}to={`categories/${props.id}`}><div  className='category-cards'>
      <div className = 'item-1'>
        <img src={props.imageUrl} alt="images"/>
      </div>
      <div className='item-2'>
        <h2>{props.name}</h2>
      </div>
  </div>
  </Link>
);

export default CategoryCards;
