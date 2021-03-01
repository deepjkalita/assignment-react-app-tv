import React,{useEffect,useState} from 'react';
import UpcomingConsultationBox from '../UpcomingConsultationBox/UpcomingConsultationBox';
import PastConsultations from '../PastConsultations/PastConsultations';
import {UpcomingConsultationsController,PastConsultationsController} from '../../../Controllers/ConsultationsController';
import './ConsultationSummary.styles.css';

const ConsultationSummary=({userId})=>{
    const [pastConsultation,setPastConsultation]=useState([]);
    const [consultationDetails,setConsultationDetails]=useState([]);

    useEffect(() => {
    UpcomingConsultationsController(userId)
        .then(response=>setConsultationDetails(response))
        .catch(err=>alert(err))
    PastConsultationsController(userId)
        .then(response=>setPastConsultation(response))
        .catch(err=>alert(err))
      },[userId]);

  return(
  <div  className='consultation-summary'>
  <h1>Upcoming Consultation</h1>
  <UpcomingConsultationBox consultationDetails={consultationDetails}/>
  <h1>Doctors you have consulted</h1>
  <PastConsultations pastConsultation={pastConsultation}/>
  </div>
);
};

export default ConsultationSummary
