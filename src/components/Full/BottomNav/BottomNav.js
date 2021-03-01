import React from 'react';
import MenuItem from '../../Parts/MenuItems/MenuItems';
import CircleButton from '../../Parts/CircleButton/CircleButton';
import ProfileImage from '../../Parts/ProfileImage/ProfileImage'
import './BottomNav.styles.css';

const BottomNav=({userImage,handleClick})=>(
  <div className='container'>
    <div className='bottom-nav'>
        <div className='button'><CircleButton/></div>
      <MenuItem handleClick={handleClick} imageSource={require('../../../assets/browser.svg')}/>
      <MenuItem  imageSource={require('../../../assets/videochat.svg')}/>
      <MenuItem  imageSource={require('../../../assets/idcard.svg')}/>
      <ProfileImage userImage={userImage}/>
    </div>
  </div>
)



export default BottomNav;
