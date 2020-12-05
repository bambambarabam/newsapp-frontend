import React, { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { useLocation } from 'react-router-dom';

function Header({ isLoggedIn, onClick, onSignOut }) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const { pathname } = useLocation();

  const headerClassName = `header__section ${isMenuOpened ? 'header_mobile' : ''}`;
  const navigationClassName = ` ${isMenuOpened ? 'header__nav_mobile nav__list_active' : ''}`;
  const handleMenuOpen = () => setMenuOpened(!isMenuOpened);

  return (
    <header className={headerClassName}>
      <Logo
        isMenuOpened={isMenuOpened}
        pathname={pathname}
      />
      <Menu
        isMenuOpened={isMenuOpened}
        onMenuClick={handleMenuOpen}
        pathname={pathname} />
      <Navigation
        navigationClassName={navigationClassName}
        isLoggedIn={isLoggedIn}
        onSignOut={onSignOut}
        pathname={pathname}
        onClick={onClick}
        isMenuOpened={isMenuOpened}
      />
    </header>
  )
}

export default Header;