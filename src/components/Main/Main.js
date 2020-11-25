import React from 'react';
import SearchForm from '../SearhForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import Button from '../Button/Button';
import './Main.css';

function Main({onClick}) {
  return (
    <section className='main'>
      <SearchForm />
      <div className='main__news-container'>
        <div className='main__not-found'>
          <span className='main__not-found-icon'></span>
          <h3 className='main__not-found-heading'>Ничего не найдено</h3>
          <p className='main__not-found-text'>К сожалению по вашему запросу ничего не найдено.</p>
        </div>
        <Preloader />
        <h2 className='main__news-heading'>Результаты поиска</h2>
        <NewsCardList />
        <Button buttonClassName='main__show-more' onClick={onClick}>
          Показать еще
        </Button>
      </div>
      <About />
    </section>
  )
}

export default Main;