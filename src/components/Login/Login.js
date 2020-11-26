import React from 'react';
import Input from '../Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({ isOpen, onClose, disabled, onChangeForm }) {

  function handleClose() {
    onClose();
  };

  return (
    <PopupWithForm
      formName='login'
      isOpen={isOpen}
      onClose={handleClose}
      onChangeForm={onChangeForm}
      disabled={disabled}
      submitButtonText='Войти'>
      <legend className='popup__heading'>Вход</legend>
      <Input
        label='Email'
        name='email'
        formName='log'
        type='email'
        minLength='6'
        maxLength='30'
        required={true}
        autoComplete='email'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту' />
      <Input
        label='Пароль'
        name='password'
        formName='log'
        type='password'
        minLength='8'
        maxLength='30'
        required={true}
        autoComplete='password'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль' />
    </PopupWithForm>
  )
}

export default Login;