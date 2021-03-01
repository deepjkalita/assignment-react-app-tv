import React,{useState,useEffect} from 'react';
import HeaderSub from '../../components/Full/HeaderSub/HeaderSub';
import Doctors from '../../components/Full/Doctors/Doctors';
import SortMenu from '../../components/Full/SortMenu/SortMenu';
import DoctorsController from '../../Controllers/DoctorsController';
import './DoctorListPage.styles.css';

const DoctorListPage=({match})=>{
  const [docList,setDocList]=useState([]);
  useEffect(() => {
  DoctorsController(match.params.id)
      .then(response=>{
        if(response.length===0){
          alert('Doctors only available in Dermatology, please select Dermatology from categories');
        }
        setDocList(response);
      })
      .catch(err=>alert(err));
    },[match.params.id]);

return(
  <div className='doctor-list-page'>
    <HeaderSub/>
    <body>
    <SortMenu/>
    <Doctors docList={docList}/>
    </body>
  </div>
);
};

export default DoctorListPage;
