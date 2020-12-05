const BASE_URL = 'https://api.newsapp.me';

const DATE_LOCALES = "fr-CA";
const DATE_OPTIONS = { year: "numeric", month: "2-digit", day: "2-digit" };
const WEEK = 7 * 24 * 60 * 60 * 1000;
const CARDS_PER_ROW = 3;

const dateFrom = new Intl.DateTimeFormat(DATE_LOCALES, DATE_OPTIONS).format(Date.now() - WEEK);
const dateTo = new Intl.DateTimeFormat(DATE_LOCALES, DATE_OPTIONS).format(Date.now());

const NEWS_API_OPTIONS = {
  baseUrl: 'https://nomoreparties.co/news/v2/everything',
  from: `from=${dateFrom}`,
  to: `to=${dateTo}`,
  pageSize: 'pageSize=100',
  apiKey: 'apiKey=19099c172d26417a8c40212cb48a6045',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const SAVEDNEWS_ERR = 'Ошибка при загрузке сохранённых новостей'
const UNAUTHORIZED_ERR = 'Пользователь с таким email не найден';
const BAD_REQUEST_ERR = 'Не передано одно из полей';
const KEYWORD_ERR = 'Введите ключевое слово';
const LOADNEWS_ERR = 'Ошибка при загрузке новостей';
const DELETECARD_ERR = 'Ошибка при удалении карточки';

module.exports = {
  DELETECARD_ERR,
  CARDS_PER_ROW,
  LOADNEWS_ERR,
  KEYWORD_ERR,
  SAVEDNEWS_ERR,
  NEWS_API_OPTIONS,
  BASE_URL,
  UNAUTHORIZED_ERR,
  BAD_REQUEST_ERR
};
