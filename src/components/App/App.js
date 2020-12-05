import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NewsContext } from '../../contexts/NewsContext';
import * as newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
const { SAVEDNEWS_ERR, KEYWORD_ERR, LOADNEWS_ERR, DELETECARD_ERR } = require('../../utils/constants');

function App() {
  const escape = require('escape-html');
  const history = useHistory();
  const { pathname } = useLocation();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isSearchError, setSearchError] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentRow, setCurrentRow] = useState(0);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [isSearchSuccess, setSearchSuccess] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    (!isLoggedIn && pathname === '/saved-news') && setLoginOpen(true);
  }, [isLoggedIn, pathname]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser(data);
          getSavedNews();
        })
        .catch((err) => console.error(err))
    }
  }, []);

  useEffect(() => {
    const localStorageNews = JSON.parse(localStorage.getItem('news'));
    if (localStorageNews && localStorageNews.length) {
      setNews(localStorageNews);
      setSearchSuccess(true);
    }
  }, []);

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

  function handleShowMore() {
    setCurrentRow(currentRow + 1);
  };

  function getSavedNews() {
    mainApi.getSavedNews()
      .then((news) => {
        setSavedNews(news)
      })
      .catch(err => console.error({ message: `${SAVEDNEWS_ERR} ${err.message}` }))
  };

  function handleLoginPopupOpen() {
    setLoginOpen(true);
  };

  function handleNewsSearch(keyword, setErrorMessage) {
    if (!keyword) {
      setErrorMessage(KEYWORD_ERR);
      return;
    }
    setLoading(true);
    setSearchSuccess(false);
    setNews([]);
    setCurrentRow(0);
    newsApi
      .getNews(keyword)
      .then((res) => {
        const news = res.articles.map((item) => ({
          ...item, keyword
        }));
        setNews(news);
        localStorage.setItem('news', JSON.stringify(news));
        setSearchSuccess(true);
        setSearchError(false);
      })
      .catch((err) => {
        console.error({ message: `${LOADNEWS_ERR} ${err.message}` });
        setSearchError(true);
      })
      .finally(() => setLoading(false));
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

  function handleArticleClick(article) {
    if (!isLoggedIn)
      return setRegisterOpen(true);
    const saved = savedNews.find((i) => i.publishedAt === article.publishedAt
      && i.title === article.title);
    if (!saved) {
      mainApi.saveArticle(article)
        .then(newArticle => setSavedNews([newArticle.data, ...savedNews]))
        .catch((err) => console.error(err));
      return;
    }
    handleDeleteArticle(saved);
  };

  function handleDeleteArticle(article) {
    mainApi.deleteArticle(article._id)
      .then(() => setSavedNews(savedNews.filter((item) => item._id !== article._id)))
      .catch((err) => console.error({ message: `${DELETECARD_ERR} ${err.message}` }));
  };

  function handleRegister(email, password, name) {
    setDisabled(true);
    mainApi.register(email, escape(password), name)
      .then((res) => {
        setRegisterOpen(false);
        setTooltipOpen(true);
      })
      .catch((err) => setAuthError(err.message))
      .finally(() => setDisabled(false));
  };

  function handleLogin(email, password) {
    setDisabled(true);
    mainApi.authorize(email, escape(password))
      .then((res) => {
        mainApi.getUserInfo(res)
          .then((data) => setCurrentUser(data))
          .catch((err) => setAuthError(err.message));
        setLoggedIn(true);
        setLoginOpen(false);
        getSavedNews();
      })
      .catch((err) => setAuthError(err.message))
      .finally(() => setDisabled(false));
  };

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser({});
    history.push('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NewsContext.Provider value={{ news, savedNews }}>
        <div className='app'>
          <Header
            isLoggedIn={isLoggedIn}
            onClick={handleLoginPopupOpen}
            onSignOut={handleSignOut}
          />
          <Switch>
            <Route exact path='/'>
              <Main
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                isError={isSearchError}
                onSearch={handleNewsSearch}
                onCardClick={handleArticleClick}
                onShowMore={handleShowMore}
                isSearchSuccess={isSearchSuccess}
                currentRow={currentRow}
              />
            </Route>
            <ProtectedRoute
              path='/saved-news'
              component={SavedNews}
              isLoggedIn={isLoggedIn}
              onCardClick={handleDeleteArticle}
            />
          </Switch>
          <Footer />

          <Register
            authError={authError}
            isOpen={isRegisterOpen}
            onClose={handlePopupsClose}
            onChangeForm={handleTogglePopup}
            onRegister={handleRegister}
          />
          <Login
            authError={authError}
            isOpen={isLoginOpen}
            onChangeForm={handleTogglePopup}
            onLogin={handleLogin}
            onClose={handlePopupsClose}
            disabled={disabled}
          />
          <InfoTooltip
            isOpen={isTooltipOpen}
            onClose={handlePopupsClose}
            onChangeForm={handleOpenLogin}
            disabled={disabled}
          />
        </div>
      </NewsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
