import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose }) {
  return (
    <PopupWithForm
      formName='tooltip'
      isOpen={isOpen}
      onClose={onClose}>
      <legend className='popup__heading'>Пользователь успешно зарегистрирован!</legend>
    </PopupWithForm>
  );
}

export default InfoTooltip;
