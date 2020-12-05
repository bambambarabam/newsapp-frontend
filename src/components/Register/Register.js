import React from 'react';
import Input from '../Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register({
  isOpen,
  onClose,
  disabled,
  onChangeForm,
  onRegister,
  authError
}) {

  const emailField = useFormWithValidation();
  const nameField = useFormWithValidation();
  const passwordField = useFormWithValidation();

  function handleRegister(evt) {
    evt.preventDefault();
    onRegister(emailField.value, passwordField.value, nameField.value);
  };

  function handleClose() {
    nameField.setValue('');
    onClose();
  };

  return (
    <PopupWithForm
      formName='registration'
      isOpen={isOpen}
      onClose={handleClose}
      onChangeForm={onChangeForm}
      onSubmit={handleRegister}
      isFormValid={emailField.isValid && passwordField.isValid && nameField.isValid}
      disabled={disabled}
      authError={authError}
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
        {...emailField}
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
        {...passwordField}
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
        {...nameField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите имя' />
    </PopupWithForm>
  )
}

export default Register;