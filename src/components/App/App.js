// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm'

function App() {
  return (
    <BrowserRouter>
    <div className='page'>
        <PopupWithForm />
    </div>
    </BrowserRouter>
  );
}

export default App;
