import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  isLoggedIn,
  onCardClick,
  newsToRender,
  savedNews }) {

  return (
    <section className='news-card-list'>
      <ul className='news-card-list__wrapper'>
        {newsToRender.map((article, index) => (
          <NewsCard
            article={article}
            key={index}
            isLoggedIn={isLoggedIn}
            savedNews={savedNews}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </section>
  )
}

export default NewsCardList;
