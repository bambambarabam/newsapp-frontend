import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

function Link({ linkClassName, activeLinkClassName, path, children }) {
  return (
    <NavLink
      className={`link ${linkClassName}`}
      activeClassName={activeLinkClassName}
      exact to={path}>{children}</NavLink>
  )
}

export default Link;