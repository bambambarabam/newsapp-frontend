import React, { useContext } from 'react';
import './Navigation.css';
import Link from '../Link/Link';
import Button from '../Button/Button';
import SignOutButton from '../SignOutButton/SignOutButton';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({
  isLoggedIn,
  pathname,
  onClick,
  isMenuOpened,
  navigationClassName,
  onSignOut
}) {

  const currentUser = useContext(CurrentUserContext);

  const linkClassName = `nav__item ${(pathname === '/' || isMenuOpened) ? 'nav__item_white' : 'nav__item_dark'}`;
  const buttonClassName = `${linkClassName} nav__button ${isMenuOpened ? 'nav__button_mobile' : ''}`;

  return (
    <nav className={`nav__list ${navigationClassName}`}>
      <Link
        linkClassName={linkClassName}
        activeLinkClassName='nav__item_active'
        path='/'>Главная</Link>
      {
        isLoggedIn &&
        (<Link
          linkClassName={linkClassName}
          activeLinkClassName='nav__item_active'
          path='/saved-news'>Сохраненные статьи
        </Link>)
      }
      <Button
        buttonClassName={buttonClassName}
        isMenuOpened={isMenuOpened}
        onClick={isLoggedIn ? onSignOut : onClick}>
        <span className='nav__button-text'>
          {
            isLoggedIn ? currentUser.name :
              'Авторизоваться'
          }
        </span>
        {
          isLoggedIn &&
          <SignOutButton />
        }
      </Button>
    </nav>
  )
}

export default Navigation;
