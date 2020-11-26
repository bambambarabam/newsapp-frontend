import React from 'react';
import './Navigation.css';
import Link from '../Link/Link';
import Button from '../Button/Button';

function Navigation({ pathname, onClick, isMenuOpened, navigationClassName }) {
  const linkClassName = `nav__item ${(pathname === '/' || isMenuOpened) ? 'nav__item_white' : 'nav__item_dark'}`;
  const buttonClassName = `${linkClassName} nav__button ${isMenuOpened ? 'nav__button_mobile' : ''}`;

  return (
    <nav className={`nav__list ${navigationClassName}`}>
      <Link
        linkClassName={linkClassName}
        activeLinkClassName='nav__item_active'
        path='/'>Главная</Link>
      <Link
        linkClassName={linkClassName}
        activeLinkClassName='nav__item_active'
        path='/saved-news'>Сохраненные статьи</Link>
      <Button
        buttonClassName={buttonClassName}
        isMenuOpened={isMenuOpened}
        onClick={onClick}>
        <span className='nav__button-text'>Авторизоваться</span>
      </Button>
    </nav>
  )
}

export default Navigation;
