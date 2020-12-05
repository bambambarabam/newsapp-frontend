import React, { useContext } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { NewsContext } from '../../contexts/NewsContext';

import './SavedNews.css';

function SavedNews({ isLoggedIn, onCardClick }) {
  const { savedNews } = useContext(NewsContext);

  return (
    <div className='saved-news'>
      <SavedNewsHeader
        isLoggedIn={isLoggedIn}
      />
      <NewsCardList
        newsToRender={savedNews}
        isLoggedIn={isLoggedIn}
        onCardClick={onCardClick}
      />
    </div >
  )
}

export default SavedNews;