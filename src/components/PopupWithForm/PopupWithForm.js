import React from 'react';
import Button from '../Button/Button';
import './PopupWithForm.css';

function PopupWithForm({
  isOpen,
  onSubmit,
  onClose,
  formName,
  onChangeForm,
  children,
  submitButtonText,
  isFormValid,
  authError,
  disabled
}) {

  return (
    <div className={`popup popup_type_${formName} ${isOpen && 'popup_opened'}`}>
      <div
        className='popup__overlay'
        onClick={onClose}>
      </div>
      <form
        className={`popup__form ${formName}__form`}
        name={formName}
        onSubmit={onSubmit}>
        <button
          type='reset'
          className='popup__close-button'
          onClick={onClose} />
        <fieldset
          className='popup__input-container'
          disabled={disabled}>
          {children}
        </fieldset>
        {formName !== 'tooltip' &&
          <>
            <span className='popup__error'>{authError}</span>
            <Button
              buttonClassName='popup__submit'
              onClick={onSubmit}
              disabled={!isFormValid}>
              {submitButtonText}
            </Button>
          </>
        }
        <span className='popup__subtitle'>{formName !== 'tooltip' && 'или '}
          <span className='popup__link' onClick={onChangeForm}>
            {formName !== 'login' ? 'Войти' : 'Зарегистрироваться'}</span></span>
      </form>
    </div >
  );
}

export default PopupWithForm;