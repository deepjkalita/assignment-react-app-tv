import React from 'react';
import DoctorCard from '../../Parts/DoctorCard/DoctorCard';

const Doctors=({docList})=>(
  <div style={{marginBottom:'50px'}}>
  {docList.map((doc)=><DoctorCard
      imageUrl={doc.doctor_image}
      name={doc.doctor_name}
      degree={doc.degree}
      exp={doc.experience}
      price={doc.price}
      avail={doc.next_available}
      category={doc.category}
    />)}
        </div>
);

export default Doctors;
