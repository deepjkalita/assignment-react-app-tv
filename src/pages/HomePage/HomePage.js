import React,{useState,useEffect} from 'react';
import HeaderMain from '../../components/Full/HeaderMain/HeaderMain';
import Categories from '../../components/Full/Categories/Categories';
import BottomNav from '../../components/Full/BottomNav/BottomNav';
import UserController from '../../Controllers/UserController';
import CategoriesController from '../../Controllers/CategoriesController';
import ConsultationSummary from '../../components/Full/ConsultationSummary/ConsultationSummary';
import './HomePage.styles.css';

const HomePage=()=>{
  const userId=1;
  const [categories,setCategories]=useState([]);
  const [userImage,setUserImage]=useState([]);
  const [homeButton,setHomeButton]=useState(false);

  useEffect(() => {
      CategoriesController()
        .then(response=>{setCategories(response)})
        .catch(err => alert(err))

      UserController(userId)
        .then(response => {setUserImage(response[0].user_image)})
        .catch(err => console.log(err))
          },[]);

  const handleClick=(e)=>(
    setHomeButton(!homeButton)
  );
  let contents='';
  homeButton?contents=<ConsultationSummary userId={userId} />:contents='';

return(
  <div className='title'>
    <HeaderMain  userImage={userImage}/>
    {contents}
    <h1  >Consult Specialist</h1>
    <Categories categories={categories}/>
    <BottomNav handleClick={handleClick}  userImage={userImage}/>
  </div>
);

};

export default HomePage;
