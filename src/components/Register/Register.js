import React from 'react';
import Input from '../Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({ isOpen, onClose, disabled, onChangeForm }) {

  function handleClose() {
    onClose();
  };

  return (
    <PopupWithForm
      formName='registration'
      isOpen={isOpen}
      onClose={handleClose}
      onChangeForm={onChangeForm}
      disabled={disabled}
      submitButtonText='Зарегистрироваться'>
      <legend className='popup__heading'>Регистрация</legend>
      <Input label='Email'
        name='email'
        formName='reg'
        minLength='6'
        maxLength='30'
        type='email'
        required={true}
        autoComplete='email'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту' />
      <Input
        label='Пароль'
        name='password'
        formName='reg'
        minLength='8'
        maxLength='30'
        type='password'
        required={true}
        autoComplete='password'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль' />
      <Input
        label='Имя'
        name='name'
        formName='reg'
        minLength='2'
        maxLength='30'
        type='text'
        required={true}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите имя' />
    </PopupWithForm>
  )
}

export default Register;