import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

function Menu({ onMenuClick, isMenuOpened }) {
  const { pathname } = useLocation();
  const menuClassName =
    `menu ${isMenuOpened ? 'menu_opened' : 'menu_closed'}
    ${pathname === '/' ? 'menu_white' : 'menu_dark'}`;

  return (
    <button
      className={menuClassName}
      onClick={onMenuClick}>
      <span></span>
    </button>
  )
}

export default Menu;