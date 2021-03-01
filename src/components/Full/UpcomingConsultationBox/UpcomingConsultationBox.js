import React from 'react';
import './UpcomingConsultationBox.styles.css';

const dateFormatter=(date)=>{
  let mydate = new Date(date);
  return(
    mydate.toDateString()
  );
};

 const UpcomingConsultationBox=(props)=>{
   let date='';
   let time=''
   props.consultationDetails.map((c)=> date=dateFormatter(c.date.substring(0,10)));
    props.consultationDetails.map((t)=> time=t.time);
   return(
   <div className='consultation-box'>
    <div className='consultation-box-sub'>
      <div>
        <h2>{date.substring(0,11)}</h2>
      </div>
      <div>
        <h3>{time}</h3>
      </div>
    </div>
   </div>
 );

};






 export default UpcomingConsultationBox;
