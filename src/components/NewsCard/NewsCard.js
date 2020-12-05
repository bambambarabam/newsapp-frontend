import React, { useContext } from 'react';
import './NewsCard.css';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import { NewsContext } from '../../contexts/NewsContext';
import { useLocation } from 'react-router-dom';

function NewsCard({ isLoggedIn, onCardClick, article }) {
  const { keyword, title, description, publishedAt, url, urlToImage, source } = article;

  const { savedNews } = useContext(NewsContext);
  const { pathname } = useLocation();
  const isSaved = isLoggedIn
    && savedNews.some((i) => i.publishedAt === article.publishedAt
      && i.title === article.title);

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const newDate = new Date(publishedAt);
  const dayAndMonth = newDate.toLocaleString('ru', options);
  const fullDate = dayAndMonth + ', ' + newDate.getFullYear();

  const tooltipText =
    (!isLoggedIn)
      ? 'Войдите, чтобы сохранять статьи'
      : `${isSaved && 'Убрать из сохранённых'}`;

  function handleCardButtonClick() {
    onCardClick(article);
  }

  return (
    <li className='card'>
      {
        pathname === '/saved-news' &&
        <span className='card__element card__keyword'>{keyword}</span>
      }
      <button
        type='button'
        className='card__element card__button'
        onClick={handleCardButtonClick}>
        <BookmarkButton
          pathname={pathname}
          isSaved={isSaved}
        />
      </button>
      {
        (!isLoggedIn || (isLoggedIn && isSaved)) &&
        <span className={`card__element card__tooltip`}>{tooltipText}</span>
      }
      <div className='card__img-wrapper'>
        <img
          src={urlToImage}
          alt={title}
          className='card__image'
        />
      </div>
      <div className='card__content'>
        <span className='card__date'>{fullDate}</span>
        <h2 className='card__title'>{title}</h2>
        <p className='card__text'>{description}</p>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='card__source'>
          {
            pathname === '/' ? source.name : source
          }
        </a>
      </div>
    </li >
  )
}

export default NewsCard;