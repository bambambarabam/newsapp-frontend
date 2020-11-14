import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <>
      <section className='register'>
        <form className='register__form'>
          <h2 className='register__header'>Вход</h2>
          <label
            className='register__form-label'
            htmlFor='email'>
            Email
          </label>
          <input
            className='register__input'
            id='email'
            type='email'
            placeholder='Введите почту'
            required>
          </input>
          <span className='register__form-error'
          id='email-error'>
            Неправильный формат email
          </span>
          <label
            className='register__form-label'
            htmlFor='password'>
            Пароль
          </label>
          <input
            className='register__input'
            type='password'
            id='password'
            placeholder='Введите пароль'
            required>
          </input>
          <span className='register__form-error'
          id='password-error'></span>
          <button
            className='register__button'
            type='submit'>
            Войти
          </button>
          <div className='register__signin'>
            <p className='register__login-text'>
              или
            </p>
            <a href='/signin'
              className='register__login-link'>
              Зарегистрироваться
              </a>
          </div>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;