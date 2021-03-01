import React from 'react';
import Logo from '../../Parts/Logo/Logo';
import ProfileImage from '../../Parts/ProfileImage/ProfileImage';
import './HeaderMain.styles.css';

const HeaderMain=({userImage})=>(
  <div>
    <div className='header-main'>
    <Logo />
    <ProfileImage userImage={userImage}/>
    </div>
    <div className = 'line'></div>
  </div>
);



export default HeaderMain;
