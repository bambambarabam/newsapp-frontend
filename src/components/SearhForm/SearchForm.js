import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function SearchForm({ onSearch, isLoading }) {

  const searchField = useFormWithValidation();

  function handleSubmit(evt) {
    const { value, setErrorMessage } = searchField;
    evt.preventDefault();
    onSearch(value, setErrorMessage);
  }

  return (
    <div className='search'>
      <div>
        <h2 className='search__header'>Что творится в&nbsp;мире?</h2>
        <p className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      </div>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <Input
          name='search'
          type='text'
          {...searchField}
          placeholder='Введите тему новости'
          disabled={isLoading}
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
