import React from 'react';
import './Popup.css';

const Popup = ({message, onClose}) => {
  return (
      <div className='popup'>
        <div className='popup-inner'>
            <p className='logo'><i class='bx bxs-x-circle'></i></p>
            <button className='close-btn' onClick={onClose}><i className='bx bx-x'></i></button>
            <p>Error : {message}</p>
        </div>
    </div>
    )
}

export default Popup