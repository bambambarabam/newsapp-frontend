import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className='preloader__container'>
      <div className='preloader'>
        <i className='preloader__spinner'></i>
        <span className='preloader__text'>Идет поиск новостей...</span>
      </div>
    </div>
  )
}

export default Preloader;