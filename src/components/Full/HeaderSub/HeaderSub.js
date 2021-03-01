import React from 'react';
import leftArrow from '../../../assets/left_arrow.png';
import './HeaderSub.styles.css';
import {withRouter} from 'react-router-dom';

const HeaderSub=(props)=>{
  return(
  <div className ='header-sub'>
    <img  onClick={() =>props.history.goBack()} src={leftArrow} alt="arrow"/>
    <h1>Dermatology</h1>
  </div>
)};



export default withRouter(HeaderSub);
