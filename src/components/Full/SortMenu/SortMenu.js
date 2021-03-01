import React from 'react';
import './SortMenu.styles.css';
import downArrow from '../../../assets/keyboard_arrow_down.svg';

const SortMenu=()=>(
  <div className='sort-menu'>
    <div className='sort-menu-sub'>
    <p>Sort by</p>
    <img src={downArrow} alt='downArrow'/>
    </div>
  </div>
);
export default SortMenu;
