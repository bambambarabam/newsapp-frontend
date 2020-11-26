import React from 'react';
import './NewsCard.css';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import CardImg from '../../images/image_08.jpg'

function NewsCard(props) {
  return (
    <li className='card'>
      <span className='card__element card__keyword'>keyword</span>
      <button
        type='button'
        className='card__element card__button'>
        <BookmarkButton />
      </button>
      <span className={`card__element card__tooltip`}>Убрать из сохранённых</span>
      <div className='card__img-wrapper'>
        <img
          src={CardImg}
          alt='Изображение.'
          className='card__image' />
      </div>
      <div className='card__content'>
        <span className='card__date'>Date</span>
        <h2 className='card__title'>Title</h2>
        <p className='card__text'>Description</p>
        <a
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          className='card__source'>Source</a>
      </div>
    </li >
  )
}

export default NewsCard;