// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function App() {
  return (
    <BrowserRouter>
    <div className='page'>
        {/* <PopupWithForm /> */}
        <InfoTooltip />
    </div>
    </BrowserRouter>
  );
}

export default App;
