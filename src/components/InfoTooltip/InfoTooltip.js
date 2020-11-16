import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {
  return (
    <section
      className='popup popup_opened'>
      <div
        className='popup__form'>
        <button
          className='popup__close'
          type='button'
        >
        </button>
        <h2
          className='popup__tooltip-text'>
          Пользователь успешно зарегистрирован!
        </h2>
        <a href='/signin' className='popup__tooltip-button'>Войти</a>
      </div>
    </section>
  );
}

export default InfoTooltip;
