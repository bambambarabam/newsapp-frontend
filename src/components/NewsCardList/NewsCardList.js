import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <section className='news-card-list'>
      <ul className='news-card-list__wrapper'>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
      </ul>
    </section>
  )
}

export default NewsCardList;
