import React from 'react';
import PastConsultationCard from '../../Parts/PastConsultationCard/PastConsultationCard';
import './PastConsultations.styles.css';
const PastConsultations=(props)=>(
  <div class='past-consultations'>

{props.pastConsultation.map((consultation)=><div className='past-consultations-sub'><PastConsultationCard
    className='past-consultations-sub'
    name={consultation.doctor_name}
    imageUrl={consultation.doctor_image}
    category={consultation.category_name}
  /></div>)}
  </div>
);

export default PastConsultations;
