import React from 'react';
import './PastConsultationCard.styles.css';

const PastConsultationCard=(props)=>(
  <div className='past-consultation-card'>
    <img src={props.imageUrl} alt="docImg"/>
    <h3>Dr {props.name}</h3>
    <p>{props.category}</p>
  </div>
);

export default PastConsultationCard;
