import React from 'react';
import './DoctorCard.styles.css';

const DoctorCard=(props)=>(
  <div  className='doctor-cards'>
    <div className='container-1'>
      <div><img src={props.imageUrl} alt="doc-img"/></div>
      <div class='details'>
        <h1>Dr. {props.name}</h1>
        <p>{props.exp} years experience</p>
        <p>{props.degree}</p>
        <p>{props.category}</p>
      </div>
      <div className='price'><h2>Rs {props.price}</h2></div>
    </div>
    <div className='hr'></div>
    <div className='container-2'>
      <div className='details'>
      <p>Next Availibilty</p>
      <p>At {props.avail}</p>
      </div>
      <div><h2>SCHEDULE NOW</h2></div>
    </div>
  </div>
);

export default DoctorCard;
