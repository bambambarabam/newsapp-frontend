import React from 'react';
import './Button.css';

function Button({ buttonClassName, children, onClick }) {
  return (
    <button
      type='submit' className={`button ${buttonClassName}`
    } onClick={onClick}>
  { children }
    </button >
  )
}

export default Button;