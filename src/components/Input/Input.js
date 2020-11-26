import React from 'react';
import './Input.css';

function Input(props) {

  const {
    inputLabelClassName,
    formName,
    label,
    name,
    type,
    value,
    minLength,
    maxLength,
    required,
    inputFieldClassName,
    placeholder,
    disabled,
    isValid,
    errorMessage
  } = props;

  return (
    <label className={`input ${inputLabelClassName}`} htmlFor={`${name}_${formName}`}>{label}
      <input
        type={type}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        id={`${name}_${formName}`}
        className={`input__field ${inputFieldClassName}`}
        placeholder={placeholder}
        disabled={disabled}>
      </input>
      <span
        className={`input__error ${name}__input-error ${!isValid && `${name}__input-error_active`}`}
        id={`${name}-error`}>
        {errorMessage}
      </span>
    </label>
  )
}

export default Input;