import React from 'react';
import './Button.css';

function Button({ type, buttonClassName, children, onClick, disabled }) {
  return (
    <button
      type={type} className={`button ${buttonClassName}`
      } onClick={onClick} disabled={disabled}>
      { children}
    </button >
  )
}

export default Button;