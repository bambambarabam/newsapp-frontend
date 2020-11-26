import React from 'react';
import Link from '../Link/Link';
import './Logo.css';

function Logo({ pathname }) {
  const logoClassName = `header__logo ${(pathname === '/') ? 'logo_white' : 'logo_dark'}`;
  return (
    <Link path='/' linkClassName='logo__link'>
      <h1 className={logoClassName}>NewsExplorer</h1>
    </Link>
  )
}

export default Logo;