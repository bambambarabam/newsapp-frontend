import React from 'react';
import Link from '../Link/Link';
import fbIcon from '../../images/fb.svg';
import ghIcon from '../../images/github.svg';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <p className='footer__credits'>
        &copy; 2021 Newsapp, Powered by News API
      </p>
      <ul className='footer__list'>
        <li>
          <Link path='/' linkClassName='footer__link'>Главная</Link>
        </li>
        <li>
          <a
            href='https://praktikum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel='noopener noreferrer'>Яндекс.Практикум</a>
        </li>
      </ul>
      <ul className='footer__media'>
        <li>
          <a
            href='https://github.com/bambambarabam'
            target='_blank'
            rel='noopener noreferrer'>
            <img className='footer__icon' src={ghIcon} alt='Ссылка на Гитхаб.'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/yandex.praktikum/'
            target='_blank'
            rel='noopener noreferrer'>
            <img className='footer__icon' src={fbIcon} alt='Ссылка на Фейсбук.'
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;