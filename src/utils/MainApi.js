import BadRequestError from '../errors/bad-request-err';
import UnauthorizedError from '../errors/unauthorized-err';
const { BASE_URL, UNAUTHORIZED_ERR, BAD_REQUEST_ERR } = require('../utils/constants');

export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({ email, password, name }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          if (err.error) {
            throw new BadRequestError(err.error);
          } else {
            throw new BadRequestError(err.message);
          }
        });
    }
    return res.json();
  });

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
  credentials: 'same-origin',
  body: JSON.stringify({ email, password }),
})
  .then((res) => {
    if (res.status === 400) {
      throw new BadRequestError({ message: BAD_REQUEST_ERR });
    }
    else if (res.status === 401) {
      throw new UnauthorizedError({ message: UNAUTHORIZED_ERR });
    }
    return res.json();
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  });

export const getUserInfo = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          throw new UnauthorizedError(err.message);
        });
    }
    return res.json()
  })
  .then((data) => data);

export const getSavedNews = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  })
    .then((res) => {
      return res.json();
    });
}

export const saveArticle = (article) => {
  const { keyword, title, description, publishedAt, source, url, urlToImage } = article;

  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      keyword,
      title,
      description,
      publishedAt,
      source: source.name,
      url,
      urlToImage,
    }),
  })
    .then((res) => {
      return res.json();
    });
}

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
};