import React from 'react';
import './MenuItems.styles.css';


const MenuItems=(props)=>{
  return(
  <div className='menu-item'>
    <img onClick={props.handleClick} src={props.imageSource.default}  alt="menu-img"/>
  </div>
)};



export default MenuItems;
