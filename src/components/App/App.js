import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  function handleLoginPopupOpen() {
    setLoginOpen(true);
  };

  function handlePopupsClose() {
    setRegisterOpen(false);
    setLoginOpen(false);
    setTooltipOpen(false);
  };

  function handleTogglePopup() {
    setLoginOpen(!isLoginOpen);
    setRegisterOpen(!isRegisterOpen);
  };

  function handleOpenLogin() {
    setTooltipOpen(false);
    setLoginOpen(true);
  };

  useEffect(() => {
    function closeOnEsc(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        handlePopupsClose();
      }
    }
    document.addEventListener('keyup', closeOnEsc);

    return () => {
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, []);

  return (
    <div className='page'>
      <Header
        onClick={handleLoginPopupOpen}
      />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route
          path='/saved-news'
          component={SavedNews}>
          <SavedNews />
        </Route>
      </Switch>
      <Footer />

      <Register
        isOpen={isRegisterOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleTogglePopup}
      />
      <Login
        isOpen={isLoginOpen}
        onChangeForm={handleTogglePopup}
        onClose={handlePopupsClose}
      />
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleOpenLogin}
      />
    </div>
  );
}

export default App;
