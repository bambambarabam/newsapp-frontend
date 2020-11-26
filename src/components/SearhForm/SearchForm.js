import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchForm(props) {
  return (
    <div className='search'>
      <div>
        <h2 className='search__header'>Что творится в&nbsp;мире?</h2>
        <p className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      </div>
      <form className='search__form' noValidate>
        <Input
          name='search'
          type='text'
          placeholder='Введите тему новости'
          inputFieldClassName='search__input-field'
          inputLabelClassName='search__input' />
        <Button
          type='submit'
          buttonClassName='search__button'>Искать</Button>
      </form>
    </div>
  )
}

export default SearchForm;
