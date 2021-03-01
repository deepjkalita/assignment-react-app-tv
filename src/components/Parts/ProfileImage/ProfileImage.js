import React from 'react';
import './ProfileImage.styles.css';

const ProfileImage=({userImage})=>(
<div className='profile-image'>
  <img src={userImage} alt="Logo"/>
</div>
);

export default ProfileImage;
